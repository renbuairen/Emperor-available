import axios from 'axios'
import store from '@/store'
import { getTokenTime } from '@/utils/auth'
import router from '@/router'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

const timeout = 2 * 60 * 60 * 1000

function isTimeOut() {
  const currentTime = Date.now()
  const nowTime = getTokenTime()
  return currentTime - nowTime > timeout
}

//请求拦截器
service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (isTimeOut()) {
      await store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('登录过期'))
    } else {
      config.headers.Authorization = store.state.user.token
    }
  }
  return config
})

//响应拦截器
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (err) => {
    if (err.response?.status === 401) {
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
    } else {
      Message.error(err.message)
    }

    return Promise.reject(err)
  }
)

export default service
