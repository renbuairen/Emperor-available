import { getCode, getLogin, getUserInfo } from '@/api/user'
import { Message } from 'element-ui'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    random: '',
    token: '',
    userId: '',
    roleCode: '',
    img: '',
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setRandom(state, payload) {
      state.random = payload
    },

    setLogin(state, payload) {
      state.token = payload.token
      state.userId = payload.userId
      state.roleCode = payload.roleCode
    },
    setImg(state, payload) {
      state.img = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
  actions: {
    async getLogin(context, payload) {
      const data = await getLogin(payload, context.state.random)
      if (data.success) {
        Message({
          message: `${data.msg}`,
          type: 'success',
        })
        context.commit('setLogin', data)
        setTokenTime()
        router.push('/')
      } else {
        Message.error(data.msg)
        context.dispatch('getCode')
      }
    },
    async getCode(context) {
      const numRandom = Math.random()
      context.commit('setRandom', numRandom)
      const img = await getCode(numRandom)
      context.commit('setImg', window.URL.createObjectURL(img))
    },
    //退出
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
    },
    //获取用户信息
    async getUserInfo(context) {
      const userInfo = await getUserInfo(context.state.userId)
      context.commit('setUserInfo', userInfo)
    },
  },
}
