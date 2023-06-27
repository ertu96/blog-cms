<script setup lang="ts">
import { useSystemStore } from '../../../stores/SystemStore'
import { parseJwt } from '../../../utils/parseJwt'
const systemStore = useSystemStore()
</script>

<template>
  <div class="cursor-pointer">
    <div class="dropdown-end dropdown">
      <div tabindex="0" class="placeholder avatar">
        <div class="w-10 rounded-full bg-neutral-focus text-neutral-content">
          <span v-if="systemStore.isLoggedIn" class="text-lg">{{
            parseJwt(systemStore.getAccessToken).name.charAt(0).toUpperCase()
          }}</span>
          <span v-else>
            <FontAwesomeIcon :icon="['fas', 'user']" />
          </span>
        </div>
      </div>
      <ul
        tabindex="0"
        class="dropdown-content menu rounded-box z-[1] mt-4 w-52 bg-base-100 p-2 shadow"
      >
        <li v-if="systemStore.isLoggedIn">
          <div class="flex items-center gap-1">
            <FontAwesomeIcon :icon="['fas', 'user']" />

            <span>
              {{ parseJwt(systemStore.getAccessToken).name }}
            </span>
          </div>
        </li>
        <div v-if="systemStore.isLoggedIn" class="divider my-1" />
        <li v-if="systemStore.isLoggedIn">
          <button
            class="flex items-center gap-1"
            @click="systemStore.logoutUser"
          >
            <FontAwesomeIcon :icon="['fas', 'right-to-bracket']" />
            Logout
          </button>
        </li>
        <li v-if="!systemStore.isLoggedIn">
          <RouterLink to="/login" class="flex items-center gap-1">
            <FontAwesomeIcon :icon="['fas', 'right-to-bracket']" />
            Login</RouterLink
          >
        </li>
        <li v-if="!systemStore.isLoggedIn">
          <RouterLink to="/register" class="flex items-center gap-1">
            <FontAwesomeIcon :icon="['fas', 'user-plus']" />
            Register</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
