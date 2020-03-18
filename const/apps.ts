import React from 'react'
import Timestamp from '../pages/applications/timestamp'
import Encryption from '../pages/applications/encryption'

export interface AppProps {

}

export interface App {
  sort: number, // 排序
  name: string, //名称
  keywords: string[], // 功能关键字
  routePath: string, // 路由
  description: string, // 说明
  render: (props: AppProps) => React.ReactChild // 模块
}

export const apps: App[] = [
  {
    sort: 1, // 排序
    name: '时间戳转换', //名称
    keywords: [], // 功能关键字
    routePath: 'applications/timestamp', // 路由
    description: "时间戳", // 说明
    render: Timestamp
  },
  {
    sort: 1, // 排序
    name: '时间戳转换', //名称
    keywords: [], // 功能关键字
    routePath: '/applications/encryption', // 路由
    description: "时间戳", // 说明
    render: Encryption
  }
]
