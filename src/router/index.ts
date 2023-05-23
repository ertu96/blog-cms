import { createRouter, createWebHistory } from 'vue-router'
import { useSystemStore } from '../stores/SystemStore'
import NotFoundView from '../views/NotFoundView.vue'

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
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue'),
    },
    {
      path: '/edit-post/:id',
      // name: 'editPost',
      component: () => import('../views/EditPostView.vue'),
    },
    {
      path: '/my-posts',
      name: 'editPost',
      component: () => import('../views/PostsOverviewView.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ],
})

router.beforeEach((to, from, next) => {
  if (
    to.name !== 'login' &&
    to.name !== 'register' &&
    !useSystemStore().isLoggedIn
  )
    next({ name: 'login' })
  else if (to.name === 'login' && useSystemStore().isLoggedIn)
    next({ name: from.name || 'home' })
  else next()
})

export default router
