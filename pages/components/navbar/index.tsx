import React from "react"
import style from "./style.less"
import { Search } from "../search"
import { Container } from "react-pitaya"
import { AppContext } from "../../_app/ctx"






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
