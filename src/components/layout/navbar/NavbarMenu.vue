<template>
  <div class="dropdown">
    <label tabindex="0" class="btn-ghost btn-circle btn">
      <FontAwesomeIcon :icon="['fas', 'bars']" size="xl" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu rounded-box z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
    >
      <li>
        <RouterLink to="/categories"> Categories </RouterLink>
      </li>
      <li><RouterLink to="/edit-post/new"> Create Post </RouterLink></li>
      <li><RouterLink to="/my-posts"> My Posts </RouterLink></li>
    </ul>
  </div>
</template>
