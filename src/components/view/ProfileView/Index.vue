<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import AboutMe from './AboutMe/Index.vue'
import Socials from './Socials/Index.vue'
import Projects from './Projects/Index.vue'
import EmptyStatus from './EmptyStatus.vue'
import Cover from '@/components/profile/Cover.vue'
import Account from '@/components/profile/Account/Index.vue'
import Copyright from '@/components/Copyright.vue'
import { useProfileStore } from '@/store'

const profileStore = useProfileStore()
const route = useRoute()
const id = route.params.id

if (!id)
  profileStore.setLoading(false)
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
