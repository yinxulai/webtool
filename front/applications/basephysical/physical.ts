import autobind from 'react-pitaya/lib/helper/autobind'

// 二维的方向
export class Direction {
  value: number
  constructor(value: number) {
    if (value < 0 || value > 360) {
      console.error('方向范围在 0-360 之间')
    }
    this.value = value
  }
}

export class Energy {
  value: number
  static lossFactor: number
  constructor(value: number) {
    this.value = value
    Energy.lossFactor = 0.01
  }

  loss() {
    if (this.value <= 0) {
      return 0
    }

    this.value = this.value - (
      this.value * Energy.lossFactor
    )
  }
}

export class Power {
  energy: Energy // 能量
  direction: Direction // 方向 0-360

  constructor(energy: number = 0, direction: number = 0) {
    this.energy = new Energy(energy)
    this.direction = new Direction(direction)
  }

  // 混入其他力
  // 重新计算方向
  cross(target: Power) {
    const { direction: { value: d }, energy: { value: e } } = this
    const { direction: { value: td }, energy: { value: te } } = target

    const directionDiff = td - d // 方向差
    const weights = te / (te + e) // 力的大小比重

    // 方向是原来的方向加上 方向差乘以比重， 也就是谁的力大偏向谁
    this.direction.value = d + directionDiff * weights

    // 力的大小就是两者相加然后损失去一些
    this.energy.value = (e + te) * (1 - 0.3) // 损失 0.3
  }

  // 损失
  loss(factor: number = 0.01) {
    this.energy.value - this.energy.value * factor
  }
}

export class BasePower extends Power {
  constructor(energy: number = 0, direction: number = 0) {
    super(energy, direction)
  }
}

// 外力
export class ExternalPower extends Power {
  constructor(energy: number = 0, direction: number = 0) {
    super(energy, direction)
  }
}

// 重力
export class Gravity extends Power {
  constructor(mass: number) {
    const factor = 0.3
    // 重力的方向永远向下
    const direction = 180
    // 重力的能量与质量挂钩
    const energy = mass * factor
    //
    super(direction, energy)
  }
}

// 弹力
export class BouncePower extends Power {
  // 弹力 是受到外力挤压、碰撞产生的力
  constructor(elasticity: number, externalPower: ExternalPower) {
    // 弹力的方向与外力方向相反
    const direction = (externalPower.direction.value + 180) % 360
    // 弹力的大小受到外力的影响
    const energy = externalPower.energy.value * elasticity
    //
    super(energy, direction)
  }
}

// 基本体
class BaseBody {
  mass: number // 质量
  gravity: Gravity // 重力
  bouncePower: BouncePower[] // 弹力
  externalPower: ExternalPower[] // 外来力

  constructor(mass: number) {
    this.gravity = new Gravity(mass)
    this.externalPower = []
    this.bouncePower = []
  }

  // 清理弹力
  cleanBouncePower() {
    this.bouncePower = this.bouncePower
      .filter(power => power.energy.value !== 0)
  }

  // 清理外力
  cleanExternalPower() {
    this.externalPower = this.externalPower
      .filter(power => power.energy.value !== 0)
  }

  // 设置弹力
  addBouncePower(p: BouncePower) {
    this.bouncePower.push(p)
  }

  // 添加外力
  addExternalPower(p: BouncePower) {
    this.externalPower.push(p)
  }

  // 计算力与方向
  computeEnergyAndDirection() {
    this.cleanBouncePower()
    this.cleanExternalPower()

    const p = new BasePower()
    // 先放入重力
    p.cross(this.gravity)

    // 计算外来力
    this.externalPower.map(power => {
      p.cross(power) // 加入
      p.loss(0.01) // 损失
    })
  }
}

interface Position {
  x: number
  y: number
}

// 基本体的状态
export class BaseBodyState {
  speed: number // 速度
  position: Position // 位置
  direction: Direction // fangxiang
}

// 刚体
// 不会因力发生形变的理想物体
export class RigidBody extends BaseBody {
  elasticity: number // 弹性

  constructor(mass: number, elasticity: number) {
    super(mass)
    this.elasticity = elasticity
  }
}

// 世界
export class World {
  runing: boolean
  animationFrame: number
  bodys: Map<Symbol, BaseBody>
  states: Map<Symbol, BaseBodyState>

  constructor() {
    this.runing = false
    this.bodys = new Map<Symbol, BaseBody>([])
  }

  addBody<T extends BaseBody>(body: T) {
    const symbol = Symbol(this.bodys.size)
    this.bodys.set(symbol, body)
  }

  // 计算世界
  @autobind
  compute(_time?: number) {
    if (this.runing) {
      this.animationFrame = requestAnimationFrame(time => {
        // 计算每个物体的方向和力
        this.bodys.forEach(body => {
          body.computeEnergyAndDirection()
        })
        // 继续下次
        this.compute(time)
      })
    }
  }

  // 销毁
  @autobind destroy() {
    this.bodys = null
    this.states = null
  }

  // 暂停世界
  @autobind stop() {
    console.log('stop')

    if (!this.runing) {
      return console.warn('世界没有运行')
    }

    this.runing = false
    cancelAnimationFrame(this.animationFrame)
  }
  // 启动世界
  @autobind run() {
    console.log('run')

    if (this.runing) {
      return console.warn('世界正在运行')
    }

    this.runing = true
    this.compute(Date.now())
  }
}
