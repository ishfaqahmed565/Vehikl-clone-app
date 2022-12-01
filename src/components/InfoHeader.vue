<script setup>
import HeadBorder from "@/components/HeadBorder.vue";
</script>
<template>
  <h3
    class="uppercase lg:text-4xl text-3xl flex flex-col items-start gap-3 text-brand font-semibold"
  >
    <slot></slot>
    <HeadBorder />
  </h3>
</template>
