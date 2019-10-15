import axios from 'axios'
import * as Cookies from 'js-cookie'
import conf from '@/conf'
import { HttpError, HttpUnknownError, ApiError } from '@@@/util/error'

const api = axios.create({
  baseURL: conf.baseUrl.baoer,
  timeout: 10 * 1000
})

api.interceptors.request.use((config) => {
  const token = Cookies.get('_appToken')
  const tokenHeader = token ? {
    'X-Ivanka-Token': token
  } : null
  const formatter = config.url.includes('baoer_backend') ? {
    'X-JSON-Naming-Strategy': 'LowerCaseWithUnderscores'
  } : null
  const conf = {
    ...config,
    headers: {
      ...config.headers,
      ...tokenHeader,
      ...formatter,
    }
  }
  return conf
}, error => Promise.reject(error))

// 只有 http code 是 200 且接口定义的 code 是 20000 才属于正确返回的接口，才能进入 Promise then。

api.interceptors.response.use((response) => {
  const { code, data, message } = response.data || {}
  if (code === 20000) {
    return data
  }
  // response.data -> { code, data, message }
  return Promise.reject(new ApiError(message, response.data))
}, (error) => {
  // status 非 200 的接口在这里处理
  // { ...error } -> { config, request, response ... }
  if (error.response) {
    return Promise.reject(new HttpError(error.message, { ...error }))
  }
  return Promise.reject(new HttpUnknownError(error.message))
})

export default api
