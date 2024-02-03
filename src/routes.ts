import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/home/home-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/contact/contact-page.vue')
    }
  ]
})

export default router
