import React, { useEffect } from 'react'
import autobind from 'react-pitaya/lib/helper/autobind'
import { success, error } from 'react-pitaya/lib/helper/toaster'

interface Size {
  width: number // 宽
  height: number // 高
}

interface Position {
  x: number // 位置 x 相对于画布
  y: number // 位置 y 相对于画布
}

type Rect = Position & Size

// function isEqualRect(a: Rect, b: Rect): boolean {
//   return a.x === b.x
//     && a.y === b.y
//     && a.width === b.width
//     && a.height === b.height
// }

abstract class Layer implements Rect {
  x: number // 位置 x 相对于画布
  y: number // 位置 y 相对于画布
  width: number // 原始的宽
  height: number // 原始的高

  zIndex: number // z 轴级别

  scalefactor: number // 缩放系数
  mouseOffsetX: number // 鼠标在对象上点击时会更新
  mouseOffsetY: number  // 鼠标在对象上点击时会更新

  draw(_size: Size, _context: CanvasRenderingContext2D) {
    console.warn('继承者需要自己实现 draw 方法, 注意')
  }

  isArea(position: Position): boolean {
    const { x, y } = position
    const { width, height } = this.getComputedSize()

    if (
      x >= this.x
      && y >= this.y
      && x <= (this.x + width)
      && y <= (this.y + height)
    ) {
      return true
    } else {
      return false
    }
  }

  setZIndex(zindex: number) {
    this.zIndex = zindex
  }

  setPosition(position: Position) {
    const { x, y } = position
    this.x = x
    this.y = y
  }

  setMouseOffset(position: Position) {
    const { x, y } = position
    this.mouseOffsetX = x
    this.mouseOffsetY = y
  }

  setScalefactor(factor: number) {
    this.scalefactor = factor
  }

  // 获取指定像素点的颜色
  getImageData(rect: Rect): ImageData {
    const size = this.getComputedSize()

    // TODO: 注意服务端
    const cans = new HTMLCanvasElement()
    const ctx = cans.getContext('2d')
    cans.height = size.height
    cans.width = size.width
    this.draw(size, ctx)
    return ctx.getImageData(
      rect.x,
      rect.y,
      rect.width,
      rect.height
    )
  }

  // 获取计算后的尺寸信息
  getComputedSize(): Size {
    const { scalefactor = 1 } = this
    return {
      width: this.width * scalefactor,
      height: this.height * scalefactor
    }
  }
}

class Overlay extends Layer {
  constructor(rect: Rect) {
    super()
    this.x = rect.x
    this.y = rect.y
    this.height = rect.height
    this.width = rect.width
  }

  draw(size: Size, context: CanvasRenderingContext2D) {
    // 取颜色计算
    context.fillStyle = '#e6c7ff'
    context.fillRect(this.x, this.y, size.width, size.height)
    context.stroke()
  }
}

class ImageLayer extends Layer {
  image: HTMLImageElement

  constructor(image: HTMLImageElement) {
    super()
    this.image = image
    this.scalefactor = 1
    this.height = image.width
    this.width = image.height
  }

  draw(size: Size, context: CanvasRenderingContext2D) {
    const { x = 0, y = 0, image = new Image() } = this
    context.drawImage(image, x, y, size.width, size.height)
  }
}

class Canvas {
  width: number
  height: number
  layers: Layer[]
  domRect: DOMRect
  activeLayer: Layer
  overlays: Overlay[]
  dom: HTMLCanvasElement
  context: CanvasRenderingContext2D

  constructor() {
    this.width = 0
    this.height = 0
    this.layers = []

    this.dom = null
    this.domRect = null
    this.context = null
    this.activeLayer = null
  }

  pushLayer(layer: Layer) {
    this.layers.push(layer)
    layer.setZIndex(this.getExtremeZIndex(true) + 1)
    this.draw() // 绘制屏幕
  }

  // 绑定 canvas 对象
  bindCanvas(dom: HTMLCanvasElement) {
    this.dom = dom
    this.bindEvent(this.dom)
    this.width = this.dom.width
    this.height = this.dom.height
    this.context = dom.getContext('2d')
    this.domRect = this.dom.getBoundingClientRect()

    // @ts-ignore
    this.dom.instance = this
  }

  // 绑定事件
  bindEvent(dom: HTMLCanvasElement) {
    dom.addEventListener('drop', this.handleDrop)
    dom.addEventListener('wheel', this.handleWheel)
    dom.addEventListener('click', this.handleClick)
    dom.addEventListener('resize', this.handleReSize)
    dom.addEventListener('keydown', this.handleKeyDown)
    dom.addEventListener('dragover', this.handleDragOver)
    dom.addEventListener('mousemove', this.handleMouseMove)
    dom.addEventListener('mousedown', this.handleMouseDown)
  }

  // 获取方向上的 zindex 极值
  // direction true 返回最大的 zindex
  // direction false 返回最小的 zindex
  getExtremeZIndex(direction: boolean): number {
    return this.layers
      .map(layer => layer.zIndex)
      .sort((fz, nz) => direction ? nz - fz : fz - nz)
    [0] || 0
  }

  // 获取排序的层
  // sort true zindex 层级高的在前
  // sort false zindex 层级高的在后
  getSortedLayers(sort: boolean, layers = this.layers): Layer[] {
    return layers.sort((fl, ll) => sort
      ? ll.zIndex - fl.zIndex
      : fl.zIndex - ll.zIndex
    )
  }

  @autobind
  handleWheel(event: WheelEvent) {
    event.preventDefault()
    const { x: cx, y: cy } = this.domRect
    const { x: ex, y: ey, deltaY } = event
    const layers = this.getSortedLayers(true)

    // 鼠标的相对位置
    const mouseX = ex - cx
    const mouseY = ey - cy

    const layer = this.getLayerByPosition(layers, { x: mouseX, y: mouseY })

    if (!layer) {
      return
    }

    if (deltaY > 0) {
      layer.setScalefactor(layer.scalefactor + 0.03 || 1)
    } else if (deltaY < 0) {
      layer.setScalefactor(layer.scalefactor - 0.03 || 0.1)
    }

    this.draw()
  }


  @autobind
  handleDragOver(event: DragEvent) {
    event.preventDefault()
  }


  // 处理鼠标移动事件
  @autobind
  handleMouseMove(event: MouseEvent) {
    if (event.buttons !== 1) {
      return
    }

    const { x: ex, y: ey } = event
    const { x: cx, y: cy } = this.domRect
    const layers = this.getSortedLayers(true)

    // 鼠标的相对位置
    const mouseX = ex - cx
    const mouseY = ey - cy

    const layer = this.getLayerByPosition(layers, { x: mouseX, y: mouseY })

    if (!layer) {
      return
    }

    if (layer === this.activeLayer && layer.isArea({ x: mouseX, y: mouseY })) {

      // 新的位置 =  + offset
      const newX = mouseX - layer.mouseOffsetX
      const newY = mouseY - layer.mouseOffsetY
      // 设置新的位置
      layer.setPosition({ x: newX, y: newY })
      this.draw() // 刷新显示
    }
  }

  @autobind
  handleMouseDown(event: MouseEvent) {
    const { x: ex, y: ey } = event
    const { x: cx, y: cy } = this.domRect
    const layers = this.getSortedLayers(true)
    const maxZIndex = this.getExtremeZIndex(true)

    // 鼠标的相对位置
    const mouseX = ex - cx
    const mouseY = ey - cy

    const layer = this.getLayerByPosition(layers, { x: mouseX, y: mouseY })

    if (!layer) {
      return
    }

    if (layer.zIndex < maxZIndex) {
      // 如果层级太低 加大一点
      layer.setZIndex(maxZIndex + 2)
      this.draw()
    }

    // 设置当前 layer 为 activeLayer
    this.activeLayer = layer

    // 鼠标距离图片的距离
    const offsetX = mouseX - layer.x
    const offsetY = mouseY - layer.y

    layer.setMouseOffset({ x: offsetX, y: offsetY })
    this.draw()
  }

  @autobind
  handleKeyDown(event: KeyboardEvent) {
    console.log(event)
  }

  // 处理点击事件
  @autobind
  handleClick(event: MouseEvent) {
    const { clientX, clientY } = event
    const layers = this.getSortedLayers(true)
    const maxZIndex = this.getExtremeZIndex(true)
    const layer = this.getLayerByPosition(layers, { x: clientX, y: clientY })

    if (layer) {
      layer.setZIndex(maxZIndex + 1)
    }
  }

  @autobind
  handleDrop(event: DragEvent) {
    event.preventDefault()
    const { x: dx, y: dy } = this.domRect
    const files = event.dataTransfer.files
    const { x: ex = 0, y: ey = 0 } = event
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'))
    const imageHTMLs = Promise.all(imageFiles.map(imageFile => this.fileToImage(imageFile)))
    success(`收到 ${imageFiles.length} 张图片`)

    imageHTMLs
      .then(images => {
        images.forEach(image => {
          const layer = new ImageLayer(image)
          layer.setPosition({ x: ex - dx, y: ey - dy })
          this.pushLayer(layer)
        })
      })
      .catch(err => {
        error(`读取文件错误:`)
        console.error(err)
      })
  }

  // 处理 dom 尺寸变化
  @autobind
  handleReSize(_event: UIEvent) {
    this.width = this.dom.width
    this.height = this.dom.height
    this.draw()
  }

  // 根据 layers 的顺序获取位置的 layer
  getLayerByPosition(layers: Layer[], position: Position): Layer {
    const { x, y } = position
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index]
      if (layer.isArea({ x, y })) {
        return layer
      }
    }

    return null
  }

  // 获取 layer 的全部交集
  getLayerJionRects() {
    const rectSet: Rect[] = []
    // 求交集面积
    this.layers.forEach(layer => {
      this.layers.forEach((tLayer => {

        if (tLayer === layer) {
          return // 找到自己了
        }

        const rect: Rect = {
          x: 0, y: 0,
          height: 0, width: 0
        }

        rect.x = Math.max(layer.x, tLayer.x)
        rect.y = Math.max(layer.y, tLayer.y)

        const laterSize = layer.getComputedSize()
        const tLayerSize = tLayer.getComputedSize()

        rect.width = Math.min(laterSize.width + layer.x, tLayerSize.width + tLayer.x) - rect.x
        rect.height = Math.min(laterSize.height + layer.y, tLayerSize.height + tLayer.y) - rect.y

        if (rect.width > 0 && rect.height > 0) {
          rectSet.push(rect)
        }
      }))
    })

    for (let index = 0; index < rectSet.length; index++) {
      const rect = rectSet[index]
      // 去重
      if (!rectSet.includes(rect, index)) {
        rectSet.splice(index, 1)
      }
    }

    return rectSet
  }

  // 文件转图片
  fileToImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, rejects) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('error', rejects)
      reader.addEventListener('load', event => {
        const image = new Image()
        image.src = event.target.result as any
        image.addEventListener('error', rejects)
        image.addEventListener('load', () => resolve(image))
      })
    })
  }

  // 清空画布
  clearCanvas() {
    if (this.context && this.dom) {
      this.context.clearRect(
        0, 0, this.dom.width, this.dom.height
      )
    }
  }

  // 绘制
  draw() {
    this.clearCanvas()
    // 绘制 layers
    const layers = this.getSortedLayers(false)
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index]
      const size = layer.getComputedSize()
      layer.draw(size, this.context)
    }

    // 绘制 overlays
    const jionRects = this.getLayerJionRects()
    const overlays = jionRects.map(rect => new Overlay(rect))
    const sortedOverlays = this.getSortedLayers(false, overlays)
    for (let index = 0; index < sortedOverlays.length; index++) {
      const overlay = sortedOverlays[index]
      const size = overlay.getComputedSize()
      overlay.draw(size, this.context)
    }
  }
}

export function Playground() {
  const [canvas] = React.useState(new Canvas())
  const canvasRef = React.useRef<HTMLCanvasElement>(null) // dom

  useEffect(() => {
    if (canvasRef.current) {
      canvas.bindCanvas(canvasRef.current)
    }
  }, [canvasRef])

  return (
    <canvas ref={canvasRef} width="500" height="400">
      <p>您的系统不支持此程序!</p>
    </canvas>
  )
}
