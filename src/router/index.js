import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'elForm',
    component: () => import('../views/elForm.vue')
  },
  {
    path: '/mobileForm',
    name: 'mobileForm',
    component: () => import('../views/mobileForm.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
