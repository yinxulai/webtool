import React from 'react'
import styles from './style.less'
import { Container, StepPlayer, Input, Button } from 'react-pitaya'


export default function render(_props: AppProps) {
  const [steps, setSteps] = React.useState([])
  const [length, setLength] = React.useState(0)
  const reGenerateSteps = () => setSteps([1,2,3])

  return (
    <Container
      className={[styles.selectsort]}
    >
      <StepPlayer
        playSpeed={1}
        autoloop={true}
        steps={steps || []}
        stepRender={()=><>'TODO'</>}
      />
      <div className={styles.controlBar}>
        <Input
          type="number"
          value={length}
          placeholder="输入长度"
          className={[styles.lengthInput]}
          onChange={e => setLength(Number(e.currentTarget.value))}
        />
        <Button onClick={reGenerateSteps}>生成迷宫</Button>
        <Button onClick={reGenerateSteps}>选择算法[TODO]</Button>
      </div>
    </Container>
  )
}
