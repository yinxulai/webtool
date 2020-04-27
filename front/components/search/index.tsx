import React, { useEffect } from "react"
import { Container } from "react-pitaya"
import styles from "./style.less"

interface Props {
  onChange?: (data: string[]) => void
}

export const Search: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState<string>()

  useEffect(()=>{
    if (value && props.onChange) {
      props.onChange(value.split(' '))
    }
  }, [value])


  return (
    <Container className={[styles.search]}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </Container>
  )
}
