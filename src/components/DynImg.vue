<script setup>
import { ref, watchEffect } from "vue";

const src = ref();
let props = defineProps({
  imgSrc: String,
});
watchEffect(async () => {
  src.value = (
    await import(/* @vite-ignore */ `../assets/${props.imgSrc}.png`)
  ).default;
});
console.log(props);
</script>
<template>
  <img :src="src" alt="" />
</template>
