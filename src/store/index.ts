import { Commit, createStore } from 'vuex'
import videos from './modules/videos'
import { AppStateProps } from './types'

export default createStore({
  state: (): AppStateProps =>  ({
    isLoading: false
  }),
  mutations: {
    SET_LOADING(state, bool: boolean): void {
      state.isLoading = bool
    }
  },
  actions: {
    setLoading: ({ commit }: { commit: Commit }, bool: boolean): void => {
      commit('SET_LOADING', bool)
    }
  },
  modules: {
    videos
  }
})
