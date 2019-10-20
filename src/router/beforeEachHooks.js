export function handleLogin(to, from, next) {
  const HAS_LOGGED_IN = false
  if (HAS_LOGGED_IN) {
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
