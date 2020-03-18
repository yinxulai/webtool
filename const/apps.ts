import React from 'react'

interface AppProps {

}

interface App {
  sort: number, // 排序
  name: string, //名称
  keywords: string[], // 功能关键字
  routePath: string, // 路由
  description: string, // 说明
  render: (props: AppProps) => React.ReactChild // 模块
}

export const apps: App[] = [

]
