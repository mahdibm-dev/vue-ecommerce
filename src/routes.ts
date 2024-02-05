import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: () => import('@/pages/store/store-page.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/cart/cart-page.vue')
    }
  ]
})

export default router
