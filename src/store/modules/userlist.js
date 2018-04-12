const state = {
  userlist: [
    {
      fname: 'Jane',
      lname: 'Doe',
      email: 'jane.doe@besso.com',
      role: 'Broker'
    },
    {
      fname: 'Ian',
      lname: 'Sterling',
      email: 'ian.sterling@sterlingrisk.com',
      role: 'Program Admin'
    }
  ]
}

const getters = {
  userlist: state => state.userlist
}

const actions = {
  updateUserList ({ commit }, payload) {
    commit('UPDATE_USERLIST', payload)
  }
}

const mutations = {
  UPDATE_USERLIST (state, payload) {
    this.userlist = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
