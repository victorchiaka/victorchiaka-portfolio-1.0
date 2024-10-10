<script setup lang="ts">
import { MdFileDownload } from "@kalimahapps/vue-icons";
import NaturePc from "../components/icons/NaturePc.vue";
import Accordion from "../components/Accordion.vue";
import technologies from "../data/technologies.json";
</script>

<template>
  <section class="insights">
    <div class="my-technologies">
      <div class="w-[90%] md:w-[40%] mx-auto">
        <NaturePc />
      </div>
      <div class="w-full md:w-[50%] self-start">
        <div class="w-full mx-auto">
          <h2 class="text-left md:text-center font-bold font-comfortaa text-lg md:text-xl lg:text-2xl mb-1 md:mb-3">
            My Technologies
          </h2>
          <div v-for="(category, key) in technologies" class="py-2 w-full" :key="key">
            <Accordion :category="category" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.insights {
  @apply min-h-dvh flex items-center justify-center p-2 w-[95%] md:w-full mx-auto;

  .my-technologies {
    @apply min-h-[70vh] flex w-full flex-col md:flex-row items-start md:items-center md:justify-between;
  }

  /* .my-works {
    @apply gap-5 flex flex-col md:flex-row items-center lg:gap-x-14;
  }

  .contact-me {
    @apply gap-5 flex flex-col md:flex-row items-center lg:gap-x-14;
  } */
}
</style>
