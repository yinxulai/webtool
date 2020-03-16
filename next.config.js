module.exports = require('@zeit/next-css')({
  cssModules: false,
  cssLoaderOptions: {
    localIdentName: "[local]-[hash:base64:5]",
  }
})

// less
module.exports = require('@zeit/next-less')({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]:[hash:base64:5]",
  }
})

// module.exports = require('@zeit/next-stylus')({
//   cssModules: true,
//   cssLoaderOptions: {
//     localIdentName: "[local]:[hash:base64:5]",
//   }
// })

// 关注 css 引入问题 https://github.com/zeit/next-plugins/issues/273
// next-css-unpluggable 社区插件 后面考虑移除
// module.exports = require('next-css-unpluggable')({
//   /* config options here */
// })

