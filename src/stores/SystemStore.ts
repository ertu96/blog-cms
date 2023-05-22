import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import router from '../router'

const toast = useToast()

export const useSystemStore = defineStore('system', {
  state: () => ({
    darkMode:
      localStorage.getItem('theme') !== null
        ? localStorage.getItem('theme') === 'dark'
        : 'dark',
    loggedIn: false,
    accessToken: '',
  }),
  getters: {
    isDarkMode: (state) => state.darkMode,
    isLoggedIn: (state) => state.loggedIn,
    getAccessToken: (state) => state.accessToken,
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },
    loginUser(accessToken: string) {
      this.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken)
      this.loggedIn = true
      toast.success('Logged in successfully')
    },
    logoutUser() {
      this.accessToken = ''
      localStorage.removeItem('accessToken')
      this.loggedIn = false
      toast.info('Logged out')
      router.push({ name: 'login' })
    },
    initUser() {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        this.accessToken = accessToken
        this.loggedIn = true
      }
    },
  },
})
