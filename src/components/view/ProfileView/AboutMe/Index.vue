<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import Skeleton from './Skeleton.vue'
import { useProfileStore } from '@/store'
import Empty from '@/components/view/ProfileView/Empty.vue'

const profileStore = useProfileStore()
</script>

<template>
  <Skeleton v-if="profileStore.loading" />
  <div v-else class="flex flex-col gap-4">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      About me
    </h3>
    <p v-if="profileStore.profile.aboutMe" class="text-zinc-500 leading-relaxed">
      {{ profileStore.profile.aboutMe }}
    </p>
    <Empty v-else>
      <p>You haven't added About me yet.</p>
      <p>Click 'Edit Profile' to add them.</p>
    </Empty>
  </div>
</template>
