import React from 'react'
import styles from './style.less'
import { Footer } from '../../components/footer'
import { AppContext, defaultAppContext } from './ctx'
import { Overlay } from 'react-pitaya/lib/helper/overlay'
import { Toaster } from 'react-pitaya/lib/helper/toaster'
import App, { AppContext as NextAppContext, AppInitialProps } from 'next/app'
import store, { fetchInitial, StoreState } from '../../stores'

interface MobxAppState {
}

interface AppProps extends AppInitialProps {
  storeInitialState: StoreState
}

export default class MobxApp extends App<AppProps, MobxAppState> {

  constructor(props: AppProps) {
    super(props as any)
    this.state = {}
  }

  // Fetching serialized(JSON) store state
  // 数据会通过 JSON 传到浏览器
  static async getInitialProps(appContext: NextAppContext): Promise<AppProps> {
    const storeInitialState = await fetchInitial()
    const initialProps = App.getInitialProps(appContext)
    return { pageProps: initialProps, storeInitialState }
  }

  // 客户端
  static getDerivedStateFromProps(props: AppProps): MobxAppState {
    store.hydrate(props.storeInitialState)
    return {}
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div id={styles.root}>
        <AppContext.Provider value={defaultAppContext}>
          <div className={styles.overlays}>
            <Overlay />
            <Toaster />
          </div>
          <div className={styles.content}>
            <div className={styles.navbar}>
              {/* <Navbar /> */}
            </div>
            <div className={styles.body}>
              <Component {...pageProps} />
            </div>
            <div className={styles.footer}>
              <Footer />
            </div>
          </div>
        </AppContext.Provider>
      </div>
    )
  }
}
