<script setup>
import CenterDes from "@/components/CenterDes.vue";
import CommunityGrid from "@/components/CommunityGrid.vue";
</script>
<template>
  <CenterDes>
    <template v-slot:header>Community</template>
    <template v-slot:paragraph>
      We love open source and actively contribute to the community. We believe
      active participation in the design and development communities makes
      everybody better.</template
    >
    <CommunityGrid />
  </CenterDes>
</template>
<style scoped></style>
