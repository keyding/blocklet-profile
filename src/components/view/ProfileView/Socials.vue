<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import EmailIcon from '@/components/Icons/Email.vue'
import PhoneIcon from '@/components/Icons/Phone.vue'
import GitHubIcon from '@/components/Icons/GitHub.vue'
import XIcon from '@/components/Icons/X.vue'
import GlobeIcon from '@/components/Icons/Globe.vue'
import TelegramIcon from '@/components/Icons/Telegram.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-xl font-semibold text-zinc-900 tracking-tight">
      Socials
    </h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="flex items-center gap-2 text-zinc-600">
        <EmailIcon class="text-xl" />
        <div>
          hey@caven.app
        </div>
      </div>
      <div class="flex items-center gap-2 text-zinc-600">
        <PhoneIcon class="text-xl" />
        <div>
          +1(555)123-4567
        </div>
      </div>
      <div class="flex items-center gap-2 text-zinc-600">
        <GitHubIcon class="text-xl" />
        <div>
          @keyding
        </div>
      </div>
      <div class="flex items-center gap-2 text-zinc-600">
        <XIcon class="text-xl" />
        <div>
          @cavenasdev
        </div>
      </div>
      <div class="flex items-center gap-2 text-zinc-600">
        <GlobeIcon class="text-xl" />
        <div>
          caven.dev
        </div>
      </div>
      <div class="flex items-center gap-2 text-zinc-600">
        <TelegramIcon class="text-xl" />
        <div>
          @c4v3n
        </div>
      </div>
    </div>
  </div>
</template>
