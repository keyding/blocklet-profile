import { createRouter, createWebHistory } from 'vue-router'

import DefaultView from '@/components/view/DefaultView.vue'
import ProfileView from '@/components/view/ProfileView.vue'

const routes = [
  { path: '/', component: DefaultView },
  { path: '/profile', component: ProfileView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
