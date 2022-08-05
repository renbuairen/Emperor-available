import request from '@/utils/request'

export const getWorkList = (pageIndex) => {
  return request({
    url: '/api/task-service/task/search',
    params: {
      pageIndex,
    },
  })
}

export const getWorkStatus = () => {
  return request({
    url: '/api/task-service/task/allTaskStatus',
  })
}

export const getWorkType = () => {
  return request({
    url: '/api/task-service/taskType/list',
  })
}
