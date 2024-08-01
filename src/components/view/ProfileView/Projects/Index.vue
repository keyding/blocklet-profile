<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import Skeleton from './Skeleton.vue'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LinkIcon from '@/components/Icons/Link.vue'
import { useProfileStore } from '@/store'

const globalStore = useProfileStore()
</script>

<template>
  <Skeleton v-if="globalStore.loading" />
  <div v-else class="flex flex-col gap-6">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      Projects
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card v-for="project in globalStore.profile.projects" :key="project.name" class="group relative transition-all hover:shadow-lg">
        <a :href="project.link" target="_blank">
          <CardHeader>
            <CardTitle>{{ project.name }}</CardTitle>
            <CardDescription>{{ project.introduction }}</CardDescription>
          </CardHeader>
          <div class="absolute right-6 top-6 text-zinc-400 sm:hidden group-hover:block group-hover:text-zinc-500 transition-all">
            <LinkIcon />
          </div>
        </a>
      </Card>
    </div>
  </div>
</template>
