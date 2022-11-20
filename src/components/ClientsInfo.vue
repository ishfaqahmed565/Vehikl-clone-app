<script setup>
import CenterDes from "@/components/CenterDes.vue";
import ClientsGrid from "@/components/ClientsGrid.vue";
</script>
<template>
  <CenterDes>
    <template v-slot:header>Our Clients</template>
    <template v-slot:paragraph>
      We've worked with customers of every size: from startup to enterprise, and
      everything in between. Here are a few of the exciting projects we've been
      working on recently.</template
    >
    <ClientsGrid />
  </CenterDes>
</template>
<style scoped></style>
