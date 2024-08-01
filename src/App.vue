<script setup lang="ts">
import { ref } from 'vue'
import Cover from './components/profile/Cover.vue'
import Layout from './components/profile/Layout.vue'
import Account from './components/profile/Account.vue'

const name = ref(`Hey, What's up!`)
const introduction = ref(`Let's create your profile right away!`)
</script>

<template>
  <main class="w-full h-full bg-zinc-100 overflow-auto">
    <Layout>
      <Cover />
      <Account :name="name" :introduction="introduction" />
    </Layout>
  </main>
</template>
