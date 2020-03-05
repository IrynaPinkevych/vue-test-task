import config from '../../../config/app.config'

export default {
  state: {
    ...config
  },
  mutations: {
    updateAddingStatus: (state, key) => {
      state.columns.map(item =>
        item.key === key ? (item.isAdding = !item.isAdding) : item
      )
    }
  },
  actions: {
    changeAddingStatus: ({ commit }, key) => {
      commit('updateAddingStatus', key)
    }
  },
  getters: {
    columns: state => state.columns,
    addButtonName: state => state.addCards.buttonName,
    addPlaceholder: state => state.addCards.placeholder
  }
}
