import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/db'

type SocialType = 'email' | 'phone' | 'github' | 'x' | 'website' | 'telegram'

interface Social {
  type: SocialType
  value: string
}

interface Project {
  id: string
  name: string
  introduction: string
  link: string
}

interface Profile {
  id: string
  name: string
  introduction: string
  slug: string
  avatarUrl: string
  aboutMe: string
  socials: Social[]
  projects: Project[]
}

const DefaultProfile = {
  id: '',
  name: '',
  introduction: '',
  slug: '',
  avatarUrl: '',
  aboutMe: '',
  socials: [],
  projects: [],
}

export const useProfileStore = defineStore('profile', () => {
  const loading = ref(true)
  const profile = reactive<Profile>({ ...DefaultProfile })

  function setProfile(data: Partial<Profile>) {
    Object.assign(profile, { ...data })
  }

  function clearProfile() {
    setProfile({ ...DefaultProfile })
  }

  function setLoading(status: boolean) {
    loading.value = status
  }

  async function fetchProfileBy(id: string) {
    const { data, error } = await supabase.from('profile').select().eq('id', id)
    return error ? [] : data
  }

  return { profile, setProfile, clearProfile, fetchProfileBy, loading, setLoading }
})
