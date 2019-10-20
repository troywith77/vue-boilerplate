import UserService from '@@@/domains/user/UserService'
import { setToken, getToken } from '@@@/utils/token'

const state = {
  token: getToken(),
}

const getters = {
  isLoggedIn(state) {
    return !!state.token
  },
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
}

const actions = {
  login({ commit }) {
    return UserService.login()
      .then((res) => {
        commit('SET_TOKEN', res.token)
        setToken(res.token)
      })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
