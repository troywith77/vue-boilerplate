const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 全局注入 scss 变量
        prependData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
  chainWebpack: config => {
    // remove pwa plugins
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')

    config.resolve.alias
      .set('@@@', path.resolve(__dirname, 'src/common'))

  }
}
