import React from 'react'
import { appInfo } from './config'
import { Container, MarkDown } from 'react-pitaya'
import { Playground } from './playground'
import { Layout } from '../../components/layout'
import { Textarea } from 'react-pitaya/lib/components/input'

export default function render(_: AppProps) {
  return (
    <Layout info={appInfo}>
      <Container>
        <MarkDown>
          PS 中
        </MarkDown>
        <Playground />
        <MarkDown>
          可以输入你的算法来看看会发生什么
        </MarkDown>
        <Textarea width={500} />
      </Container>
    </Layout>
  )
}
