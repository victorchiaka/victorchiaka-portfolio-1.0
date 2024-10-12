<script setup lang="ts">
import { MdFileDownload } from "@kalimahapps/vue-icons";
import NaturePc from "../components/icons/NaturePc.vue";
import Accordion from "../components/Accordion.vue";
import ProjectCard from "../components/ProjectCard.vue";
import WorkCard from "../components/WorkCard.vue";
import technologies from "../data/technologies.json";
import projects from "../data/projects.json";
import works from "../data/works.json";
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
    <div class="works-and-projects">
      <div class="projects">
        <h2 class="text-left md:text-center font-bold font-comfortaa text-lg md:text-xl lg:text-2xl mb-1 md:mb-3">
          Projects
        </h2>
        <div v-for="(project, key) in projects" :key="key" class="w-full flex py-1">
          <div class="w-[2px] gap-y-2 flex flex-col items-center mr-3">
            <div class="bg-gray-400/30 h-[10%] w-[2px] rounded-md"></div>
            <div class="bg-gray-400/30 h-[6px] w-[6px] rounded-full"></div>
            <div class="bg-gray-400/30 h-[70%] w-[2px] rounded-md"></div>
          </div>
          <div class="w-[95%]">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
      <div class="works">
        <h2 class="text-left md:text-center font-bold font-comfortaa text-lg md:text-xl lg:text-2xl mb-1 md:mb-3">
          My Works
        </h2>
        <div class="w-full flex flex-col items-center gap-y-3 h-fit md:h-full overflow-y-scroll works-scroll">
          <div class="w-full flex md:block" v-for="(work, key) in works" :key="key">
            <div class="w-[6px] gap-y-2 flex flex-col items-center mr-3 md:hidden">
              <div class="bg-gray-400/30 h-[10%] w-[2px] rounded-md"></div>
              <div class="bg-gray-400/30 h-[6px] w-[6px] rounded-full"></div>
              <div class="bg-gray-400/30 h-[80%] w-[2px] rounded-md"></div>
            </div>
            <div class="w-[95%] md:w-full">
              <div class="text-xxs w-[100%] py-2 h-56 rounded-md bg-gray-500/20">
                <p class="text-center pb-1">{{ work.position }}</p>
                <WorkCard :workCard="work" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.insights {
  @apply min-h-dvh flex flex-col-reverse md:flex-col items-center justify-center p-2 w-[95%] mx-auto;

  .my-technologies {
    @apply md:min-h-[70vh] flex w-full flex-col md:flex-row items-start md:items-center md:justify-between md:w-full my-5 md:my-0;
  }

  .works-and-projects {
    @apply min-h-fit flex w-full flex-col-reverse gap-y-5 md:gap-y-0 md:flex-row md:gap-x-10;

    .projects {
      @apply flex flex-col items-start h-fit w-full md:max-w-[55%] lg:min-w-[65%];
    }

    .works {
      @apply flex flex-col items-start h-fit md:h-[30rem] min-w-[19rem] md:w-[26rem] md:max-w-[32rem] rounded-lg;
    }

    .works-scroll::-webkit-scrollbar {
      width: 0px;
    }

    .works-scroll::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
      border: 2px solid transparent;
    }

    .works-scroll::-webkit-scrollbar-track {
      background-color: transparent;
    }

    .works-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    .works-scroll {
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
  }

  /*.contact-me {
    @apply gap-5 flex flex-col md:flex-row items-center lg:gap-x-14;
  } */
}
</style>
