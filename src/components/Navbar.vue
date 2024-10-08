<script setup lang="ts">
import ThemeSwitcher from "./ThemeSwitcher.vue";

interface NavbarProps {
  theme: string;
  handleToggleTheme: () => void;
  classes?: string;
  id?: string;
}
defineProps<NavbarProps>();

</script>
<template>
  <nav :class="['navbar-glass', classes]" :id="id">
    <div class="flex items-center gap-1 cursor-pointer">
      <img src="../assets/images/chiaka-logo.svg" alt="Victor's logo" class="w-6 h-6" />
      <h4 class="navbar-header">Victor Chiaka</h4>
    </div>
    <ul class="navbar-list">
      <ThemeSwitcher @toggle-theme="handleToggleTheme" :theme="theme" classes="p-2" />
      |
      <li><a href="#">About me</a></li>
      <li><a href="#">Works</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Contact me</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  @apply sticky top-0 w-[90%] h-20 mx-auto px-6 items-center justify-between rounded-b-lg shadow-gray-500 shadow-sm;
}

.navbar-glass {
  @apply backdrop-blur-md overflow-clip z-[3];
}

.navbar-header {
  @apply font-bold text-base md:text-base font-poppins;
}

.navbar-list {
  @apply text-xs flex gap-x-4 items-center font-comfortaa;
}
</style>
