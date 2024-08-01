<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <main class="w-full h-full bg-zinc-100 overflow-auto">
    <Layout>
      <RouterView :key="$route.fullPath" />
    </Layout>
    <Toaster />
  </main>
</template>
