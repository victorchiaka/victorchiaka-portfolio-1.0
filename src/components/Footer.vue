<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<template>
  <footer>
    <h3 class="font-bold text-lg">Victor Chiaka</h3>
    <small class="text-xxs"
      >&copy; 2024 - {{ year }} Victor Chiaka, All rights reserved.</small
    >
  </footer>
</template>
<style scoped lang="scss">
footer {
  @apply w-full h-fit md:w-[90%] rounded-t-2xl md:rounded-t-lg grid place-items-center gap-y-1 py-6 mx-auto font-comfortaa bg-navy-blue/10 dark:bg-white/10;
}
</style>
