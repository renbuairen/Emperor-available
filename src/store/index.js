import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import work from './modules/work'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    work,
  },
  getters,
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          user: {
            token: state.user.token,
            userId: state.user.userId,
          },
        }
      },
    }),
  ],
})

export default store
