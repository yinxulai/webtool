import { AppContext } from "../../_app/ctx"
import { Container } from "react-pitaya"
import { Search } from "../search"
import style from "./style.less"
import React from "react"


export const Navbar = () => {
  const context = React.useContext(AppContext)
  React.useEffect(() => {
    context.navbar.addListener(() => {
      console.log('navbar 变身')
    })
  })
  return (
    <Container className={[style.navbar]}>
      <Search />
    </Container>
  )
}
