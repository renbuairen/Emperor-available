import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

service.interceptors.request.use((config) => {
  // if (store.state.user.token) {
  //   config.headers.Authorization = 'Bearer ' + store.state.user.token
  // }
  return config
})

service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {}
)

export default service
