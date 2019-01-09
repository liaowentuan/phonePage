import Vue from 'vue'
import Router from 'vue-router'
import vueCli from './views/vueCli.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/vueCli',
      name: 'vueCli',
      component: vueCli
    },
    {
      path: '/python',
      name: 'python',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about1" */ './views/python.vue')
    },
    {
      path: '/server',
      name: 'server',
      component: () => import(/* webpackChunkName: "about2" */ './views/server.vue')
    },
    {
      path: '/computer',
      name: 'computer',
      component: () => import(/* webpackChunkName: "about3" */ './views/computer.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import(/* webpackChunkName: "about4" */ './views/more.vue')
    }
  ]
})
