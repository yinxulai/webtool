import React from 'react'
import { appInfo } from './config'
import { Container } from 'react-pitaya'
import * as physical from './physical'
import { Layout } from '../../components/layout'

export default function render(_: AppProps) {
  return (
    <Layout info={appInfo}>
      <Container>
      </Container>
    </Layout>
  )
}
