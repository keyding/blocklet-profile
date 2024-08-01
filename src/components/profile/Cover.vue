<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Button } from '@/components/ui/button'

const props = defineProps<{ canChangeCover?: boolean }>()
</script>

<template>
  <div class="group w-full h-40 bg-gradient-to-r from-sky-500 to-fuchsia-500 relative transition-all lg:rounded-t-3xl lg:h-52">
    <Button v-if="props.canChangeCover" size="sm" class="absolute right-6 bottom-6 lg:hidden lg:group-hover:block">
      Change cover
    </Button>
  </div>
</template>
