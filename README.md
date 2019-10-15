# Vue模板

## 注意事项

### px 2 viewport
使用[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)来将 `px` 转换成 `vw` 以实现自适应布局。[can I use vw?](https://caniuse.com/#search=Viewport)

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