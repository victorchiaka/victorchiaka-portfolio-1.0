<script setup lang="ts">
type WorkCard = {
  src: string;
  position: string;
  alt?: string;
}

interface WorkCardProps {
  workCard: WorkCard;
}

defineProps<WorkCardProps>();
</script>
<template>
  <div class="w-full h-full">
    <img :src="workCard.src" :alt="workCard.alt" class="w-[90%] h-[90%] object-cover mx-auto rounded-md">
  </div>
</template>
