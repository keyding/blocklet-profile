<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      Projects
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card class="group relative transition-all hover:shadow-lg">
        <CardHeader>
          <Skeleton class="h-4 w-1/2" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-2/3" />
        </CardHeader>
      </Card>
      <Card class="group relative transition-all hover:shadow-lg">
        <CardHeader>
          <Skeleton class="h-4 w-1/2" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-2/3" />
        </CardHeader>
      </Card>
      <Card class="group relative transition-all hover:shadow-lg">
        <CardHeader>
          <Skeleton class="h-4 w-1/2" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-2/3" />
        </CardHeader>
      </Card>
    </div>
  </div>
</template>
