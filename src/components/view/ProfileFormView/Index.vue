<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref, shallowRef } from 'vue'
import AccountContent from './AccountContent.vue'
import AboutMeContent from './AboutMeContent.vue'
import ContactMeContent from './SocialsContent.vue'
import ProjectsContent from './ProjectsContent.vue'
import Copyright from '@/components/Copyright.vue'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const route = useRoute()
const username = route.params.username

const titleLabel = computed(() => username ? 'Edit' : 'Create')

const tabs = ref([{
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
  <div class="flex-1 flex flex-col transition-all p-9 pb-0 md:p-14 md:px-32">
    <section class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold text-foreground">
        {{ titleLabel }} Profile
      </h2>
      <p class="text-lg text-zinc-400">
        {{ titleLabel }} your profile. Click save when you're done.
      </p>
    </section>
    <Separator class="my-9" />
    <div class="flex-1 w-full flex justify-center">
      <Tabs :default-value="tabs[0].value" class="w-[400px]">
        <TabsList class="inline-flex items-center">
          <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">
            {{ tab.label }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
          <!-- <AccountContent /> -->
          <component :is="tab.component" />
        </TabsContent>
        <!-- <TabsContent :value="tabs[1].value">
          <AboutMeContent />
        </TabsContent>
        <TabsContent :value="tabs[2].value">
          <ContactMeContent />
        </TabsContent>
        <TabsContent :value="tabs[3].value">
          <ProjectsContent />
        </TabsContent> -->
      </Tabs>
    </div>
    <Copyright />
  </div>
</template>
