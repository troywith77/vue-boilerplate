import * as Cookies from 'js-cookie'

const TOKEN = 'my_token'

export const setToken = token => {
  Cookies.set(TOKEN, token)
}

export const getToken = () => {
  return Cookies.get(TOKEN) || ''
}
