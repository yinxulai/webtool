import styles from './style.less'
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

interface JionRect extends Rect {
  imageDatas: ImageData[]
}

interface DrawOptions extends Size {
  isActive?: boolean
}

abstract class Layer implements Rect {
  x: number // 位置 x 相对于画布
  y: number // 位置 y 相对于画布
  width: number // 原始的宽
  height: number // 原始的高

  zIndex: number // z 轴级别

  scalefactor: number // 缩放系数
  mouseOffsetX: number // 鼠标在对象上点击时会更新
  mouseOffsetY: number  // 鼠标在对象上点击时会更新

  draw(_context: CanvasRenderingContext2D, _options: DrawOptions) {
    console.warn('继承者需要自己实现 draw 方法, 注意')
  }

  isArea(position: Position): boolean {
    let { x, y } = position
    // const { mouseOffsetX, mouseOffsetY } = this
    const { width, height } = this.getComputedSize()

    if (
      x >= this.x
      && y >= this.y
      && x <= (this.x + width)
      && y <= (this.y + height)
    ) {
      // console.log('true', position, this.x + width, this.y + height)
      return true
    } else {
      // console.log('false', position, this.x + width, this.y + height)
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

  // 获取计算后的尺寸信息
  getComputedSize(): Size {
    const { scalefactor = 1 } = this
    return {
      width: this.width * scalefactor,
      height: this.height * scalefactor
    }
  }
}

// 叠加层
class Overlay extends Layer {
  imageDatas: ImageData[]

  constructor(rect: JionRect) {
    super()
    this.x = rect.x
    this.y = rect.y
    this.width = rect.width
    this.height = rect.height
    this.imageDatas = rect.imageDatas
  }

  draw(context: CanvasRenderingContext2D, options: DrawOptions) {
    const { width, height } = options
    // const drawImageData = new ImageData(this.width, this.height)
    // drawImageData.data =  this.imageDatas[0].data

    //  drawImageData.data.map((_, i) => {
    //   // const _valueSet = this.imageDatas.map(image => {
    //   //   return image.data[i]
    //   // })
    //   return i % 255
    // })

    context.strokeStyle = 'rgba(0, 0, 0, 1.0)'
    context.strokeRect(this.x, this.y, width, height)
    context.fillStyle = 'rgba(0, 0, 0, 0.1)'
    context.fillRect(this.x, this.y, width, height)

    // createImageBitmap(this.imageDatas[0]).then(
    //   image => {

    //   },
    //   err => { error('数据错误, 绘制失败'); console.error(err) }
    // )
  }
}

class ImageLayer extends Layer {
  image: ImageBitmap

  constructor(image: ImageBitmap) {
    super()
    this.image = image
    this.scalefactor = 1
    this.height = image.width
    this.width = image.height
  }

  draw(context: CanvasRenderingContext2D, options: DrawOptions) {
    const { width, height, isActive } = options
    const { x = 0, y = 0, image = new ImageBitmap() } = this

    if (isActive) {
      context.strokeStyle = 'rgba(0, 0, 0, 1.0)'
      context.strokeRect(this.x, this.y, width, height)
    }

    context.drawImage(image, x, y, width, height)
  }
}

class Canvas {

  width: number // 画布宽高
  height: number // 画布宽高
  layers: Layer[] // 画布层
  domRect: DOMRect // dom rect
  activeLayer: Layer // 当前的活跃层
  dom: HTMLCanvasElement // dom
  context: CanvasRenderingContext2D // canvas 上下文

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

  // 鼠标滚动缩放事件
  @autobind
  handleWheel(event: WheelEvent) {
    event.preventDefault()

    // const { x: cx, y: cy } = this.domRect
    const { offsetX, offsetY, deltaY } = event

    // 鼠标的相对位置
    const mouseX = offsetX
    const mouseY = offsetY

    const layers = this.getSortedLayers(true)
    const layer = this.getLayerByPosition(layers, { x: mouseX, y: mouseY })

    if (!layer) {
      return
    }

    if (deltaY > 0) {
      layer.setScalefactor(layer.scalefactor - 0.04 || 0.1)
    } else if (deltaY < 0) {
      layer.setScalefactor(layer.scalefactor + 0.04 || 1)
    }

    this.draw()
  }

  // handleDragOver
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

    const { offsetX, offsetY } = event

    const layers = this.getSortedLayers(true)
    const layer = this.getLayerByPosition(layers, { x: offsetX, y: offsetY })

    if (!layer) {
      return
    }

    if (layer === this.activeLayer) {

      // 新的位置 =  + offset
      const newX = offsetX - layer.mouseOffsetX
      const newY = offsetY - layer.mouseOffsetY

      // 设置新的位置
      layer.setPosition({ x: newX, y: newY })
      this.draw() // 刷新显示
    }
  }

  @autobind
  handleMouseDown(event: MouseEvent) {
    const { offsetX, offsetY } = event

    const layers = this.getSortedLayers(true)
    const maxZIndex = this.getExtremeZIndex(true)
    const layer = this.getLayerByPosition(layers, { x: offsetX, y: offsetY })

    if (!layer) {
      return
    }

    // 设置当前 layer 为 activeLayer
    this.activeLayer = layer

    if (layer.zIndex < maxZIndex) {
      // 如果层级太低 加大一点
      layer.setZIndex(maxZIndex + 2)
      this.draw()
    }

    layer.setMouseOffset({ x: offsetX - layer.x, y: offsetY - layer.y })
    this.draw()
  }

  @autobind
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Delete':
        this.layers = this.layers.filter(layer => layer !== this.activeLayer)
    }

    this.draw()
  }

  // 拖入文件的处理
  @autobind
  handleDrop(event: DragEvent) {
    event.preventDefault()
    const { offsetX, offsetY } = event
    const files = event.dataTransfer.files

    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'))
    const imageBitmaps = Promise.all(imageFiles.map(imageFile => createImageBitmap(imageFile)))
    success(`收到 ${imageFiles.length} 张图片`)

    imageBitmaps
      .then(images => {
        images.forEach(image => {
          const layer = new ImageLayer(image)
          layer.setPosition({ x: offsetX, y: offsetY })
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
  getLayerJionRects(): JionRect[] {
    const rectSet: JionRect[] = []
    // 求交集面积
    this.layers.forEach(layer => {
      this.layers.forEach((tLayer => {

        if (tLayer === layer) {
          return // 找到自己了
        }

        const rect: JionRect = {
          x: 0, y: 0,
          imageDatas: [],
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

    // 取色块
    return rectSet.map(rect => ({
      ...rect,
      imageDatas: []
    }))
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
      const isActive = this.activeLayer === layer
      const size = layer.getComputedSize()
      layer.draw(this.context, {
        ...size,
        isActive
      })
    }

    // 绘制 overlays
    const jionRects = this.getLayerJionRects()
    const overlays = jionRects.map(rect => new Overlay(rect))
    const sortedOverlays = this.getSortedLayers(false, overlays)
    for (let index = 0; index < sortedOverlays.length; index++) {
      const overlay = sortedOverlays[index]
      const size = overlay.getComputedSize()
      overlay.draw(this.context, { ...size })
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
    <canvas
      height="400"
      width="676"
      tabIndex={1}
      ref={canvasRef}
      className={styles.canvas}
    >
      <p>您的系统不支持此程序!</p>
    </canvas>
  )
}
