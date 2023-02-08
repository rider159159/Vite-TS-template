import list from '@/views/list/index.vue'
import home from '@/views/home/index.vue'

import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        keepAlive: false,
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        keepAlive: false,
      }
    }
  ],
})

export default router