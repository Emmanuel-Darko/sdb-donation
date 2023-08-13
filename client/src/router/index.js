import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/views/AuthPage.vue'
import LandingPage from '@/views/LandingPage.vue'
import JobLanding from '../../job-posting/JobLanding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/d-auth/:id',
      name: 'd-auth',
      // component: () => import('../views/AuthPage.vue')
      component: AuthPage
    },
    {
      path: '/job',
      name: 'job',
      // component: () => import('../views/AuthPage.vue')
      component: JobLanding
    },
    {
      path: '/home/:id',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePage.vue')
    }
  ]
})

export default router
