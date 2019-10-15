import { checkIsAndroid } from 'xgb-utils'

// 调用 APP 登录
export function GO_APP_LOGIN() {
  if (checkIsAndroid()) {
    window.location.href = 'https://xuangubao.cn/login'
  } else {
    var newObj = {
      methodName: 'login',
      args: {
        callbackId: 'iosSetUserInfo'
      }
    }
    if (window.webkit) {
      window.webkit.messageHandlers.Native.postMessage(JSON.stringify(newObj))
    }
  }
}

// 调用 APP 打点
export function trackEvent(eventName, actionName, additional) {
  try {
    const data = JSON.stringify({
      eventName,
      topicName: eventName,
      additional: {
        ...additional,
        actionName
      }
    })
    if (checkIsAndroid()) {
      if (window.nativeInterface && window.nativeInterface.onTrackEvent) {
        window.nativeInterface.onTrackEvent(data)
      }
    } else {
      let newObj = {
        methodName: 'onTrackEvent',
        args: data
      }
      if (window.webkit) {
        window.webkit.messageHandlers.Native.postMessage(
          JSON.stringify(newObj)
        )
      }
    }
  } catch (e) {
    console.log('trackEvent error', e)
  }
}