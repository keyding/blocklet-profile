<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Skeleton from './Skeleton.vue'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AVATAR_BASE_URL, DEFAULT_AVATAR_URL } from '@/lib/const'
import { useProfileStore } from '@/store'
import { Button } from '@/components/ui/button'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()

const id = route.params.id

const name = computed(() => profileStore.profile.name || `Hey, What's up!`)
const introduction = computed(() => profileStore.profile.introduction)
const avatarUrl = computed(() => profileStore.profile.avatarUrl ? `${AVATAR_BASE_URL}${profileStore.profile.avatarUrl}` : DEFAULT_AVATAR_URL)
</script>

<template>
  <Skeleton v-if="profileStore.loading" />
  <div v-else class="flex items-center justify-between transition-all px-9 lg:px-14">
    <div class="flex flex-col">
      <Avatar class="relative w-28 h-28 border-4 border-solid border-white -mt-14 transition-all md:w-32 md:h-32 md:-mt-16">
        <AvatarImage :src="avatarUrl" alt="@shadcn" />
      </Avatar>
      <h2 class="text-3xl font-semibold text-zinc-900 mt-5">
        {{ name }}
      </h2>
      <p class="text-zinc-600 mt-2">
        {{ introduction }}
      </p>
    </div>
    <Button v-if="id" @click="router.push(`/profile/edit/${id}`)">
      Edit Profile
    </Button>
  </div>
</template>
