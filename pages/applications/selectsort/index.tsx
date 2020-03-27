import noSSR from 'next/dynamic'
export default noSSR(import('./render') , { ssr: false })
