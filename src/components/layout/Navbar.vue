<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from 'vue'
import { useSystemStore } from '../../stores/SystemStore'

export default defineComponent({
  name: 'Navbar',
  components: { FontAwesomeIcon },
  setup() {
    const systemStore = useSystemStore()
    return {
      systemStore,
    }
  },
})
</script>

<template>
  <nav
    class="fixed left-0 top-0 z-20 w-full bg-gray-50/70 py-2 text-gray-900 drop-shadow-sm backdrop-blur-lg dark:bg-gray-900/70 dark:text-gray-50"
  >
    <div
      class="container mx-auto my-2 flex flex-wrap items-center justify-between px-4"
    >
      <RouterLink
        to="/"
        class="cursor-pointer self-center whitespace-nowrap text-xl font-semibold"
      >
        LOGO
      </RouterLink>
      <div
        v-if="systemStore.isLoggedIn"
        class="flex gap-x-4 text-sm md:gap-x-8"
      >
        <RouterLink to="/edit-post/new"> Create Post </RouterLink>
        <RouterLink to="/my-posts"> My Posts </RouterLink>
      </div>
      <div class="flex items-center justify-end gap-10">
        <div
          v-if="systemStore.isLoggedIn"
          class="flex justify-end gap-x-4 text-sm md:gap-x-8"
        >
          <button
            class="flex items-center gap-1"
            @click="systemStore.logoutUser"
          >
            <FontAwesomeIcon :icon="['fas', 'right-to-bracket']" />
            Logout
          </button>
        </div>
        <div v-else class="flex justify-end gap-x-4 text-sm md:gap-x-8">
          <RouterLink to="/login" class="flex items-center gap-1">
            <FontAwesomeIcon :icon="['fas', 'right-to-bracket']" />
            Login</RouterLink
          >
          <RouterLink to="/register" class="flex items-center gap-1">
            <FontAwesomeIcon :icon="['fas', 'user-plus']" />
            Register</RouterLink
          >
        </div>
        <button
          class="btn-outline btn-square btn-sm btn"
          @click="systemStore.toggleDarkMode"
        >
          <FontAwesomeIcon
            :icon="['fas', systemStore.isDarkMode ? 'moon' : 'sun']"
          />
        </button>
      </div>
    </div>
  </nav>
</template>
