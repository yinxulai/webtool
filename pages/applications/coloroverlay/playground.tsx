import React, { useEffect } from 'react'
import autobind from 'react-pitaya/lib/helper/autobind'
import { success, error } from 'react-pitaya/lib/helper/toaster'

abstract class Layer {
  x: number // 位置 x
  y: number // 位置 y
  width: number // 宽
  height: number // 高
  zIndex: number // z 轴级别
  isActive: boolean // 激活状态

  draw(_canvasWidth: number, _canvasHeight: number, _context: CanvasRenderingContext2D) {
    console.warn('继承者需要自己实现 draw 方法')
  }

  isArea(x: number, y: number): boolean {
    if (
      x >= this.x
      && y > this.y
      && x <= this.x + this.width
      && y <= this.y + this.height
    ) {
      return true
    } else {
      return false
    }
  }

  setActive(active: boolean) {
    this.isActive = active
  }

  setZIndex(zindex: number) {
    this.zIndex = zindex
  }

  setPosition(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class ImageLayer extends Layer {
  image: any

  constructor(image?: HTMLImageElement) {
    super()
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw(canvasWidth: number, canvasHeight: number, context: CanvasRenderingContext2D, ) {
    let { width = 0, height = 0 } = this
    const { x = 0, y = 0, image = new Image() } = this

    if (width >= canvasWidth / 2 || height >= canvasHeight / 2) {
      const scalefactor = 0.3 // 相当于缩放相对轴的 30%
      const rawScale = width / height // 原始比例

      if (width > height) {
        width = canvasWidth * scalefactor
        height = width / rawScale
      } else {
        height = canvasHeight * scalefactor
        width = height * rawScale
      }
    }
    context.drawImage(image, x, y, x + width, y + height)
  }
}

class Canvas {
  width: number
  height: number
  layers: Layer[]
  domRect: DOMRect
  dom: HTMLCanvasElement
  context: CanvasRenderingContext2D

  constructor() {
    this.width = 0
    this.height = 0
    this.layers = []

    this.dom = null
    this.domRect = null
    this.context = null
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
  }

  // 绑定事件
  bindEvent(dom: HTMLCanvasElement) {
    dom.addEventListener('drop', this.handleDrop)
    dom.addEventListener('click', this.handleClick)
    dom.addEventListener('resize', this.handleReSize)
    dom.addEventListener('keydown', this.handleKeyDown)
    dom.addEventListener('dragover', this.handleDragOver)
    dom.addEventListener('mousemove', this.handleMouseMove)
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
  getSortedLayers(sort: boolean): Layer[] {
    return this.layers.sort((fl, ll) => sort
      ? ll.zIndex - fl.zIndex
      : fl.zIndex - ll.zIndex
    )
  }

  @autobind
  handleDragOver(event: DragEvent) {
    event.preventDefault()
  }

  // 处理鼠标移动事件
  @autobind
  handleMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event
    const layers = this.getSortedLayers(true)
    const maxZIndex = this.getExtremeZIndex(true)
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index]
      if (layer.isArea(clientX, clientY)) {
        layer.setZIndex(maxZIndex + 1)
        layer.setActive(true)
        // 处理移动
      }
    }
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
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index]
      if (layer.isArea(clientX, clientY)) {
        layer.setZIndex(maxZIndex + 1)
      }
    }
  }

  @autobind
  handleDrop(event: DragEvent) {
    event.preventDefault()
    // const { x = 0, y = 0 } = event
    // const { x: dx, y: dy } = this.domRect
    const files = event.dataTransfer.files
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'))
    const imageHTMLs = Promise.all(imageFiles.map(imageFile => this.fileToImage(imageFile)))
    success(`收到 ${imageFiles.length} 张图片`)

    imageHTMLs
      .then(images => {
        images.forEach(image => {
          const layer = new ImageLayer(image)
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
    const layers = this.getSortedLayers(false)
    for (let index = 0; index < layers.length; index++) {
      const layer = layers[index];
      layer.draw(this.width, this.height, this.context)
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