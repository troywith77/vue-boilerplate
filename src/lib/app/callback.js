// 注册 iOS APP 登录成功回调，获取 token
// 安卓登录成功是直接刷新页面，token 在 cookie 里
if (!window.nativeInterface) {
  window.nativeInterface = {}
}
window.nativeInterface.__NativeAppCallback = function (callbackId, rv) {
  switch (callbackId) {
    case 'iosSetUserInfo': {
      const token = rv && rv.token
      if (!token) {
        return
      }
      // DO SOMETHING AFTER RETRIVED TOKEN...
      break
    }
    default:
      break
  }
}
