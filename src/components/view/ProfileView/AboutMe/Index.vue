<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import Skeleton from './Skeleton.vue'
import { useProfileStore } from '@/store'

const profileStore = useProfileStore()
</script>

<template>
  <Skeleton v-if="profileStore.loading" />
  <div v-else class="flex flex-col gap-4">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      About me
    </h3>
    <p class="text-zinc-500 leading-relaxed">
      {{ profileStore.profile.aboutMe }}
    </p>
  </div>
</template>
