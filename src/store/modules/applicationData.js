const state = {
  applicationData: []
}

const getters = {
  applicationData: state => state.applicationData
}

const actions = {
  addApplicationForm ({ commit }, payload) {
    commit('ADD_APPLICATION_FORM', payload)
  },
  updateApplicationForm ({ commit }, payload) {
    commit('UPDATE_APPLICATION_FORM', payload)
  },
  deleteApplicationForm ({ commit }, payload) {
    commit('DELETE_APPLICATION_FORM', payload)
  }
}

const mutations = {
  ADD_APPLICATION_FORM (state, payload) {
    state.applicationData.push(payload)
  },
  UPDATE_APPLICATION_FORM (state, payload) {
    state.applicationData[payload.applicationId] = payload.applications
  },
  DELETE_APPLICATION_FORM (state, payload) {
    state.applicationData.splice(payload, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
