<script setup lang="ts">
import ThemeSwitcher from "./ThemeSwitcher.vue";
import { ClHamburgerMd, ClCloseSm } from "@kalimahapps/vue-icons";
import { ref } from "vue";

interface NavbarProps {
  theme: string;
  handleToggleTheme: () => void;
  classes?: string;
  id?: string;
}
defineProps<NavbarProps>();

const isOpen = ref(false);

const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

const scrollToAbout = () => {
  const aboutMe = document.querySelector("#about");
  if (!aboutMe) return;

  aboutMe.scrollIntoView({ behavior: "smooth" });
};

const scrollToSkills = () => {
  const stacks = document.querySelector("#stacks");
  if (!stacks) return;

  stacks.scrollIntoView({ behavior: "smooth" });
};

const scrollToWorks = () => {
  const works = document.querySelector("#works-and-projects");
  if (!works) return;

  works.scrollIntoView({ behavior: "smooth" });
};

const scrollToContact = () => {
  const contactMe = document.querySelector("#contact-me");
  if (!contactMe) return;
  contactMe.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <nav :class="['navbar-glass', classes]" :id="id">
    <div class="flex items-center gap-1 cursor-pointer">
      <img src="/images/chiaka-logo.svg" alt="Victor's logo" class="w-6 h-6" />
      <h4 class="navbar-header">Victor Chiaka</h4>
    </div>
    <ul class="navbar-list">
      <ThemeSwitcher @toggle-theme="handleToggleTheme" :theme="theme" classes="p-2" />
      |
      <li @click="scrollToAbout">About me</li>
      <li @click="scrollToWorks">Works</li>
      <li @click="scrollToSkills">Skills</li>
      <li @click="scrollToContact">Contact me</li>
      <ClHamburgerMd
        v-if="!isOpen"
        class="inline md:hidden w-6 h-6 cursor-pointer"
        @click="toggleNav"
      />
      <ClCloseSm
        v-if="isOpen"
        class="inline md:hidden w-6 h-6 cursor-pointer"
        @click="toggleNav"
      />
    </ul>
  </nav>
  <div class="w-full h-fit block md:hidden sticky top-16 z-[4]" :id="id">
    <ul class="mobile-navbar-list" v-show="isOpen">
      <li @click="scrollToAbout">About me</li>
      <li @click="scrollToWorks">Works</li>
      <li @click="scrollToSkills">Skills</li>
      <li @click="scrollToContact">Contact me</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
nav {
  @apply sticky top-0 w-full md:w-[90%] h-16 md:h-40 mx-auto px-6 items-center justify-between md:rounded-b-lg shadow-gray-800/20 dark:shadow-white/20 shadow-sm;
}

.navbar-glass {
  @apply backdrop-blur-md overflow-clip z-[3];
}

.navbar-header {
  @apply font-bold text-base md:text-base font-poppins;
}

.navbar-list {
  @apply text-xs flex gap-x-1 md:gap-x-4 items-center font-comfortaa;

  li {
    @apply hidden md:inline cursor-pointer;
  }
}

.mobile-navbar-list {
  @apply sticky h-fit w-full top-16 navbar-glass px-6 text-sm flex flex-col gap-3 py-3 shadow-sm border-t border-gray-800/20 dark:border-white/20 shadow-gray-800/20 dark:shadow-white/20 rounded-b-lg;

  li {
    @apply cursor-pointer;
  }
}
</style>
