import React from "react"
import style from "./style.less"
import { Container } from "react-pitaya"
import { AppContext } from "../../_app/ctx"

export const Sidebar = () => {
  const context = React.useContext(AppContext)
  React.useEffect(() => {
    context.navbar.addListener(() => {
      console.log('navbar 变身')
    })
  })

  return (
    <Container className={[style.logo]}>
      侧边栏
    </Container>
  )
}
