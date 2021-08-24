import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store, ssrContext }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    if (to.meta.login && store.state.user.jwt.token?.length === 0) {
      next('/login')
    } else if (to.meta.admin && store.state.user.user.role !== 1) {
      next('/')
    } else {
      next()
    }
  })

  Router.afterEach((to, from) => {
    document.title = to.meta.title
  })

  return Router
}
