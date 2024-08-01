import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '@/components/view/ProfileView/Index.vue'
import ProfileFormView from '@/components/view/ProfileFormView/Index.vue'

const routes = [
  { path: '/:id?', component: ProfileView },
  { path: '/profile-form/:id?', component: ProfileFormView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
