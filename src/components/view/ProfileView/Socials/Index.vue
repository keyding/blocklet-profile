<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import Skeleton from './Skeleton.vue'
import EmailIcon from '@/components/Icons/Email.vue'
import PhoneIcon from '@/components/Icons/Phone.vue'
import GitHubIcon from '@/components/Icons/GitHub.vue'
import XIcon from '@/components/Icons/X.vue'
import GlobeIcon from '@/components/Icons/Globe.vue'
import TelegramIcon from '@/components/Icons/Telegram.vue'
import { useProfileStore } from '@/store'

const TypeToIconMap = {
  email: EmailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  x: XIcon,
  website: GlobeIcon,
  telegram: TelegramIcon,
}

const profileStore = useProfileStore()
</script>

<template>
  <Skeleton v-if="profileStore.loading" />
  <div v-else class="flex flex-col gap-6">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      Socials
    </h3>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="social in profileStore.profile.socials" :key="social.type" class="flex items-center gap-2 text-zinc-600">
        <component :is="TypeToIconMap[social.type]" class="text-xl" />
        <div>
          {{ social.value }}
        </div>
      </div>
    </div>
  </div>
</template>
