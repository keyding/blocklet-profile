<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'
import { toast } from 'vue-sonner'
import AboutMe from './AboutMe/Index.vue'
import Socials from './Socials/Index.vue'
import Projects from './Projects/Index.vue'
import EmptyStatus from './EmptyStatus.vue'
import Cover from '@/components/profile/Cover.vue'
import Account from '@/components/profile/Account/Index.vue'
import Copyright from '@/components/Copyright.vue'
import { useProfileStore } from '@/store'

const profileStore = useProfileStore()
const router = useRouter()
const route = useRoute()
const id = route.params.id

if (!id) {
  profileStore.setLoading(false)
}

onBeforeMount(async () => {
  if (!id)
    return

  const data = await profileStore.fetchProfileBy(id as string)
  profileStore.setLoading(false)

  if (!data?.length) {
    toast.warning('Unknown user', {
      description: `Unable to retrieve the user's profile information.`,
      action: {
        label: 'Create Profile',
        onClick: () => router.replace('/profile-form'),
      },
    })
    return
  }

  const { id: userId, name, introduction, avatar_url: avatarUrl, about_me: aboutMe, socials, projects } = data[0]
  profileStore.setProfile({
    id: userId,
    name,
    introduction,
    avatarUrl,
    aboutMe,
    socials,
    projects,
  })
})
</script>

<template>
  <div class="flex-1 flex flex-col">
    <Cover />
    <Account />
    <div v-if="id" class="flex-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 transition-all px-9 lg:px-14">
        <AboutMe />
        <Socials />
        <Projects class="sm:col-span-2" />
      </div>
    </div>
    <div v-else class="flex-1 flex flex-col items-center justify-center">
      <EmptyStatus />
    </div>
    <Copyright />
  </div>
</template>
