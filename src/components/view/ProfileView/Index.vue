<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import AboutMe from './AboutMe.vue'
import Socials from './Socials.vue'
import Projects from './Projects.vue'
import EmptyStatus from './EmptyStatus.vue'
import Cover from '@/components/profile/Cover.vue'
import Account from '@/components/profile/Account.vue'
import Copyright from '@/components/Copyright.vue'

const route = useRoute()
const username = route.params.username

const name = ref(`Hey, What's up!`)
const introduction = ref(`Let's create your profile right away!`)
</script>

<template>
  <div class="flex-1 flex flex-col">
    <Cover :can-change-cover="!!username" />
    <Account :name="name" :introduction="introduction" />
    <div v-if="username" class="flex-1">
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
