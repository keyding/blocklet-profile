import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '@/components/view/ProfileView/Index.vue'
import ProfileFormView from '@/components/view/ProfileFormView/Index.vue'
import NotFound from '@/components/view/NotFound.vue'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/:id?', component: ProfileView, alias: '/profile/:id?' },
  { path: '/profile/edit/:id?', component: ProfileFormView },
  { path: '/profile/create', component: ProfileFormView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
