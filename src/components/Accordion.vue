<script setup lang="ts">
import {
  UiChrome,
  BxSolidDownArrow,
  CaContainerSoftware,
  BsDatabaseFillGear,
} from "@kalimahapps/vue-icons";
import { computed, ref } from "vue";

type Category = {
  title: string;
  icon: string;
  technologies: string[];
};

interface AccordionProps {
  category: Category;
}

const props = defineProps<AccordionProps>();

const iconsMap = {
  Frontend: UiChrome,
  Backend: BsDatabaseFillGear,
  Software: CaContainerSoftware,
};

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const iconComponent = computed(() => {
  return iconsMap[props.category.icon];
});
</script>

<template>
  <div
    class="border shadow-sm border-gray-500/30 dark:border-white/20 py-2 rounded-md w-full cursor-pointer"
    @click="toggleOpen"
  >
    <div class="w-full flex justify-between items-center px-4">
      <div class="flex items-center gap-x-3">
        <component
          :is="iconComponent"
          class="w-[0.9rem] md:w-[1rem]"
          v-if="iconComponent"
        />
        <h4 class="text-sm pt-1">{{ props.category.title }}</h4>
      </div>
      <div class="w-[0.6rem]">
        <BxSolidDownArrow
          :class="[
            'w-full h-full transition-transform duration-500',
            isOpen ? 'rotate-180' : '',
          ]"
        />
      </div>
    </div>

    <div
      :class="[
        'overflow-hidden duration-700 ease-in-out',
        isOpen ? 'max-h-[50vh]' : 'max-h-0',
      ]"
    >
      <ul class="pt-2 text-xxs">
        <li
          v-for="(technology, key) in props.category.technologies"
          :key="key"
          @click.stop
          :class="[
            'border-t border-gray-500/30 dark:border-white/20 px-4',
            props.category.technologies.indexOf(technology) ==
            props.category.technologies.length - 1
              ? 'pt-2'
              : 'py-2',
          ]"
        >
          {{ technology }}
        </li>
      </ul>
    </div>
  </div>
</template>
