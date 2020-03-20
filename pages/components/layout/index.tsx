import React from 'react'
import style from "./style.less"
import { Container } from "react-pitaya"

interface Props {

}

export const Layout: React.FC<React.PropsWithChildren<Props>> = (props) => {
  console.log(props)
  return (
    <Container className={[style.layout]}>
      <Container className={[style.content]}>
        {props.children}
      </Container>
      <Container className={[style.recommendedBooth]}>
      </Container>
      <Container className={[style.comment]}>

      </Container>
    </Container>
  )
}
