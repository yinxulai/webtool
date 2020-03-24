import React from 'react'
import { appInfo } from './config'
import { Container, Input } from 'react-pitaya';
import { Layout } from '../../components/layout'

export default function render(_: AppProps) {
  return (
    <Layout info={appInfo}>
      <Container>
        <Input placeholder="输入正则" />
      </Container>
    </Layout>
  )
}
