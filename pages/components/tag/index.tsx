import React from 'react'
import styles from "./style.less"
import { Container } from "react-pitaya"

interface Props {

}

export const Tag: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children } = props

  return (
    <Container className={[styles.tag]}>
      {children}
    </Container>
  )
}
