import { reactive } from 'vue'
import { createGlobalState } from '@vueuse/core'

type SocialType = 'email' | 'phone' | 'github' | 'x' | 'website' | 'telegram'

interface Social {
  type: SocialType
  value: string
}

interface Project {
  name: string
  introduction: string
  link: string
}

interface Profile {
  username: string
  name: string
  introduction: string
  avatarUrl: string
  aboutMe: string
  socials: Social[]
  projects: Project[]
}

export const useGlobalState = createGlobalState(
  () => {
    const profile = reactive<Profile>({
      username: '',
      name: '',
      introduction: '',
      avatarUrl: '',
      aboutMe: '',
      socials: [],
      projects: [],
    })

    function updateProfile(data: Partial<Profile>) {
      Object.assign(profile, { ...data })
    }

    async function fetchProfile(username: string) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            username,
            name: 'Caven Ding',
            introduction: `I'm a full-stack development engineer`,
            avatarUrl: 'https://github.com/keyding.png',
            aboutMe: `Hello everyone, my name is Caven, and I am a full-stack engineer with 8+ years of experience. I specialize in HTML, CSS, and JavaScript, and have substantial hands-on experience with frameworks like React and Vue.js.`,
            socials: [{
              type: 'email',
              value: 'heycaven@duck.com',
            }, {
              type: 'phone',
              value: '+1 (555) 123-4567',
            }],
            projects: [
              {
                name: 'Online Arbitrage Tool',
                introduction: 'A tool that quickly and automatically check any Amazon FBA online arbitrage deal.',
                link: 'oa.amazonus.app',
              },
            ],
          })
        }, 1000)
      })
    }

    return { profile, updateProfile, fetchProfile }
  },
)
