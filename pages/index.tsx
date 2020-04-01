import React from 'react'
import styles from './style.less'
import { apps } from '../config/apps'
import { Card } from './components/card'
// import { Search } from './components/search'

function matchApps(keyWords: string[]): AppInfo[] {
  // 按字匹配比较宽松，不容易啥也搜不到

  if (!apps || apps.length <= 0) {
    return []
  }

  if (!keyWords || keyWords.length <= 0) {
    return apps
  }

  const lowerCaseKeyWords = keyWords.map(
    key => key.toLowerCase()
  )

  // 单个字符
  const unitLowerCaseWords = lowerCaseKeyWords.join().split('')

  // 关键子完全匹配的
  const keyWordMatched = apps.filter(Boolean)
    .filter(app => app
      .keywords
      .filter(Boolean)
      .map(key => key.toLowerCase())
      .some(key => lowerCaseKeyWords.includes(key))
    )

  // 单字符匹配的
  const unitWordMatched = apps.filter(Boolean)
    .filter(app => app.keywords
      .join().split('').some(key => unitLowerCaseWords.includes(key))
    )

  return Array.from(new Set([...keyWordMatched, ...unitWordMatched, ...apps]))
}

export const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>在线工具集合</div>
      <div className={styles.subtitle}>多款在线工具免费使用</div>
    </div>
  )
}

export const Index: React.FC = () => {
  // const [searchValue, setSearchValue] = React.useState<string[]>([])
  const matchedApps = matchApps([])

  return (
    <div className={styles.index}>
      {/* <Banner /> */}
      {/* <Search onChange={setSearchValue} /> */}
      <div className={styles.applications}>
        {matchedApps.map(
          app =>
            <Card key={app.name} {...app} />
        )}
      </div>
    </div>
  )
}

export default Index
