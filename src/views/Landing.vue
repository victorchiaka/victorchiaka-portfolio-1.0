<script setup lang="ts">
import { MdFileDownload } from "@kalimahapps/vue-icons";
import { ref, onMounted } from "vue";

const texts = [
  "Hello, I'm Victor Chiaka",
  "I craft enterprise websites & apps.",
  "I build fast & scalable backend services.",
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
    displayText.value.length + (isDeleting.value ? -1 : 1)
  );

  setTimeout(type, isDeleting.value ? deleteSpeed : typeSpeed.value);
};

onMounted(() => {
  setTimeout(() => {
    trigger();
    type();
  }, 1500);
});
</script>
<template>
  <section id="about" class="about">
    <div class="about-me">
      <img
        src="/images/chiaka-logo.svg"
        id="main-logo"
        alt="Victor Chiaka's logo"
        class="about-me-image"
      />
      <div class="about-content text-center lg:text-left">
        <h2
          class="h-[1.5rem] text-sm md:text-base font-bold dark:text-blue-green text-navy-blue uppercase md:-mb-2 md:ml-0.5 font-ubuntu-mono opacity-0 animate-slide-in-right"
        >
          {{ displayText }}
          <span :class="isBlinking ? 'animate-blink' : ''">|</span>
        </h2>
        <h1
          class="text-[clamp(20px,4vh,75px)] font-bold mb-2 dark:text-white opacity-0 animate-slide-in-bottom"
        >
          FullStack Software Engineer
        </h1>
        <p class="font-asap text-sm opacity-0 animate-slide-in-bottom">
          A Solid FullStack Software Engineer that specializes in crafting
          high-performance apps, scalable, systems & enterprise backend services. I
          transform ideas into efficient digital solutions. Let’s collaborate!!!.
        </p>
        <a
          class="download-resume group opacity-0 animate-slide-in-bottom"
          href="/victor-resume.pdf"
          download
        >
          <MdFileDownload class="group-hover:animate-bounce" /> My resume
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.about {
  @apply min-h-dvh flex items-center justify-center p-2 md:w-[90%] mx-auto;
}

.about-me {
  @apply gap-5 flex flex-col md:flex-row items-center lg:gap-x-14 relative z-[1];

  &-content {
    @apply flex flex-col gap-y-0.5 w-full md:w-[55%];
  }

  .download-resume {
    @apply w-fit px-4 py-2 border rounded-md shadow-sm dark:border-white/20 dark:text-gray-200;
    @apply inline-flex items-center gap-x-2 mt-4 border-navy-blue/50 bg-transparent dark:hover:border-white/50;
    @apply hover:bg-white/80 backdrop-blur-md border-white/90 transition-colors dark:hover:text-white;
    @apply hover:px-6 font-bold text-gray-700 hover:text-gray-900 font-asap dark:hover:bg-blue-green/50;
    transition: padding 0.2s ease-in;

    :deep(svg) {
      animation-duration: 0.35s;
    }
  }

  &-image {
    @apply w-[14rem] h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] mb-5 animate-grow;
  }
}
</style>
