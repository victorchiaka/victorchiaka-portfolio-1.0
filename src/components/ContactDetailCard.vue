<script setup lang="ts">
import {
  AkGithubFill,
  AkLinkedInV1Fill,
  PrTwitter,
  BsInstagram,
} from "@kalimahapps/vue-icons";
import { computed } from "vue";
import { ContactDetail } from "../types";

interface ContactDetailsProps {
  contactDetail: ContactDetail;
}

const iconsMap = {
  Instagram: BsInstagram,
  Github: AkGithubFill,
  Twitter: PrTwitter,
  LinkedIn: AkLinkedInV1Fill,
};

const props = defineProps<ContactDetailsProps>();

const iconComponent = computed(() => {
  return iconsMap[props.contactDetail.socialMediaIcon as unknown as keyof typeof iconsMap];
});
</script>
<template>
  <a class="contact-details-card" :href="contactDetail.link">
    <div class="flex w-fit flex-col gap-1 items-center">
      <component :is="iconComponent" v-if="iconComponent" class="lg:w-6 lg:h-6" />
      <h4 class="text-sm md:text-base">{{ contactDetail.socialMediaName }}</h4>
    </div>
  </a>
</template>
<style>
.contact-details-card {
  @apply min-w-32 w-full rounded-md aspect-video grid place-items-center shadow-sm bg-white/30 dark:bg-gray-800/30 font-ubuntu-mono;
}

.contact-details-card:hover {
  background-color: v-bind(props.contactDetail.hoverColor);
  @apply transition-[background-color] duration-1000;
}
</style>
