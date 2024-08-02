<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, ref, shallowRef } from 'vue'
import { toast } from 'vue-sonner'
import AccountContent from './AccountContent.vue'
import AboutMeContent from './AboutMeContent.vue'
import ContactMeContent from './SocialsContent.vue'
import ProjectsContent from './ProjectsContent.vue'
import Skeleton from './Skeleton.vue'
import Copyright from '@/components/Copyright.vue'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useProfileStore } from '@/store'
import EmptyStatus from '@/components/view/ProfileView/EmptyStatus.vue'
import { supabase } from '@/lib/db'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()

const id = route.params.id
const isCreate = route.path === '/profile/create'
const titleLabel = isCreate ? 'Create' : 'Edit'

onBeforeMount(async () => {
  profileStore.setLoading(false)

  // Clear store when create new profile
  if (isCreate) {
    profileStore.clearProfile()
  }
  else if (!id) {
    router.push('/profile/create')
  }
  else {
    profileStore.setLoading(true)
    const { data, error } = await supabase.from('profile').select().eq('id', id)
    profileStore.setLoading(false)

    if (error || !data?.length) {
      toast.warning('Unknown user', {
        description: `Unable to retrieve the user's profile information.`,
        action: {
          label: 'Create Profile',
          onClick: () => router.replace('/profile/create'),
        },
      })
      return
    }

    const { id: userId, name, introduction, avatar_url: avatarUrl, about_me: aboutMe, socials, projects } = data[0]
    profileStore.setProfile({
      id: userId,
      name,
      introduction,
      avatarUrl,
      aboutMe,
      socials,
      projects,
    })
  }
})

const tabs = ref(isCreate
  ? [{
      value: 0,
      label: 'Account',
      component: shallowRef(AccountContent),
    }]
  : [{
      value: 0,
      label: 'Account',
      component: shallowRef(AccountContent),
    }, {
      value: 1,
      label: 'About me',
      component: shallowRef(AboutMeContent),
    }, {
      value: 2,
      label: 'Socials',
      component: shallowRef(ContactMeContent),
    }, {
      value: 3,
      label: 'Projects',
      component: shallowRef(ProjectsContent),
    }])
</script>

<template>
  <div class="flex-1 flex flex-col transition-all p-9 !pb-0 md:p-14 md:px-32">
    <section class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold text-foreground">
        {{ titleLabel }} Profile
      </h2>
      <p class="text-lg text-zinc-400">
        {{ titleLabel }} your profile. Click save when you're done.
      </p>
    </section>
    <Separator class="my-9" />
    <Skeleton v-if="profileStore.loading" />
    <div v-else-if="!isCreate && !profileStore.profile.id" class="flex-1 w-full flex items-center justify-center">
      <EmptyStatus />
    </div>
    <div v-else class="flex-1 w-full flex flex-col items-center gap-4">
      <Tabs :default-value="tabs[0].value" class="w-[400px]">
        <TabsList class="inline-flex items-center">
          <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">
            {{ tab.label }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
          <component :is="tab.component" />
        </TabsContent>
      </Tabs>
    </div>
    <Copyright />
  </div>
</template>
