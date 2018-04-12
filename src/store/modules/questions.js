const state = {
  questions: [],
  applicationId: null,
  activeRoute: []
}

const getters = {
  questions: state => state.questions,
  applicationId: state => state.applicationId,
  tabs: state => state.questions.map(question => ({
    name: question.alias,
    link: question.name,
    valid: question.valid
  })),
  activeRoute: state => state.activeRoute,
  isCompleted: state => {
    var completed = true
    for (var i = 0; i < state.questions.length; i++) {
      if (state.questions[i].valid === false) {
        completed = false
        break
      }
    }
    return completed
  }
}

const actions = {
  initQuestions ({ commit }, payload) {
    commit('INIT_QUESTIONS', payload)
  },
  setApplicationId ({ commit }, payload) {
    commit('SET_APPLICATION_ID', payload)
  },
  activeCard ({ commit }, payload) {
    commit('ACTIVECARD', payload)
  },
  updateQuestions ({ commit }, payload) {
    commit('UPDATE_QUESTIONS', payload)
  },
  updatePrimaryName ({ commit }, payload) {
    commit('UPDATE_PRIMARY_NAME', payload)
  }
}

const mutations = {
  INIT_QUESTIONS (state, payload) {
    state.questions = payload
    state.applicationId = null
    state.activeRoute = []
  },
  SET_APPLICATION_ID (state, payload) {
    state.applicationId = payload
  },
  ACTIVECARD (state, payload) {
    state.activeRoute = payload
  },
  UPDATE_QUESTIONS (state, payload) {
    state.questions = payload
  },
  UPDATE_PRIMARY_NAME (state, payload) {
    state.questions[0].content[0].content[0].value = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
