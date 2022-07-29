import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _050c0dcc = () => interopDefault(import('..\\pages\\rules.vue' /* webpackChunkName: "pages/rules" */))
const _6d3f5623 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _6c90ae78 = () => interopDefault(import('..\\pages\\lot\\_id.vue' /* webpackChunkName: "pages/lot/_id" */))
const _50908827 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/rules",
    component: _050c0dcc,
    name: "rules"
  }, {
    path: "/search",
    component: _6d3f5623,
    name: "search"
  }, {
    path: "/lot/:id?",
    component: _6c90ae78,
    name: "lot-id"
  }, {
    path: "/",
    component: _50908827,
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
