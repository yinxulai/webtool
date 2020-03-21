import React from "react"
import styles from "./style.less"
import { Container } from "react-pitaya"

export const Search = () => {
  const [value, setValue] = React.useState<string>()

  return (
    <Container className={[styles.search]}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </Container>
  )
}