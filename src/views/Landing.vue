<script setup lang="ts">
import { ref, onMounted } from "vue";
interface LandingProps {
  theme: string;
  toggleTheme: () => void;
}

const props = defineProps<LandingProps>();

const texts = [
  "I craft enterprise websites & apps.",
  "I build fast & scalable backend services.",
  "I deliver neatly, just as you vision.",
];
let currentTextIndex = 0;
let currentText: string;

const displayText = ref("");
const isDeleting = ref(false);
const isBlinking = ref(false);

const typeSpeed = ref(70);
const deleteSpeed = 50;
const pause = 2000;

const trigger = () => {
  if (currentTextIndex === texts.length) {
    currentTextIndex = 0;
  }

  currentText = texts[currentTextIndex];
  currentTextIndex++;
};

const type = () => {
  isBlinking.value = false;
  if (!isDeleting.value && displayText.value.length === currentText.length) {
    isBlinking.value = true;
    setTimeout(() => {
      isDeleting.value = true;
      isBlinking.value = false;
      type();
    }, pause);
    return;
  }

  if (isDeleting.value && displayText.value.length === 0) {
    isBlinking.value = true;
    setTimeout(() => {
      isDeleting.value = false;
      isBlinking.value = false;
      trigger();
      type();
    }, pause);
    return;
  }

  displayText.value = currentText.substring(
    0,
    displayText.value.length + (isDeleting.value ? -1 : 1),
  );

  setTimeout(type, isDeleting.value ? deleteSpeed : typeSpeed.value);
};

const scrollToWorks = () => {
  const myWorks = document.querySelector("#my-works");
  if (myWorks) {
    myWorks.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  setTimeout(() => {
    trigger();
    type();
  }, 1500);
});
</script>
<template>
  <section class="landing">
    <img
      id="main-logo"
      src="../assets/images/chiaka-logo.svg"
      alt="Victor Chiaka's logo"
      class="w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem] mb-5 animate-grow"
    />
    <div class="grid grid-rows-2 text-center gap-y-2">
      <h1 class="landing-header">FullStack Software Engineer</h1>
      <p class="text-sm font-ubuntu-mono opacity-0 animate-slide-in-right">
        {{ displayText }}
        <span :class="isBlinking ? 'animate-blink' : ''">|</span>
      </p>
      <div class="w-full grid place-items-center animate-appear opacity-0">
        <div class="flex justify-between items-center gap-x-2">
          <p
            class="text-xs font-ubuntu-mono font-bold cursor-pointer pb-1 w-fit shadow-thin-border-bottom"
            @click="scrollToWorks"
          >
            My works & more
          </p>
          <img src="../assets/images/arrow.svg" class="h-3 w-3" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.landing {
  @apply h-[100dvh] flex flex-col items-center justify-center md:flex-row md:gap-x-[4.3rem] 2xl:gap-[10rem] px-3 md:px-0;
}

.landing-header {
  @apply font-bold text-wrap font-comfortaa text-2xl lg:text-4xl xl:text-5xl opacity-0 animate-slide-in-bottom;
}
</style>
