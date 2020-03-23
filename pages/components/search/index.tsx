import React, { useEffect } from "react"
import styles from "./style.less"
import { Container } from "react-pitaya"

interface IProps {
  onChange?: (data: string[]) => void
}

export const Search: React.FC<IProps> = (props) => {
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
