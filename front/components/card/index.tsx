import React from 'react'
import Link from "next/link"
import styles from "./style.less"
import { Container } from "react-pitaya"
import { IProps as IContainerProps } from 'react-pitaya/lib/components/container'
import { Tag } from "../tag"

interface Props extends IContainerProps {
  name: string, //名称
  keywords: string[], // 功能关键字
  routePath: string, // 路由
  description: string // 说明
}

export const Card = (props: Props) => {
  const { className, style } = props
  const { name, keywords = [], routePath, description } = props

  return (
    <Container className={[styles.card, className]} style={[style]}>
      <div className={styles.name}>
        <strong>{name}</strong>
      </div>
      <div className={styles.description}>
        <b>{description}</b>
      </div>

      <div className={styles.tags}>
        {keywords.slice(0,2).map(key => <Tag key={key}>{key}</Tag>)}
      </div>

      <Link href={routePath}>
        <a className={styles.link}>进入</a>
      </Link>

    </Container>
  )
}
