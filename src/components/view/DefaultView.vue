<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { ref } from 'vue'
import Cover from '@/components/profile/Cover.vue'
import Account from '@/components/profile/Account.vue'
import EmptyStatus from '@/components/profile/EmptyStatus.vue'

const name = ref(`Hey, What's up!`)
const introduction = ref(`Let's create your profile right away!`)
</script>

<template>
  <div class="flex-1 flex flex-col">
    <Cover />
    <Account :name="name" :introduction="introduction" />
    <div class="flex-1 flex flex-col items-center justify-center">
      <EmptyStatus />
    </div>
  </div>
</template>
