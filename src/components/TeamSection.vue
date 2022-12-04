<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import ContSec from "@/components/ContSec.vue";
import TeamSlide from "@/components/TeamSlide.vue";
</script>
<template>
  <div class="flex flex-col">
    <img src="@/assets/ribbon.png" alt="" class="max-w-[350px] self-end" />
    <div class="bg-brand2 md:px-[2rem]">
      <TeamSlide />
    </div>
    <img
      src="@/assets/ribbon.png"
      alt=""
      class="max-w-[350px] self-start rotate-180"
    />
  </div>
</template>
