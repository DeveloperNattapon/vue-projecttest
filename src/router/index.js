import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('../views/Index.vue'),
  children: [
    // Dashboard
    {
      name: 'Dashboard',
      path: '',
      component: () => import('@/views/Dashboard')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router