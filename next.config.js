/* eslint-disable @typescript-eslint/no-var-requires */
const less = require('@zeit/next-less')

const config = {
  webpack: (config) => {

    const eslintRule = {
      test: /.tsx?$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }

    config.module.rules.push(eslintRule)

    return config
  }
}

module.exports = less({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]:[hash:base64:5]",
  },
  ...config
})
