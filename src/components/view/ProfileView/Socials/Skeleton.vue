<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      Socials
    </h3>
    <div class="grid grid-cols-2 gap-2">
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
    </div>
  </div>
</template>
