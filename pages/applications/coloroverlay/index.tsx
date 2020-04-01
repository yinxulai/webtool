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
        <Textarea/>
        <MarkDown>
          > 发现了 canvas 的一个小黑科技：原本 canvas 是不支持监听键盘时间的，通过给 CanvasHTML 添加 tabIndex 属性，就可以了,具体原因这里不展开了。
        </MarkDown>
      </Container>
    </Layout>
  )
}
