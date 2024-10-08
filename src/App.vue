<script setup lang="ts">
import Landing from "./views/Landing.vue";
import About from "./views/About.vue";
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
    <Navbar id="navbar" :classes="'hidden'" :theme="theme"  :handleToggleTheme="handleToggleTheme" />
    <div class="contents">
      <Landing />
      <About />
    </div>
  </main>
  <div class="fixed bottom-0 right-0 w-full h-fit">
    <div id="theme-switcher" class="container w-[95%] mx-auto relative">
      <ThemeSwitcher @toggle-theme="handleToggleTheme" :theme="theme"
        :classes="'opacity-0 translate-y-[100%] animate-slide-down-to-bottom absolute right-4 bottom-4 p-3'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply min-h-[100dvh] bg-gradient-to-bl from-baby-blue to-blue-green dark:from-blue-grotto dark:to-navy-blue text-gray-600 dark:text-white;
}

.contents {
  @apply md:w-[90%] mx-auto flex flex-col items-center;
}
</style>
