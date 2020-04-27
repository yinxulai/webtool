import React from "react"
import Link from "next/link"
import styles from "./style.less"
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
    <Container className={[styles.navbar]}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo}>@</div>
          <Link href="/">
            <div className={styles.brandname}>WEBTOOL</div>
          </Link>
        </div>
        <div className={styles.menus}>
          <div className={styles.menusItem}>
            <Link href="/about"><a>关于</a></Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
