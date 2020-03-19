import React from 'react'
import style from "./style.less"
import { Container } from "react-pitaya"
import { LightAsync } from 'react-syntax-highlighter';

interface Props {
  language: string
}

export const Code: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Container className={[style.navbar]}>
      <LightAsync language={props.language}>
        {props.children}
      </LightAsync>
    </Container>
  )
}
