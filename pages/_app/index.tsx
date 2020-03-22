import React from 'react'
import styles from './style.less'
import { Overlay } from 'react-pitaya/lib/helper/overlay'
import { Toaster } from 'react-pitaya/lib/helper/toaster'
import App, { AppContext, AppInitialProps } from 'next/app'
import store, { fetchInitial, IStoreState } from '../../stores'

interface IMobxAppState {
}

interface IAppProps extends AppInitialProps {
  storeInitialState: IStoreState
}

export default class MobxApp extends App<IAppProps, IMobxAppState> {

  constructor(props: IAppProps) {
    super(props as any)
    this.state = {}
  }

  // Fetching serialized(JSON) store state
  // 数据会通过 JSON 传到浏览器
  static async getInitialProps(appContext: AppContext): Promise<IAppProps> {
    const storeInitialState = await fetchInitial()
    const initialProps = App.getInitialProps(appContext)
    return { pageProps: initialProps, storeInitialState }
  }

  // 客户端
  static getDerivedStateFromProps(props: IAppProps): IMobxAppState {
    store.hydrate(props.storeInitialState)
    return {}
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div id={styles.root}>
        <div className={styles.overlays}>
          <Overlay /> <Toaster />
        </div>
        <div className={styles.main}>
          <Component {...pageProps} />
        </div>
        <footer className={styles.footer}>
          © WEBTOOL(在线工具) 2020 - {new Date().getFullYear()} · 皖ICP备19004644号 · DESIGNED BY
          &ensp;<a href="https://github.com/yinxulai"><strong>ALAIN</strong></a>
        </footer>
      </div>
    )
  }
}
