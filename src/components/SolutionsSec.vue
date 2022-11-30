<script setup>
import CenterDes from "@/components/CenterDes.vue";
import CommonGrid from "@/components/CommonGrid.vue";
let solutions = [
  {
    name: "eCommerce",
    img: "solution_1.png",
  },
  {
    name: "Tele Communication",
    img: "solution_2.png",
  },
  {
    name: "Automation",
    img: "solution_3.png",
  },
  {
    name: "Call Center",
    img: "solution_4.png",
  },
  {
    name: "Social Media",
    img: "solution_5.png",
  },
  {
    name: "E-invoice",
    img: "solution_6.png",
  },
  {
    name: "Marketing",
    img: "solution_7.png",
  },
  {
    name: "Banking and Accounting",
    img: "solution_8.png",
  },
  {
    name: "Compliance Solutions",
    img: "solution_9.png",
  },
  {
    name: "HealthCare",
    img: "solution_11.png",
  },
  {
    name: "Manufaturing",
    img: "solution_12.png",
  },
  {
    name: "App Development",
    img: "solution_3.png",
  },
];
</script>
<template>
  <CenterDes>
    <template v-slot:header>Solutions</template>
    <template v-slot:paragraph>
      With our specialized solutions, created just to propel them to the top, we
      assist in revolutionizing industries and transforming them
      digitally.</template
    >
    <div class="flex flex-col items-center mt-12">
      <CommonGrid :dataSet="solutions" />
    </div>
  </CenterDes>
</template>
<style scoped></style>
