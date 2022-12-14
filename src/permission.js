import router from '@/router'
import store from '@/store'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  const token = store.state.user.token

  if (token && !store.state.user.userInfo.userId)
    store.dispatch('user/getUserInfo')

  if (token) return to.path === '/login' ? next('/') : next()

  whiteList.includes(to.path) ? next() : next('/login')
})
