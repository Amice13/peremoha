import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60d46652 = () => interopDefault(import('../pages/favourites.vue' /* webpackChunkName: "pages/favourites" */))
const _a02cc6cc = () => interopDefault(import('../pages/rules.vue' /* webpackChunkName: "pages/rules" */))
const _1e13a115 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _1f17b45f = () => interopDefault(import('../pages/lot/_id.vue' /* webpackChunkName: "pages/lot/_id" */))
const _0923d216 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/peremoha/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/favourites",
    component: _60d46652,
    name: "favourites"
  }, {
    path: "/rules",
    component: _a02cc6cc,
    name: "rules"
  }, {
    path: "/search",
    component: _1e13a115,
    name: "search"
  }, {
    path: "/lot/:id?",
    component: _1f17b45f,
    name: "lot-id"
  }, {
    path: "/",
    component: _0923d216,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
