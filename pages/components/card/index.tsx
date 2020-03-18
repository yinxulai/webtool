import { Container } from "react-pitaya"
import style from "./style.less"
import Link from "next/link"

interface Props {
  name: string, //名称
  keywords: string[], // 功能关键字
  routePath: string, // 路由
  description: string // 说明
}

export const Card = (props: Props) => {
  const { name, keywords = [], routePath, description } = props

  return (
    <Container className={[style.card]}>
      <div className={style.name}>
        <strong>{name}</strong>
      </div>
      <div className={style.description}>
        <b>{description}</b>
      </div>
      {/* SEO 关键字 */}
      <div className={style.tags}>
        {keywords.map(key => <div>{key}</div>)}
      </div>
      <Link href={routePath} />
    </Container>
  )
}
