import { getCode, getLogin } from '@/api/user'
import { Message } from 'element-ui'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    random: '',
    token: '',
    userName: '',
    userId: '',
    roleCode: '',
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
      state.userName = payload.userName
      state.userId = payload.userId
      state.roleCode = payload.roleCode
    },
  },
  actions: {
    async getLogin(context, payload) {
      const { data } = await getLogin(payload, context.state.random)
      console.log(data)
      if (data.success) {
        Message({
          message: `${data.msg}`,
          type: 'success',
        })
        context.commit('setLogin', data)
        router.push('/')
      } else {
        Message.error(data.msg)
        context.dispatch('getCode')
      }
    },
    async getCode(context) {
      const numRandom = Math.random()
      context.commit('setRandom', numRandom)
      await getCode(numRandom)
    },
  },
}
