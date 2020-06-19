import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'home',
  },
  getters: {
    currentPage: state => { return state.currentPage }
  },
  mutations: {
    setCurrentPage (state, page) { state.currentPage = page }
  },
  actions: {
    setCurrentPage ({ commit }, page) {
      window.scrollTo(0,0)
      commit('setCurrentPage', page)
    }
  }
})
