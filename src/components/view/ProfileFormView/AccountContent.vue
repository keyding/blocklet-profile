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
import { AVATAR_BASE_URL, DEFAULT_AVATAR_URL, MAX_AVATAR_SIZE, SUPPORTED_AVATAR_IMG_TYPE } from '@/lib/const'
import { supabase } from '@/lib/db'
import { useProfileStore } from '@/store'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()
const id = route.params.id

const { profile, setProfile } = profileStore
const name = ref(profile.name)
const introduction = ref(profile.introduction)
const avatarUrl = ref(profile.avatarUrl ? `${AVATAR_BASE_URL}/${profile.avatarUrl}` : '')

const inputRef = ref<HTMLInputElement | null>(null)
const loading = ref(false)
const uploadLoading = ref(false)
const avatarFile = shallowRef()

async function handleFileChange(event: any) {
  avatarFile.value = event.target.files[0]

  const { size, type } = avatarFile.value
  const imageType = type.split('/')[1]
  if (size > MAX_AVATAR_SIZE) {
    toast.warning('Maximum avatar size is 2MB.')
    return
  }
  if (!SUPPORTED_AVATAR_IMG_TYPE.includes(imageType)) {
    toast.warning(`Avatar are only supported in ${SUPPORTED_AVATAR_IMG_TYPE.join(',')}.`)
    return
  }

  // Upload avatar
  uploadLoading.value = true
  const uploadFile = `public/${Date.now()}.${imageType}`
  const { data, error } = await supabase
    .storage
    .from('avatar')
    .upload(uploadFile, avatarFile.value, {
      cacheControl: '3600',
      upsert: false,
    })
  uploadLoading.value = false

  if (error || !data) {
    toast.error('Avatar upload failed, please try again.')
    return
  }

  avatarUrl.value = `${AVATAR_BASE_URL}/${data.fullPath}`
}

async function handleUpsertAccount() {
  if (name.value.length < 5 || name.value.length > 20) {
    toast.warning('Name must be between 5 and 20 characters long')
    return
  }

  loading.value = true
  const slug = name.value.trim().replace(/\s+/g, '-').toLowerCase()
  const { data, error } = await supabase.from('profile').upsert({
    id: profileStore.profile.id || undefined,
    name: name.value,
    introduction: introduction.value,
    slug,
    avatar_url: avatarUrl.value.replace(`${AVATAR_BASE_URL}/`, ''), // only saved fullPath
  }, { onConflict: 'id' }).select()
  loading.value = false

  if (error || !data?.length) {
    toast.error('Error saving, please try again.')
    return
  }

  const id = data[0].id
  setProfile({
    id,
    name: name.value,
    introduction: introduction.value,
    slug,
    avatarUrl: avatarUrl.value,
  })

  router.push(`/profile/edit/${id}`)
  toast.success('Your account have been saved.')
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
            Max 2MB, PNG, JPG or JPEG
          </p>
        </div>
        <div class="flex items-center gap-6">
          <Avatar class="relative w-20 h-20">
            <AvatarImage :src="avatarUrl || DEFAULT_AVATAR_URL" alt="@shadcn" />
          </Avatar>
          <input id="upload-avatar" ref="inputRef" type="file" class="hidden" :accept="SUPPORTED_AVATAR_IMG_TYPE.map(type => `.${type}`).join(',')" @change="handleFileChange">
          <Button size="sm" for="upload-avatar" :disabled="uploadLoading" @click="() => inputRef?.click()">
            Upload
          </Button>
        </div>
      </div>
      <div class="space-y-1">
        <Label for="name">Name*</Label>
        <Input id="name" v-model="name" placeholder="Enter your name" maxlength="20" />
        <p class="text-sm text-zinc-300">
          Must be between 5 and 20 characters long
        </p>
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
