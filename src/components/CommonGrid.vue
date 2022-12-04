<script setup>
import DynImg from "@/components/DynImg.vue";
let props = defineProps({
  dataSet: Array,
  switch: { type: Boolean, default: false },
});
</script>
<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full">
    <div
      class="bg-white border border-gray-300 gap-2 w-full py-2 px-2 flex sm:flex-col items-center sm:items-start"
      v-for="data in dataSet"
      :class="{
        'hover:bg-gray-700/[.50] bg-[#22232F] border-gray-900': props.switch,
      }"
      :key="data.img"
    >
      <DynImg :imgSrc="data.img" class="w-[45px]" />
      <div
        class="text-black md:font-semibold sm:font-medium text-xs sm:text-sm pl-[3%]"
        :class="{
          'text-white': props.switch,
        }"
      >
        {{ data.name }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
