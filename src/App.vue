<script setup lang="ts">
import Landing from "./views/Landing.vue";
import Insight from "./views/Insight.vue";
import Navbar from "./components/Navbar.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import { useStorage } from "@vueuse/core";
import { onMounted, ref } from "vue";

const theme = useStorage("THEME_MODE", "light");

const toggleTheme = () => {
  if (theme.value === "dark") {
    theme.value = "light";
    document.documentElement.classList.remove("dark");
  } else {
    theme.value = "dark";
    document.documentElement.classList.add("dark");
  }

  localStorage.setItem("THEME_MODE", theme.value);
};

const observeLogoTouch = () => {
  const mainLogo = document.querySelector("#main-logo");
  const themeSwicher = document.querySelector("#theme-switcher");
  const navbar = document.querySelector("#navbar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        navbar.classList.toggle("hidden", entry.isIntersecting);
        navbar.classList.toggle("flex", !entry.isIntersecting);
        themeSwicher.classList.toggle("hidden", !entry.isIntersecting);
      });
    },
    {
      threshold: 0.9,
    },
  );

  observer.observe(mainLogo);
};

const animate = () => {
  const themeSwitchers = document.querySelectorAll(".theme-switcher");

  themeSwitchers.forEach((themeSwitcher) => {
    themeSwitcher.classList.add("animate-rotate");
  });
};

const handleToggleTheme = () => {
  animate();
  setTimeout(() => {
    toggleTheme();
  }, 500);
};

onMounted(() => {
  const element = document.documentElement;

  theme.value == "dark"
    ? element.classList.add("dark")
    : element.classList.remove("light");

  observeLogoTouch();
});
</script>

<template>
  <main class="main">
    <Navbar id="navbar" :classes="'hidden'" :theme="theme" :handleToggleTheme="handleToggleTheme" />
    <div class="contents">
      <Landing />
      <Insight />
    </div>
  </main>
  <div class="fixed bottom-0 right-0 w-full h-fit z-[3]">
    <div id="theme-switcher" class="container w-[95%] md:w-[90%] mx-auto relative">
      <ThemeSwitcher @toggle-theme="handleToggleTheme" :theme="theme"
        :classes="'opacity-0 translate-y-[100%] animate-slide-down-to-bottom absolute right-4 bottom-4 p-3'" />
    </div>
  </div>
  <div class="glass-display" />
</template>

<style scoped lang="scss">
.main {
  @apply min-h-[100dvh] bg-gradient-to-bl from-baby-blue to-blue-green dark:from-blue-grotto dark:to-navy-blue;
}

.glass-display {

  &::after,
  &::before {
    content: "";
    @apply rounded-full absolute min-h-[50vh];
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 1s;
  }

  @apply after:bg-white/20 before:bg-cyan-400/25;
  @apply dark:after:bg-white/10 dark:before:bg-baby-blue/5;
  @apply after:w-[60vw] after:animate-pulse before:animate-rotate before:w-[20vh];

  @apply fixed inset-0 flex items-center justify-center blur-2xl;
  animation: slide-x 10s alternate linear infinite;
}

@keyframes slide-x {
  from {
    transform: translateX(-70%);
  }

  to {
    transform: translateX(70%);
  }
}

.contents {
  @apply md:w-[90%] mx-auto flex flex-col items-center;
}
</style>
