import React from 'react'
import { Container } from 'react-pitaya';
import { AppProps } from "../../../config/apps";
import { Layout } from '../../components/layout';

export default function (props: AppProps) {
  console.log(props)
  return (
    <Layout>
      <Container>
        加密
    </Container>
    </Layout>
  )
}
