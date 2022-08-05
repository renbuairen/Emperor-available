import { getWorkList, getWorkStatus, getWorkType } from '@/api/work.js'

export default {
  namespaced: true,
  state: {
    workList: {},
  },
  mutations: {
    setWorkList(state, payload) {
      state.workList = payload
    },
  },
  actions: {
    async setWorkList(context, payload) {
      const res = await getWorkList()
      res.currentPageRecords.forEach((ele) => {
        ele.createTime = ele.createTime.replace(/T/gi, ' ')
        ele.createTime = ele.createTime.replace(/-/gi, '.')
        if (ele.createType === 0) ele.createType = '自动'
        else ele.createType = '手动'
      })
      console.log(res)
      context.commit('setWorkList', res)
    },
    async setWorkStatus(context) {
      const num = await getWorkStatus()
      console.log(num)
      num.forEach((elel) => {
        context.state.workList.currentPageRecords.forEach((ele) => {
          if (ele.taskStatus === elel.statusId) ele.taskStatus = elel.statusName
        })
      })
    },
    async setWorkType(context) {
      const res = await getWorkType()
      console.log(res)
    },
  },
}
