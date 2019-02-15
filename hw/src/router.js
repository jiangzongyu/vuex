import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Count from './components/count'
import State from './components/state'
import Getters from './components/getter'
import Mutations from './components/mutations'
import Actions from './components/actions'
import Countx from './components/countx'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/about',
      name: 'about',
      component: Count
    },
    {
      path: '/countx',
      name: 'countx',
      component: Countx
    },
    {
      path: '/state',
      name: 'state',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: State
    },
    {
      path: '/getters',
      name: 'getters',
      component: Getters
    },
    {
      path: '/mutations',
      name: 'mutations',
      component: Mutations
    },
    {
      path: '/actions',
      name: 'actions',
      component: Actions
    }
  ]
})
