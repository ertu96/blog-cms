<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import { useSystemStore } from './stores/SystemStore'

const systemStore = useSystemStore()
systemStore.initUser()
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
