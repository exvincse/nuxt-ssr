import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f90efcc = () => interopDefault(import('..\\client\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _35593d15 = () => interopDefault(import('..\\client\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _17f9b466 = () => interopDefault(import('..\\client\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _31a7f9e6 = () => interopDefault(import('..\\client\\pages\\users\\_uid.vue' /* webpackChunkName: "pages_users__uid" */))
const _20213a42 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _45282e6c = () => interopDefault(import('..\\client\\pages\\_.vue' /* webpackChunkName: "pages__" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/nuxt-ssr/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5f90efcc,
    name: "about"
  }, {
    path: "/users",
    component: _35593d15,
    children: [{
      path: "",
      component: _17f9b466,
      name: "users"
    }, {
      path: ":uid",
      component: _31a7f9e6,
      name: "users-uid"
    }]
  }, {
    path: "/",
    component: _20213a42,
    name: "index"
  }, {
    path: "/*",
    component: _45282e6c,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
