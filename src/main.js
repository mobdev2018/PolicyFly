import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'
import VueMask from 'v-mask'
import VueTransmit from 'vue-transmit'
import money from 'v-money'

import locales from './locales'
import router from './router'
import { interceptRouter } from './router/middleware'
import mixin from './mixins'
import store from './store'

import App from './App'
import './stylus/main.styl'

Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(Vuetify)
Vue.use(VueMask)
Vue.use(VueTransmit)
Vue.use(money, {precision: 4})
Vue.mixin(mixin)

const axiosHTTP = axios.create({
  baseURL: '/api/v1/'
})

axiosHTTP.interceptors.request.use(request => {
  if (store.getters.sessionData.SPAToken) {
    request.headers['Authorization'] = 'Token ' + store.getters.sessionData.SPAToken
    console.log('added SPA token to an outgoing request')
  } else {
    console.log("no SPA token found, so it wasn't added to this request.")
  }
  return request
})

axiosHTTP.interceptors.response.use(response => response, error => {
  console.log('intercepted response error', error)
  if (error.response.status === 401) {
    console.log('received 401 response, redirecting')
    router.replace('/login')
  }
})
Vue.prototype.$http = axiosHTTP
interceptRouter(router)

Vue.config.debug = true

Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

const app = new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})

app.$mount('#app')
