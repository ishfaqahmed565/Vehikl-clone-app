<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import ContSec from "@/components/ContSec.vue";
import ProductSlide from "@/components/ProductSlide.vue";
import InfoHeader from "@/components/ProductSlide.vue";
import HeadBorder from "@/components/HeadBorder.vue";
</script>
<template>
  <div>
    <img src="@/assets/polygon.png" alt="" class="max-w-[80px] mx-auto" />
    <SectionContainer class="bg-none pt-5 lg:pt-5"
      ><ProductSlide />
    </SectionContainer>
  </div>
</template>
