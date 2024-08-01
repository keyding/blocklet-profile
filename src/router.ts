import { createRouter, createWebHistory } from 'vue-router'

import DefaultView from '@/components/view/DefaultView.vue'
import ProfileView from '@/components/view/ProfileView.vue'
import ProfileFormView from '@/components/view/ProfileFormView.vue'

const routes = [
  { path: '/', component: DefaultView },
  { path: '/profile', component: ProfileView },
  { path: '/profile-form', component: ProfileFormView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})