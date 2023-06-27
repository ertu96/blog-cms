<script setup lang="ts">
import { useSystemStore } from '../../../stores/SystemStore'

const systemStore = useSystemStore()
</script>

<template>
  <button
    class="btn-outline btn-square btn-sm btn"
    @click="systemStore.toggleDarkMode"
  >
    <FontAwesomeIcon :icon="['fas', systemStore.isDarkMode ? 'moon' : 'sun']" />
  </button>
</template>
