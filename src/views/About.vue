<script setup lang="ts">
import { MdFileDownload } from "@kalimahapps/vue-icons";
</script>
<template>
  <section class="about">
    <div id="about" class="about-me about-me-mobile">
      <div class="about-text about-text-mobile">
        <h1 class="text-xl md:text-3xl font-comfortaa font-bold md:self-start">
          Hello, I'm Victor Chiaka
        </h1>
        <p class="text-sm font-ubuntu-mono">
          A Solid FullStack Software Engineer that specializes in crafting
          high-performance apps, scalable, systems & enterprise backend
          services. I transform ideas into efficient digital solutions. Let’s
          collaborate!!!.
        </p>
        <button class="download-resume self-center md:self-start">
          <MdFileDownload class="animate-bounce" /> My resume
        </button>
      </div>
      <img
        src="../assets/images/freelance.svg"
        alt="Developer freelancing picture"
        class="w-[80%] md:w-[28%]"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.about {
  @apply md:px-[5%] min-h-[100dvh] flex flex-col md:flex-row;
}

.about-me {
  @apply flex flex-col-reverse gap-y-12 md:flex-row items-center justify-between;
}

.about-text {
  @apply w-full md:w-[60%] flex flex-col gap-y-4 text-center md:text-left;
}

.about-me-mobile {
  > img {
    @apply relative md:static top-24;
  }

  > .about-text-mobile {
    @apply bg-blue-300 pt-[4.5rem] pb-6 px-3 rounded-t-2xl items-center justify-end md:bg-transparent md:p-0;
  }
}

.download-resume {
  @apply text-xs w-fit font-asap shadow-thin-border p-2 rounded flex items-center gap-2;
}
</style>
