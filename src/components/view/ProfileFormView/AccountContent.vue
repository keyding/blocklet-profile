<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { toast } from 'vue-sonner'
import { useRoute, useRouter } from 'vue-router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AVATAR_BASE_URL, DEFAULT_AVATAR_URL } from '@/lib/const'
import { supabase } from '@/lib/db'
import { useProfileStore } from '@/store'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()
const id = route.params.id

const name = ref(profileStore.profile.name)
const introduction = ref(profileStore.profile.introduction)
const avatarUrl = ref(profileStore.profile.avatarUrl ? `${AVATAR_BASE_URL}/${profileStore.profile.avatarUrl}` : DEFAULT_AVATAR_URL)

const inputRef = ref<HTMLInputElement | null>(null)
const loading = ref(false)
const uploadLoading = ref(false)
const avatarFile = shallowRef()

async function handleFileChange(event: any) {
  avatarFile.value = event.target.files[0]
  uploadLoading.value = true

  const suffix = avatarFile.value.type.split('/')[1]
  // Upload avatar
  const { data: avatarData, error: avatarError } = await supabase
    .storage
    .from('avatar')
    .upload(`public/${Date.now()}.${suffix}`, avatarFile.value, {
      cacheControl: '3600',
      upsert: false,
    })

  uploadLoading.value = false

  if (avatarError || !avatarData) {
    toast.error('Avatar upload failed, please try again.')
    return
  }

  avatarUrl.value = `${AVATAR_BASE_URL}/${avatarData.fullPath}`
}

async function handleUpsertAccount() {
  loading.value = true

  const { data, error } = await supabase.from('profile').upsert({
    id: profileStore.profile.id || undefined,
    name: name.value,
    introduction: introduction.value,
    slug: name.value.trim().replace(/\s+/g, '-').toLowerCase(),
    avatar_url: avatarUrl.value.replace(`${AVATAR_BASE_URL}/`, ''),
  }, { onConflict: 'id' }).select()
  loading.value = false

  if (error || !data?.length) {
    toast.error('Error saving, please try again.')
    return
  }

  const id = data[0].id
  profileStore.setProfile({
    id,
    name: name.value,
    introduction: introduction.value,
    avatarUrl: avatarUrl.value,
  })

  router.push(`/profile/edit/${id}`)

  toast.success('Your profile have been saved.')
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set your avatar, name and introduction.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-2">
        <div class="space-y-1">
          <Label for="name">Avatar</Label>
          <p class="text-xs text-zinc-400">
            Min 200x200px, PNG or JPEG
          </p>
        </div>
        <div class="flex items-center gap-6">
          <Avatar class="relative w-20 h-20">
            <AvatarImage :src="avatarUrl" alt="@shadcn" />
          </Avatar>
          <input id="upload-avatar" ref="inputRef" type="file" class="hidden" accept=".jpeg, .png" @change="handleFileChange">
          <Button size="sm" for="upload-avatar" :disabled="uploadLoading" @click="() => inputRef?.click()">
            Upload
          </Button>
        </div>
      </div>
      <div class="space-y-1">
        <Label for="name">Name</Label>
        <Input id="name" v-model="name" placeholder="Enter your name" />
      </div>
      <div class="space-y-1">
        <Label for="introduction">Introduction</Label>
        <Input id="introduction" v-model="introduction" placeholder="Enter your introduction" />
      </div>
    </CardContent>
    <CardFooter class="gap-2">
      <Button :disabled="loading" @click="handleUpsertAccount">
        Save changes
      </Button>
      <Button v-if="id" variant="outline" :disabled="loading" @click="router.push(`/profile/${id}`)">
        View Profile
      </Button>
    </CardFooter>
  </Card>
</template>
