<script setup>
import CenterDes from "@/components/CenterDes.vue";
import MeetupGrid from "@/components/MeetupGrid.vue";
</script>
<template>
  <CenterDes>
    <template v-slot:header>Meetups we host</template>
    <template v-slot:paragraph>
      Vehikl sponsors, attends, and participates in conferences both locally and
      around the world. We even host local meetups. Join us!</template
    >
    <MeetupGrid />
  </CenterDes>
</template>
<style scoped></style>
