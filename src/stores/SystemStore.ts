import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useSystemStore = defineStore('system', {
  state: () => ({
    loggedIn: false,
    accessToken: '',
  }),
  getters: {
    isLoggedIn: (state) => state.loggedIn,
    getAccessToken: (state) => state.accessToken,
  },
  actions: {
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
    },
  },
})
