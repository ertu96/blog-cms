<script setup lang="ts">
import { useQueries } from '@tanstack/vue-query'
import { RouterView } from 'vue-router'
import { useToast } from 'vue-toastification'
import { getCategories } from './api/category/getCategories'
import { getPosts } from './api/post/getPosts'
import { getUsers } from './api/user/getUsers'
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/navbar/Navbar.vue'
import { useSystemStore } from './stores/SystemStore'

const systemStore = useSystemStore()
systemStore.initUser()

const toast = useToast()

useQueries({
  queries: [
    {
      queryKey: ['users'],
      queryFn: getUsers,
      onError: (err: any) => {
        toast.error('Failed to load users')
        console.error(err)
      },
    },
    {
      queryKey: ['categories'],
      queryFn: getCategories,
      onError: (err: any) => {
        toast.error('Failed to load categories')
        console.error(err)
      },
    },
    {
      queryKey: ['posts'],
      queryFn: getPosts,
      onError: (err: any) => {
        toast.error('Failed to load posts')
        console.error(err)
      },
    },
  ],
})
</script>

<template>
  <div
    class="main-background flex min-h-screen flex-col justify-between"
    :class="systemStore.isDarkMode ? 'dark' : ''"
    :data-theme="systemStore.isDarkMode ? 'dark' : 'light'"
  >
    <Navbar />
    <main
      class="container mx-auto my-20 rounded bg-black/10 p-6 dark:bg-white/10"
    >
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
