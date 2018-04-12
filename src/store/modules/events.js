const state = {
  events: [
    {
      type: 'quote',
      action: 'submit',
      fname: 'Ian',
      lname: 'Sterling',
      time: '4:38pm'
    },
    {
      type: 'application',
      action: 'submit',
      fname: 'John',
      lname: 'Crosland',
      time: '4:38pm'
    }
  ],
  eventMessage: ''
}

const getters = {
  events: state => state.events,
  eventMessage: state => state.eventMessage
}

const actions = {
  addEvent ({ commit }, payload) {
    commit('ADD_EVENT', payload)
  },
  updateMessage ({ commit }, payload) {
    commit('UPDATE_MESSAGE', payload)
  }
}

const mutations = {
  ADD_EVENT (state, payload) {
    state.events.splice(0, 0, payload)
  },
  UPDATE_MESSAGE (state, payload) {
    state.eventMessage = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
