import React from 'react'
import { Card } from '../card'
import styles from "./style.less"
import { Container } from "react-pitaya"
import { apps } from '../../../config/apps'
import { Tag } from '../tag'


interface Props {
  info: AppInfo
}

// 推荐的 app
function Recommended() {
  // 乱序
  const disruptedApps = apps.sort(
    () => 0.5 - Math.random()
  )
  // 取四个
  const recommendedApps = disruptedApps.slice(0, 4)

  return (
    <Container className={[styles.recommendedBooth]}>
      {
        recommendedApps.map(app =>
          <Card className={[styles.appCard]} key={app.name} {...app} />
        )
      }
    </Container>
  )
}


export function AppHeader(props: AppInfo) {
  const { name, keywords, description } = props

  return (
    <Container className={[styles.appHeader]}>
      <div className={styles.title}>{name}</div>
      <div className={styles.subtitle}>{description}</div>
      <div className={styles.tags}>
        {keywords.map(word =>
          <Tag key={word}> {word}</Tag>
        )}
      </div>
    </Container>
  )
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Container className={[styles.layout]}>
      {/* 应用 */}
      <AppHeader {...props.info} />
      <div className={styles.content}>
        <div className={styles.card}>
          {props.children}
        </div>
      </div>
      {/* 推荐 */}
      <Recommended />
      {/* 评论 */}
      <div className={styles.comment}>
      </div>
    </Container>
  )
}
