<script setup>
import CenterDes from "@/components/CenterDes.vue";
import CommonGrid from "@/components/CommonGrid.vue";
let solutions = [
  {
    name: "eCommerce",
    img: "solution_1",
  },
  {
    name: "Tele Communication",
    img: "solution_2",
  },
  {
    name: "Automation",
    img: "solution_3",
  },
  {
    name: "Call Center",
    img: "solution_4",
  },
  {
    name: "Social Media",
    img: "solution_5",
  },
  {
    name: "E-invoice",
    img: "solution_6",
  },
  {
    name: "Marketing",
    img: "solution_7",
  },
  {
    name: "Banking and Accounting",
    img: "solution_8",
  },
  {
    name: "Compliance Solutions",
    img: "solution_9",
  },
  {
    name: "HealthCare",
    img: "solution_11",
  },
  {
    name: "Manufaturing",
    img: "solution_12",
  },
  {
    name: "App Development",
    img: "solution_3",
  },
];
</script>
<template>
  <CenterDes class="bg-gradient-to-t from-brand2 to-brand2">
    <template v-slot:header>Solutions</template>
    <template v-slot:paragraph>
      <span class="text-white"
        >With our specialized solutions, created just to propel them to the top,
        we assist in revolutionizing industries and transforming them
        digitally.</span
      ></template
    >
    <div class="flex flex-col items-center mt-12">
      <CommonGrid :dataSet="solutions" :switch="true" />
    </div>
  </CenterDes>
</template>
<style scoped></style>
