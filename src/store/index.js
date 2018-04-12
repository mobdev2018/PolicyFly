import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import applicationData from './modules/applicationData'
import questions from './modules/questions'
import onboarding from './modules/onboarding'
import authentication from './modules/authentication'
import userlist from './modules/userlist'
import events from './modules/events'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    applicationData,
    questions,
    onboarding,
    authentication,
    userlist,
    events
  },
  plugins: [createPersistedState({
    // Persist only the session data (SPA token & expiry date) and the user's email address in local storage.
    paths: ['authentication.sessionData', 'authentication.authEmail']
  })],
  strict: false
})

export default store
