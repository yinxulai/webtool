import { Container } from "react-pitaya"
import style from "./style.less"
import { Search } from "../search"

export const Navbar = () => {
  return (
    <Container className={[style.navbar]}>
      <Search />
    </Container>
  )
}
