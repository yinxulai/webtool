import React from 'react'
import styles from './style.less'
import { Overlay } from 'react-pitaya/lib/helper/overlay'
import { Toaster } from 'react-pitaya/lib/helper/toaster'
import App, { AppContext, AppInitialProps } from 'next/app'
import store, { fetchInitial, IStoreState } from '../stores'

interface IMobxAppState {
}

interface IMobxAppProps extends AppInitialProps {
  storeInitialState: IStoreState
}

export default class MobxApp extends App<IMobxAppProps, IMobxAppState> {

  constructor(props: IMobxAppProps) {
    super(props as any)
    this.state = {}
  }

  // Fetching serialized(JSON) store state
  // 数据会通过 JSON 传到浏览器
  static async getInitialProps(appContext: AppContext): Promise<IMobxAppProps> {
    const storeInitialState = await fetchInitial()
    const initialProps = App.getInitialProps(appContext)
    return { pageProps: initialProps, storeInitialState }
  }

  // 客户端
  static getDerivedStateFromProps(props: IMobxAppProps): IMobxAppState {
    store.hydrate(props.storeInitialState)
    return {}
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div id={styles.root}>
        <Component {...pageProps} />
        <Overlay />
        <Toaster />
      </div>
    )
  }
}
