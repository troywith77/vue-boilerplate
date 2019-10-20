import store from '@/store'

export function handleLogin(to, from, next) {
  const IS_LOGGED_IN = store.getters['user/isLoggedIn']
  if (IS_LOGGED_IN) {
    if (to.name === 'login') {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
}
