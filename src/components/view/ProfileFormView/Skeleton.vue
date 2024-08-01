<!--
 * @author: Caven
 * @since: 2024-08-02
-->
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex-1 w-full flex flex-col items-center">
    <div class="space-y-2">
      <Skeleton class="w-[324px] h-9 rounded-lg" />
      <Skeleton class="w-[400px] h-96 rounded-lg" />
    </div>
  </div>
</template>
