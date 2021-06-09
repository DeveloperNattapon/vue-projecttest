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
      path: 'views/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    },
    {
      name: 'LogOut',
      path: 'login/Login',
      component: () => import('@/views/login/Login.vue')
    }
  ]
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router