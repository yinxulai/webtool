import React from 'react'
import { appInfo } from './config'
import { Container } from 'react-pitaya'
import { Code } from '../../components/code'
import { Layout } from '../../components/layout'

// 当前时间
export function CurrentTimestamp() {
  const [date, upDate] = React.useState(Date.now())

  React.useEffect(() => {
    const timer = setInterval(() => {
      upDate(Date.now())
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return <p>{date}</p>
}

// 日前与时间戳的相互转换
export function DateToTimestamp() {
  return <p>'转换'</p>
}

export function SampleCode() {
  return (
    <Code language="javascript">
      {`
        import next from 'next'
        import 'reflect-metadata'
        import express from 'express'
        import session from './plugins/session'
        import Account from './controller/account'
        import { isDevelop } from '../utils/node'
        import currentUser from './plugins/currentUser'
        import { useExpressServer } from 'routing-controllers'
      `}
    </Code>
  )
}

export default function render(_: AppProps) {

  return (
    <Layout info={appInfo}>
      <Container>
        <CurrentTimestamp />
        <DateToTimestamp />
        <SampleCode />
      </Container>
    </Layout>
  )
}
