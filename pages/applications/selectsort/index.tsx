import noSSR from 'next/dynamic'
import { appInfo } from './config'
import { Layout } from '../../components/layout'

const Render = noSSR(import('./render'), { ssr: false })

export default (props: AppProps) => (<Layout info={appInfo}><Render {...props} /></Layout>)