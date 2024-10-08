<script setup lang="ts">
interface ThemeSwitherProps {
  theme: string;
  classes?: string;
  id?: string;
}

const props = defineProps<ThemeSwitherProps>();
</script>
<template>
  <button :class="['button', props.classes]" @click="$emit('toggleTheme')" :id="props.id">
    <img v-if="theme == 'light'" src="../assets/images/moon.svg" alt="Moon Icon" class="w-3 h-3 theme-switcher" />
    <img v-else src="../assets/images/sun.svg" alt="Sun Icon" class="w-3 h-3 theme-switcher" />
  </button>
</template>
<style scoped lang="scss">
.button {
  @apply grid place-items-center backdrop-filter backdrop-blur-2xl bg-opacity-10 bg-gray-50 rounded-full shadow-thin-border dark:shadow-thin-border-white;
}
</style>
