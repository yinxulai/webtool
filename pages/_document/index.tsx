import Document, { Head, Main, NextScript } from 'next/document'
import './style.less'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta content="maximum-scale=1.0, user-scalable=0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}