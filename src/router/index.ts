import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('../views/home/index.vue'),
      meta: {
        keepAlive: false,
      }
    },
    {
      path: '/projects/:id',
      name: 'projects',
      component:  () => import('../views/projects/[id].vue'),
      meta: {
        keepAlive: false,
      }
    }
  ],
})

export default router