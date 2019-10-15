module.exports = {
  plugins: {
    autoprefixer: {},
    // doc: https://github.com/evrone/postcss-px-to-viewport
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿基准宽度
      selectorBlackList: ['use-px'] // 加上 use-px 这个选择器的元素不转换成 vw，仍然使用 px
    }
  }
}
