import axios from 'axios'
import * as Cookies from 'js-cookie'
import conf from '@/conf'
import { HttpError, BusinessError } from '@@@/apis/utils/error'

const api = axios.create({
  baseURL: conf.baseUrl.baoer,
  timeout: 20 * 1000
})

api.interceptors.request.use((config) => {
  const token = Cookies.get('_token')
  const tokenHeader = token ? null : null
  const conf = {
    ...config,
    headers: {
      ...config.headers,
      ...tokenHeader,
    }
  }
  return conf
}, error => Promise.reject(error))

// 只有 http code 是 200 且接口定义的 code 是 20000 才属于正确返回的接口，才能进入 Promise then。

api.interceptors.response.use(handleBusinessError, handleErrorLogger)
api.interceptors.response.use(undefined, handleHttpError)

// 判断业务逻辑是否错误
function handleBusinessError(response) {
  if (!response.data || response.data.code !== 20000) {
    throw new BusinessError(response.data.message, response.data)
  }
  return response.data.data
}

// 记录 API 请求错误
function handleErrorLogger(error) {
  throw error
}

// 处理 HTTP 错误
function handleHttpError(error) {
  if (error.response) {
    const { url } = error.config
    const { status } = error.response
    throw new HttpError(error.message, {
      status,
      url,
    })
  } else {
    throw error
  }
}

export default api
