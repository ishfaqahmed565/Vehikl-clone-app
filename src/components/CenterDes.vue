<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import HeadBorder from "@/components/HeadBorder.vue";
import InfoHeader from "@/components/InfoHeader.vue";
import { ref } from "vue";
let showClose = ref(false);
defineProps({
  extraStyle: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <SectionContainer :class="extraStyle">
    <div
      class="text-center max-w-[100ch] mx-auto flex items-center flex-col space-y-4"
    >
      <InfoHeader>
        <slot name="header"></slot>
      </InfoHeader>

      <p class="text-xl lg:text-2xl">
        <slot name="paragraph"></slot>
      </p>
    </div>
    <slot class="mx-auto"> </slot>
  </SectionContainer>
  <!--CenterDescription ends here-->
</template>
<style scoped></style>
