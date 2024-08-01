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
      About me
    </h3>
    <div class="space-y-2">
      <Skeleton class="w-full h-4" />
      <Skeleton class="w-3/4 h-4" />
      <Skeleton class="w-1/2 h-4" />
      <Skeleton class="w-2/3 h-4" />
    </div>
  </div>
</template>
