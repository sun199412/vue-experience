import { getList } from '@/api/template/table/table'

const state = {
  dataSource: {} // 数据源
}

const mutations = {
  setData: (state, data) => {
    state.dataSource = data
  }
}

const actions = {
  // 查询数据
  getList({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      getList(userInfo).then(response => {
        commit('setData', response)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

