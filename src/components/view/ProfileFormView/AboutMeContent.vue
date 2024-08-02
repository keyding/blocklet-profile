<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useProfileStore } from '@/store'
import { supabase } from '@/lib/db'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()

const id = route.params.id

const loading = ref(false)
const aboutMe = ref(profileStore.profile.aboutMe)

async function handleUpdateAccount() {
  if (!id)
    return

  loading.value = true
  const { data, error } = await supabase.from('profile').update({
    about_me: aboutMe.value,
  }).eq('id', id).select()
  loading.value = false

  if (error || !data?.length) {
    toast.error('Error saving, please try again.')
    return
  }

  profileStore.setProfile({
    aboutMe: aboutMe.value,
  })

  toast.success('Your personal info have been saved.')
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set details about you.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-1">
        <Label for="about-me">Introduction</Label>
        <Textarea v-model="aboutMe" placeholder="Enter your details" rows="3" />
      </div>
    </CardContent>
    <CardFooter class="gap-2">
      <Button :disabled="!aboutMe || loading" @click="handleUpdateAccount">
        Save changes
      </Button>
      <Button variant="outline" :disabled="loading" @click="router.push(`/profile/${id}`)">
        View Profile
      </Button>
    </CardFooter>
  </Card>
</template>
