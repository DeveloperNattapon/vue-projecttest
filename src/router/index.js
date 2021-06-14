import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path:'/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path:'/register',
    name:"Register",
    component:() => import('@/views/login/Register.vue')
  },
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/Dashboard')
      },
    ]
  },
  {
    path:'*',
    redirect:'/'

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router