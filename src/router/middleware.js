// import store from '../store'

export const interceptRouter = function (router) {
  // Authentication logic
  router.beforeEach((to, from, next) => {
    // const requiresAuth = to.matched.some(route => route.meta.requiresAuth)
    // const { SPAToken, expirationDate } = store.getters.sessionData
    // const tokenIsExpired = expirationDate <= new Date()
    // if (!requiresAuth) {
    //   next()
    // } else if (requiresAuth && (!SPAToken || tokenIsExpired)) {
    //   next({ path: '/login' })
    // }
    next()
  })
  router.afterEach(() => {

  })
}
