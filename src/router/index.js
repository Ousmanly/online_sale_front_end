import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import CustomerView from '@/views/CustomerView.vue'
import OrderView from '@/views/OrderView.vue'
import EditCustomer from '@/components/customers/EditCustomer.vue'
import AddOrders from '@/components/Orders/AddOrders.vue'

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
    },
    {
      path: '/orders/add',
      name: 'orders/add',
      component: AddOrders
    },
    // {
    //   path: '/customers/edit/:id',
    //   name: 'editCustomer',
    //   component: EditCustomer,
    //   props: true  // Permet de passer `id` comme prop au composant
    // }
  ]
})

export default router
