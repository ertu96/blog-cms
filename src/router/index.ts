import { createRouter, createWebHistory } from 'vue-router'
import { useSystemStore } from '../stores/SystemStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !useSystemStore().isLoggedIn)
    next({ name: 'login' })
  else if (to.name === 'login' && useSystemStore().isLoggedIn)
    next({ name: from.name || 'home' })
  else next()
})

export default router
