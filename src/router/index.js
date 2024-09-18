import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import CustomerView from '@/views/CustomerView.vue'
import OrderView from '@/views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customers',
      component: CustomerView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    }
  ]
})

export default router
