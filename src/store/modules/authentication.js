const initialState = {
  sessionData: {
    SPAToken: null,
    expirationDate: null
  },
  authEmail: null,
  authPassword: null
}

const getters = {
  sessionData: state => state.sessionData,
  authEmail: state => state.authEmail,
  authPassword: state => state.authPassword
}

const actions = {
  updateSessionData ({ commit }, payload) {
    commit('UPDATE_SESSION_DATA', payload)
  },
  clearAuthData ({ commit }) {
    commit('CLEAR_AUTH_DATA')
  },
  // These actions update the user and password in the store for use in authenticating. Not to be confused with actions for updating the information of the current user in the database.
  updateAuthEmail ({ commit }, payload) {
    commit('UPDATE_AUTH_EMAIL', payload)
  },
  updateAuthPassword ({ commit }, payload) {
    commit('UPDATE_AUTH_PASSWORD', payload)
  }
}

const mutations = {
  UPDATE_SESSION_DATA (state, payload) {
    state.sessionData = payload
  },
  CLEAR_AUTH_DATA (state) {
    state = initialState
  },
  UPDATE_AUTH_EMAIL (state, payload) {
    state.authEmail = payload
  },
  UPDATE_AUTH_PASSWORD (state, payload) {
    state.authPassword = payload
  }
}

export default {
  state: initialState,
  getters,
  actions,
  mutations
}
