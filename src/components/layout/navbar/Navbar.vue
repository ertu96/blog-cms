<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemStore } from '../../../stores/SystemStore'
import NavbarAvatar from './NavbarAvatar.vue'
import NavbarLogo from './NavbarLogo.vue'
import NavbarMenu from './NavbarMenu.vue'

import NavbarThemeButton from './NavbarThemeButton.vue'
export default defineComponent({
  name: 'Navbar',
  components: { NavbarLogo, NavbarMenu, NavbarThemeButton, NavbarAvatar },
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
    class="navbar fixed bg-gray-50/70 text-gray-900 backdrop-blur-lg dark:bg-gray-900/70 dark:text-gray-50"
  >
    <div class="navbar-start">
      <NavbarMenu />
    </div>
    <div class="navbar-center">
      <NavbarLogo />
    </div>
    <div class="navbar-end gap-x-4">
      <NavbarAvatar />
      <NavbarThemeButton />
    </div>
  </nav>
</template>
