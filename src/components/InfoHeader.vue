<script setup>
import HeadBorder from "@/components/HeadBorder.vue";
</script>
<template>
  <h3
    class="uppercase lg:text-3xl text-2xl font-[500] text-gray-100 flex flex-col items-start gap-3"
  >
    <slot></slot>
    <HeadBorder />
  </h3>
</template>
