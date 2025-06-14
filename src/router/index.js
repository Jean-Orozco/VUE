import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        name: 'home',      component: HomeView },
    { path: '/about',   name: 'about',     component: () => import('@/views/AboutView.vue') },
    { path: '/api',     name: 'api',       component: () => import('@/views/DataApiView.vue') },
    { path: '/crud',    name: 'inazuma',   component: () => import('@/views/InazumaView.vue') },
    { path: '/crud/:id',name: 'edit-game', component: () => import('@/views/EditGameView.vue') },
  ],
})

export default router
