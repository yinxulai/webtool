import React from 'react'
import styles from './style.less'
import { cloneDeep, merge } from 'lodash'
import { warning } from 'react-pitaya/lib/helper/toaster'
import { Container, StepPlayer, Input, Button } from 'react-pitaya'

interface StepState {
  id: number
  value: number
  highlight: boolean // 高亮
  description: string // 描述
  active: boolean
  sorted: boolean
}

// 模拟数据
function generateSelectSortSteps(length: number): StepState[][] {
  console.time('generateSelectSortSteps')
  const steps: StepState[][] = []

  // 生成随机数据
  const randomData = new Array(length).fill(null)
    .map((_, index) => (
      {
        id: index,
        active: false,
        sorted: false,
        position: index, // 当前位置
        highlight: false, // 高亮
        description: '',
        value: Math.floor(Math.random() * 1000)
      }
    ))

  const pushStep = (index: number, state: Partial<StepState>) => {
    // 复制一个新的数组并修改状态
    // 下面这两个操作太费时了
    const cloneData = cloneDeep(randomData)
    merge(cloneData[index], state)
    randomData[index] = cloneData[index]
    steps.push(cloneData)
  }

  for (let index = 0; index < randomData.length; index++) {

    pushStep(index, {
      active: true,
      highlight: true,
      description: `第${index}作为比较对象`
    })

    // 当前最小值
    let currentMiniIndex = index

    for (let comparIndex = index; comparIndex < randomData.length; comparIndex++) {
      const compareData = randomData[comparIndex];
      const minData = randomData[currentMiniIndex]

      // 开始状态
      pushStep(comparIndex, {
        active: true,
        highlight: true,
        description: `${compareData.value} 与 ${minData.value} 比较`
      })

      // 比较
      if (compareData.value < randomData[currentMiniIndex].value) {
        currentMiniIndex = comparIndex

        pushStep(comparIndex, {
          active: true,
          highlight: true,
          description: `${compareData.value} 比 ${minData.value} 小, 最小值`
        })

      } else {

        pushStep(comparIndex, {
          active: true,
          highlight: true,
          description: `${compareData.value} 比 ${minData.value} 大, 继续比较`
        })
      }

      pushStep(comparIndex, {
        active: false,
        highlight: false,
        description: `等待下次比较`
      })
    }

    // 找到之后互换位置
    // 第一个换到后面
    pushStep(index, {
      highlight: true,
      description: `第 ${randomData[index].value} 与 ${randomData[currentMiniIndex].value} 交换`
    })


    // 后面换到前面 并标明完成
    pushStep(currentMiniIndex, {
      sorted: true,
      highlight: true,
      description: '已确定位置'
    })

    const tempPosition = randomData[currentMiniIndex]
    randomData[currentMiniIndex] = randomData[index]
    randomData[index] = tempPosition
  }

  return steps
}


function renderSortChart(steps: StepState[] = []) {
  const maxValue = steps.map(step => step.value).sort((a, b) => b - a)[0]

  return (
    <div className={styles.chartScreen}>
      {steps.map(step => {
        return (
          <Container
            className={[
              styles.valueRect,
              step.sorted ? styles.sorted : '',
              step.active ? styles.active : '',
            ]}
            style={{ width: (step.value / maxValue) * 60 + 30 + '%' }}
          >
            {step.value} {step.description}
          </Container>
        )
      })}
    </div>
  )
}

const defaultLength = 10
const dafalueSteps = generateSelectSortSteps(10)

export default function render(_props: AppProps) {
  const [steps, setSteps] = React.useState(dafalueSteps)
  const [length, setLength] = React.useState(defaultLength)

  const reGenerateSteps = () => {
    if (!Number.isFinite(length)) {
      return warning('无效的数值')
    }

    if (length > 100) {
      return warning('指定长度过大')
    }

    setSteps(generateSelectSortSteps(length))
  }

  return (
    <Container
      className={[styles.selectsort]}
    >
      <StepPlayer
        playSpeed={50}
        autoloop={true}
        steps={steps || []}
        stepRender={renderSortChart}
      />
      <div className={styles.controlBar}>
        <Input
          type="number"
          value={length}
          placeholder="输入长度"
          className={[styles.lengthInput]}
          onChange={e => setLength(Number(e.currentTarget.value))}
        />
        <Button onClick={reGenerateSteps}>生成排序过程</Button>
      </div>
    </Container>
  )
}
