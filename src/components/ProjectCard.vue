<script setup lang="ts">
import {
  BxPython,
  AkNextjsFill,
  SiCsharp,
  SiTailwindcss,
} from "@kalimahapps/vue-icons";
import { computed } from "vue";

type Project = {
  name: string;
  type: string;
  description: string;
  githubLink: string;
  icon: string;
};

interface ProjectProps {
  project: Project;
}

const iconsMap = {
  NextJs: AkNextjsFill,
  Tailwind: SiTailwindcss,
  CSharp: SiCsharp,
  Python: BxPython,
};

const props = defineProps<ProjectProps>();

const iconComponent = computed(() => {
  return iconsMap[props.project.icon];
});
</script>
<template>
  <a class="project-card group" :href="project.githubLink">
    <div class="project-card-top">
      {{ project.name }}
      <component :is="iconComponent" class="w-[1.2rem] h-[1.2rem] group-hover:animate-flip" v-if="iconComponent" />
    </div>
    <div class="project-card-bottom">
      <p class="description">{{ project.description }}</p>
      <div class="type text-xxs">
        <p>{{ project.type }}</p>
      </div>
    </div>
  </a>
</template>
<style scoped lang="scss">
.project-card {
  @apply rounded-md bg-gray-400/30 dark:bg-navy-blue/90 backdrop-blur-sm shadow-sm w-full py-3 px-4 h-fit flex flex-col justify-between gap-y-3 cursor-pointer;

  &-top {
    @apply font-comfortaa font-bold md:text-base;
    @apply flex justify-between items-center;
  }

  &-bottom {
    @apply flex justify-between text-sm font-asap;

    .description {
      @apply overflow-hidden overflow-ellipsis text-nowrap w-[80%];
    }

    .type {
      @apply bg-gray-700/30 dark:bg-blue-grotto/20 w-fit px-2 py-1 transition-[border-radius] duration-1000 cursor-pointer hover:rounded-md font-semibold max-h-7;
    }
  }
}
</style>
