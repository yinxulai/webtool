import React from "react"
import styles from "./style.less"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © BLOGO(个人博客) 2020 - {new Date().getFullYear()} · 皖ICP备19004644号 · DESIGNED BY
      &ensp;<a href="https://github.com/yinxulai"><strong>ALAIN</strong></a>
    </footer>
  )
}
