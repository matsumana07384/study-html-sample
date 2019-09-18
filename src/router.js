import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: Home
    },
    {
      path: '/tag001',
      name: 'tag001',
      component: () => import(/* webpackChunkName: "about" */ './views/Tag001.vue')
    },
    {
      path: '/tag002',
      name: 'tag002',
      component: () => import(/* webpackChunkName: "about" */ './views/Tag002.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import(/* webpackChunkName: "about" */ './views/Input.vue')
    }
  ]
})
