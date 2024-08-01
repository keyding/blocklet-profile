<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import EmptyStatusImg from '@/assets/empty-status.png'
import { Button } from '@/components/ui/button'

const router = useRouter()

async function handleCreateProfile() {
  router.push('/profile-form')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 transition-all px-9 lg:px-14">
    <div class="w-36 h-36 rounded-full transition-all md:w-44 md:h-44">
      <img :src="EmptyStatusImg" alt="Empty status">
    </div>
    <div class="text-zinc-400 text-sm text-center">
      <p>You have not created your profile yet.</p>
      <p>Click the button to get started.</p>
    </div>
    <Button variant="outline" @click="handleCreateProfile">
      Create Profile
    </Button>
  </div>
</template>
