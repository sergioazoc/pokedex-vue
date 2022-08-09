import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemon-list',
      component: () => import('@/views/PolkemonListView.vue')
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: () => import('@/views/PokemonView.vue')
    }
  ]
})

export default router
