import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component:  () => import('../views/demo.vue'),
      meta: {
        keepAlive: false,
      }
    },
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
  ]
})

export function setupRouter(AppInstance:App<Element>) {
  AppInstance.use(router)
}

export default router
