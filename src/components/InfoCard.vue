<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import HeadBorder from "@/components/HeadBorder.vue";
import { ref, watchEffect } from "vue";

const src = ref();
watchEffect(async () => {
  src.value = (
    await import(/* @vite-ignore */ `../assets/${props.imgSrc}.webp`)
  ).default;
});
let props = defineProps({
  imgSrc: String,
  order: String,
});
</script>

<template>
  <SectionContainer>
    <div class="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
      <div class="description flex flex-col items-start space-y-3">
        <h2 class="lg:text-3xl text-2xl font-bold text-gray-100">
          <slot name="header"></slot>
          <HeadBorder />
        </h2>

        <p class="paragraphStyle">
          <slot name="paragraph"></slot>
        </p>
      </div>
      <div class="img flex justify-center w-full" :class="order">
        <img :src="src" class="lg:w-full w-[240px] object-cover" alt="" />
      </div>
    </div>
  </SectionContainer>
</template>
<style scoped></style>
