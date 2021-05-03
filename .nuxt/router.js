import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55fccf1b = () => interopDefault(import('..\\client\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _89c2f7d4 = () => interopDefault(import('..\\client\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _31f12bac = () => interopDefault(import('..\\client\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _c1fb87b2 = () => interopDefault(import('..\\client\\pages\\users\\_uid.vue' /* webpackChunkName: "pages_users__uid" */))
const _75b4a9e0 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _08e31ded = () => interopDefault(import('..\\client\\pages\\_.vue' /* webpackChunkName: "pages__" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _55fccf1b,
    name: "about"
  }, {
    path: "/users",
    component: _89c2f7d4,
    children: [{
      path: "",
      component: _31f12bac,
      name: "users"
    }, {
      path: ":uid",
      component: _c1fb87b2,
      name: "users-uid"
    }]
  }, {
    path: "/",
    component: _75b4a9e0,
    name: "index"
  }, {
    path: "/*",
    component: _08e31ded,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
