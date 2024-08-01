<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const props = withDefaults(defineProps<{ name: string, introduction: string, avatarUrl?: string }>(), {
  avatarUrl: 'https://github.com/shadcn.png',
})
</script>

<template>
  <div class="flex items-center transition-all px-9 lg:px-14">
    <div class="flex flex-col">
      <Avatar class="relative w-28 h-28 border-4 border-solid border-white -mt-14 transition-all md:w-32 md:h-32 md:-mt-16">
        <AvatarImage :src="props.avatarUrl" alt="@shadcn" />
      </Avatar>
      <h2 class="text-3xl font-semibold text-zinc-900 mt-5">
        {{ props.name }}
      </h2>
      <p class="text-sm text-zinc-600 mt-2">
        {{ props.introduction }}
      </p>
    </div>
  </div>
</template>
