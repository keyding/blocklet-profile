<script setup lang="ts">
import { ref } from 'vue'
import Cover from './components/profile/Cover.vue'
import Layout from './components/profile/Layout.vue'
import Account from './components/profile/Account.vue'
import EmptyStatus from './components/profile/EmptyStatus.vue'

const name = ref(`Hey, What's up!`)
const introduction = ref(`Let's create your profile right away!`)
</script>

<template>
  <main class="w-full h-full bg-zinc-100 overflow-auto">
    <Layout>
      <div class="flex-1 flex flex-col">
        <Cover />
        <Account :name="name" :introduction="introduction" />
        <div class="flex-1 flex flex-col items-center justify-center">
          <EmptyStatus />
        </div>
      </div>
    </Layout>
  </main>
</template>
