const state = {
  isAuthenticatorApp: false,
  modifiedUserAuthentication: false,
  twoFactorSMSInfo: {
    phone: '(201) 789 - 5671',
    tempPhone: ''
  }
}

const getters = {
  isAuthenticatorApp: state => state.isAuthenticatorApp,
  modifiedUserAuthentication: state => state.modifiedUserAuthentication,
  twoFactorSMSInfo: state => state.twoFactorSMSInfo
}

const actions = {
  updateAuthenticatorApp ({ commit }, payload) {
    commit('UPDATE_AUTHENTICATOR_APP', payload)
  },
  modifyUserAuthentication ({ commit }, payload) {
    commit('MODIFIED_USER_AUTHENTICATION', payload)
  },
  updateTwoFactorSMSInfo ({ commit }, payload) {
    commit('UPDATE_TWO_FACTOR_SMS', payload)
  }
}

const mutations = {
  UPDATE_USER_DATA (state, payload) {
    state.userData = Object.assign({}, state.userData, payload)
  },
  UPDATE_AUTHENTICATOR_APP (state, payload) {
    state.isAuthenticatorApp = payload
  },
  MODIFIED_USER_AUTHENTICATION (state, payload) {
    state.modifiedUserAuthentication = payload
  },
  UPDATE_TWO_FACTOR_SMS (state, payload) {
    state.twoFactorSMSInfo = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
