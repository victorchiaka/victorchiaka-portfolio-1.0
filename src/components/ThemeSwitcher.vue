<script setup lang="ts">
interface ThemeSwitherProps {
  theme: string;
  classes?: string;
  id?: string;
}

const props = defineProps<ThemeSwitherProps>();
</script>
<template>
  <button
    :class="['button', props.classes]"
    @click="$emit('toggleTheme')"
    :id="props.id"
  >
    <img
      v-if="theme == 'light'"
      src="/images/moon.svg"
      alt="Moon Icon"
      class="w-3 h-3 theme-switcher"
    />
    <img
      v-else
      src="/images/sun.svg"
      alt="Sun Icon"
      class="w-3 h-3 theme-switcher"
    />
  </button>
</template>
<style scoped lang="scss">
.button {
  @apply grid place-items-center backdrop-filter backdrop-blur-2xl bg-opacity-10 bg-gray-50 shadow-sm rounded-full border border-gray-500/30 dark:border-white/50;
}
</style>
