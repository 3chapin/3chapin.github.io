import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'home',
    workView: 'msnyAssignments'
  },
  getters: {
    currentPage: state => { return state.currentPage },
    workView: state => {return state.workView}
  },
  mutations: {
    setCurrentPage (state, page) { state.currentPage = page },
    setWorkView (state, view) { state.workView = view },

  },
  actions: {
    setCurrentPage ({ commit }, page) {
      window.scrollTo(0,0)
      commit('setCurrentPage', page)
    },
    setWorkView ({ commit }, view) {
      commit('setWorkView', view)
    }
  }
})
