import React from 'react'
import { appInfo } from './config'
import { Container } from 'react-pitaya'
import { Layout } from '../../components/layout'

function mockRandomData(length: number): number[] {
  return new Array(length).fill(null).map(() => {
    return Math.floor(Math.random() * 100)
  })
}

export default function render(props: AppProps) {
  console.log(props, mockRandomData(10))
  return (
    <Layout info={appInfo}>
      <Container>

      </Container>
    </Layout>
  )
}
