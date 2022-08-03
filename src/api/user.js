import request from '@/utils/request'

export const getCode = (num) => {
  return request({
    url: `/api/user-service/user/imageCode/${num}`,
    responseType: 'blob',
  })
}

export const getLogin = (store, clientToken) => {
  return request({
    url: '/api/user-service/user/login',
    method: 'post',
    data: {
      loginName: store.name,
      password: store.password,
      code: store.code,
      clientToken,
      loginType: 0,
    },
  })
}
