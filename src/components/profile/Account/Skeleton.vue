<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex items-center transition-all px-9 lg:px-14">
    <div class="flex flex-col gap-2">
      <div class="relative w-28 h-28 bg-white rounded-full border-4 border-solid border-white -mt-14 transition-all md:w-32 md:h-32 md:-mt-16">
        <Skeleton class="w-full h-full rounded-full" />
      </div>
      <Skeleton class="h-9 w-40" />
      <Skeleton class="h-6 w-60" />
    </div>
  </div>
</template>
