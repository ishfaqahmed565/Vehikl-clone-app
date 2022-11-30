<script setup>
import CenterDes from "@/components/CenterDes.vue";
import ClientsGrid from "@/components/ClientsGrid.vue";
</script>
<template>
  <CenterDes class="bg-none">
    <template v-slot:header
      ><span class="text-black">Our Clients</span></template
    >

    <ClientsGrid />
  </CenterDes>
</template>
<style scoped></style>
