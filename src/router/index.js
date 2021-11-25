import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path:'/login',
    component: () => import('@/views/login/Login'),
  },
  {
    path:'/register',
    name:"Register",
    component:() => import('@/views/login/Register')
  }, 
  {
    path: '/',
    component: () => import('../views/Index'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/Dashboard')
      },
      {
        
        name: 'Menu',
        path: '/mainMenu',
        component: () => import('@/views/setting/menu/MainMenu'),
        
      },
    ]
  },

  {
    path:'*',
    redirect:'/'

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router