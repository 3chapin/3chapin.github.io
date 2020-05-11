import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/coming',
    name: 'ComingSoon',
    component: () => import('@/components/ComingSoon.vue')
  },
  {
    path: '*',
    redirect: '/coming'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
