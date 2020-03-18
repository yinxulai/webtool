import React from 'react'
import { Container } from 'react-pitaya';
import { AppProps } from "../../../const/apps";

// 当前时间
export function CurrentTimestamp() {
  const [date, upDate] = React.useState(Date.now())

  React.useEffect(() => {
    const timer = setInterval(() => {
      upDate(Date.now())
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return <p>{date}</p>
}

// 日前与时间戳的相互转换
export function DateToTimestamp() {
  return <p>'转换'</p>
}

export default function (props: AppProps) {
  console.log(props)
  return (
    <Container>
      <CurrentTimestamp />
      {/* <DateToTimestamp /> */}
    </Container>
  )
}