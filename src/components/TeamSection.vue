<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import TeamSlide from "@/components/TeamSlide.vue";
</script>
<template>
  <div class="flex flex-col">
    <img src="@/assets/ribbon.png" alt="" class="w-[300px] self-end" />
    <SectionContainer class="py-0 lg:pt-0 lg:pb-0 from-brand2 to-brand2">
      <TeamSlide />
    </SectionContainer>
    <img
      src="@/assets/ribbon.png"
      alt=""
      class="w-[300px] self-start rotate-180"
    />
  </div>
</template>
