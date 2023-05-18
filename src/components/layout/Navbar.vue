<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<template>
  <nav
    class="bg-gray-50/70 dark:bg-gray-900/70 text-gray-900 dark:text-gray-50 backdrop-blur-lg fixed z-20 w-full top-0 left-0 py-2 drop-shadow-sm"
  >
    <div
      class="container px-4 my-2 flex flex-wrap justify-between items-center mx-auto"
    >
      <RouterLink
        to="/"
        class="self-center text-xl font-semibold whitespace-nowrap cursor-pointer"
      >
        LOGO
      </RouterLink>
      <div class="flex justify-end gap-x-6 text-sm">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </div>
    </div>
  </nav>
</template>
