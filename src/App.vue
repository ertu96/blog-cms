<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div className="flex flex-col min-h-screen justify-between">
    <Navbar />
    <main
      class="container mx-auto my-20 rounded bg-black/10 p-6 dark:bg-white/10"
    >
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
