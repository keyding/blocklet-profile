<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useProfileStore } from '@/store'
import { supabase } from '@/lib/db'
import RemoveIcon from '@/components/Icons/Remove.vue'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()

const id = route.params.id

const loading = ref(false)
const projects = ref(profileStore.profile.projects?.length
  ? [...profileStore.profile.projects]
  : [
      {
        id: Math.random().toString().substring(2),
        name: '',
        introduction: '',
        link: '',
      },
    ],
)

async function handleUpdate() {
  if (!id)
    return

  loading.value = true
  const { data, error } = await supabase.from('profile').update({
    projects: projects.value.filter(project => !!(project.name || project.introduction || project.link)),
  }).eq('id', id).select()
  loading.value = false

  if (error || !data?.length) {
    toast.error('Error saving, please try again.')
    return
  }

  profileStore.setProfile({
    projects: projects.value,
  })

  toast.success('Your profile have been saved.')
}

function handleAddNewProduct() {
  projects.value.push({
    id: Math.random().toString().substring(2),
    name: '',
    introduction: '',
    link: '',
  })
}

function handleDeleteProduct(index: number) {
  projects.value.splice(index, 1)
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set your project information.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Card v-for="project, index in projects" :key="project.id">
        <CardHeader class="flex-row items-center justify-between pb-5">
          <CardTitle># {{ index + 1 }}</CardTitle>
          <Button v-if="projects.length > 1" size="icon" variant="ghost" class="text-zinc-300 transition-all hover:text-red-400" @click="handleDeleteProduct">
            <RemoveIcon />
          </Button>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <div class="grid grid-cols-3 items-center">
              <Label>Name</Label>
              <!-- <Input v-model="project.name" class="col-span-2" placeholder="Enter project name" /> -->
              <Input v-model="project.name" class="col-span-2" placeholder="Enter project name" />
            </div>
            <div class="grid grid-cols-3 items-center">
              <Label for="description">Introduction</Label>
              <Input id="description" v-model="project.introduction" class="col-span-2" placeholder="Enter project introduction" />
            </div>
            <div class="grid grid-cols-3 items-center">
              <Label for="link">Link</Label>
              <Input id="link" v-model="project.link" class="col-span-2" placeholder="Enter project link" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div class="flex justify-end">
        <Button variant="ghost" class="text-zinc-400" @click="handleAddNewProduct">
          + Add new project
        </Button>
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
