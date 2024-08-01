<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useProfileStore } from '@/store'
import { supabase } from '@/lib/db'
import { router } from '@/router'

const route = useRoute()
const profileStore = useProfileStore()

const id = route.params.id

const loading = ref(false)
const socials = ref(profileStore.profile.socials?.length
  ? [...profileStore.profile.socials]
  : [
      {
        type: 'email',
        value: '',
      },
      {
        type: 'phone',
        value: '',
      },
      {
        type: 'github',
        value: '',
      },
      {
        type: 'x',
        value: '',
      },
      {
        type: 'website',
        value: '',
      },
      {
        type: 'telegram',
        value: '',
      },
    ],
)

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

async function handleUpdate() {
  if (!id)
    return

  loading.value = true
  const { data, error } = await supabase.from('profile').update({
    socials: socials.value,
  }).eq('id', id).select()
  loading.value = false

  if (error || !data?.length) {
    toast.error('Error saving, please try again.')
    return
  }

  profileStore.setProfile({
    socials: socials.value as typeof profileStore.profile.socials,
  })

  toast.success('Your profile have been saved.')
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set your contact information.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-2">
        <div v-for="social in socials" :key="social.type" class="grid grid-cols-4 items-center">
          <Label :for="social.type" class="col-span-1">{{ capitalizeFirstLetter(social.type) }}</Label>
          <Input :id="social.type" v-model="social.value" class="col-span-3" :placeholder="`Enter your ${social.type}`" />
        </div>
      </div>
    </CardContent>
    <CardFooter class="gap-2">
      <Button :disabled="loading" @click="handleUpdate">
        Save changes
      </Button>
      <Button variant="outline" :disabled="loading" @click="router.push(`/profile/${id}`)">
        View Profile
      </Button>
    </CardFooter>
  </Card>
</template>
