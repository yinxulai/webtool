import React from 'react'
import { appInfo } from './config'
import { Playground } from './canvas'
import { Layout } from '../../components/layout'
import { Container, MarkDown } from 'react-pitaya'
import { Textarea } from 'react-pitaya/lib/components/input'

export default function render(_: AppProps) {
  return (
    <Layout info={appInfo}>
      <Container>
        <MarkDown>
          #### - 导言
        </MarkDown>
        <MarkDown>
          在 PhotoShop 中有一项很重要的功能，叫做图层叠加模式，可能设计小伙伴在对位图的编辑中可能会经常用到，
          今天我们就从另一个角度来带大家认识一下在 PS 中几个常见的模式的本质。同时在本页的 `Playground` 中你可以对
          文中的几个常见模式进行验证和尝试。
        </MarkDown>
        <MarkDown>
          #### - 变暗
        </MarkDown>
        <Playground />
        <MarkDown>
          可以输入你的算法来看看会发生什么
        </MarkDown>
        <Textarea />
        <MarkDown>
          > 发现了 canvas 的一个小黑科技：原本 canvas 是不支持监听键盘时间的，通过给 CanvasHTML 添加 tabIndex 属性，就可以了,具体原因这里不展开了。
        </MarkDown>
      </Container>
    </Layout>
  )
}
