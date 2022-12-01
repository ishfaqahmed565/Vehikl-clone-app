<script setup>
import DynImg from "@/components/DynImg.vue";
defineProps({ dataSet: Array });
</script>
<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
    <div
      class="bg-white hover:bg-gray-900/[.70] border border-gray-300 gap-2 w-[150px] sm:w-[200px] py-2 px-2 flex sm:flex-col items-center sm:items-start"
      v-for="data in dataSet"
      :key="data.img"
    >
      <DynImg :imgSrc="data.img" class="w-[45px]" />
      <div
        class="text-black md:font-semibold sm:font-medium text-xs sm:text-sm pl-[3%]"
      >
        {{ data.name }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
