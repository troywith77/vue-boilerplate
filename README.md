# Vue模板

## 使用方式

### env
`.env.*` 文件定义了不同环境使用的环境变量。我们定义了三个环境，`development`、`sit` 和 `production`。分别对应的是本地开发环境、线上测试环境和线上生产环境。

`VUE_APP_ENV` 变量有 `sit` 和 `production` 两个值，用来区分测试服务和生产服务（比如我们可以根据这个值来使用 `axios` 的不同 `baseURL`）。`development` 环境应该默认使用 `sit` 对应的测试服务。

启动项目前建议通过 `.env.development` 文件创建一个 `.env.development.local` 文件，本地开发时会默认加载该文件并覆盖 `.env.development` 的值，用于在本地开发时方便更改环境变量且避免 push 到线上（默认被 `git` 忽略）。

## 注意事项

### px 2 viewport
使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 来将 `px` 转换成 `vw` 以实现自适应布局。[can I use vw?](https://caniuse.com/#search=Viewport)

Input:
```html
<template>
  <div>
    <h1>Welcome to Your Activity Template</h1>
    <h3 class="use-px">Enjoy!</h3>
  </div>
</template>
```

```css
<style scoped lang="scss">
h1 {
  font-size: 50px;
}
h3 {
  font-size: 30px;
  &.use-px {
    margin-top: 50px;
  }
}
</style>
```

Output:
```css
h1 {
  font-size: 13.33333vw;
}
h3 {
  font-size: 8vw;
}
h3.use-px {
  margin-top: 50px; // 未转换 vw
}
```