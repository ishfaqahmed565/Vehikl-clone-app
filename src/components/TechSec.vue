<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import InfoHeader from "@/components/InfoHeader.vue";
import CommonGrid from "@/components/CommonGrid.vue";
import { ref } from "vue";

let techs = [
  {
    name: "Laravel",
    img: "laravel",
    filters: ["web", "backend"],
  },
  {
    name: "Node.js",
    img: "nodejs",
    filters: ["web", "backend"],
  },
  {
    name: "Python",
    img: "python",
    filters: ["web", "backend"],
  },
  {
    name: "Java",
    img: "java",
    filters: ["web", "backend"],
  },
  {
    name: "php",
    img: "php",
    filters: ["web", "backend"],
  },
  {
    name: "React",
    img: "react",
    filters: ["web", "mobile"],
  },
  {
    name: "Figma",
    img: "figma",
    filters: ["design"],
  },
  {
    name: "Photoshop",
    img: "photoshop",
    filters: ["design"],
  },
  {
    name: "Microsoft.net",
    img: "net",
    filters: ["backend"],
  },
  {
    name: "Mysql",
    img: "mysql",
    filters: ["backend"],
  },
];
let filter = ref("top");
let filteredTechArray = ref([...techs]);
function filteredTech() {
  if (filter.value === "web") {
    filteredTechArray.value = techs.filter((tech) => {
      if (
        tech.filters.some((filter) => {
          return filter === "web";
        })
      ) {
        return true;
      }
    });
    return filteredTechArray;
  } else if (filter.value === "backend") {
    filteredTechArray.value = techs.filter((tech) => {
      if (
        tech.filters.some((filter) => {
          return filter === "backend";
        })
      ) {
        return true;
      }
    });
    return filteredTechArray;
  } else if (filter.value === "top") {
    filteredTechArray.value = [...techs];
    return filteredTechArray;
  }
}
</script>
<template>
  <SectionContainer class="bg-none pt-5 lg:pt-5">
    <div class="bg-[#f4f4f4] flex flex-col items-center px-2 p-5 gap-10">
      <InfoHeader class="text-[#DA212A]">TECH WE LOVE</InfoHeader>
      <div class="flex gap-2 self-start">
        <button
          class="px-4 py-1 bg-white text-black rounded border border-gray-400 font-semibold"
          :class="{ active: filter === 'top' }"
          @click="
            function filterFunction() {
              filter = 'top';
              filteredTech();
            }
          "
        >
          Top
        </button>
        <button
          class="px-4 py-1 bg-white text-black rounded border border-gray-400 rounded font-semibold"
          :class="{ active: filter === 'web' }"
          @click="
            function filterFunction() {
              filter = 'web';
              filteredTech();
            }
          "
        >
          Web
        </button>
        <button
          class="px-4 py-1 bg-white text-black rounded border border-gray-400 font-semibold"
          :class="{ active: filter === 'backend' }"
          @click="
            function filterFunction() {
              filter = 'backend';
              filteredTech();
            }
          "
        >
          Back-End
        </button>
      </div>
      <Transition
        enter-from-class=" opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition duration-1000"
        leave-active-class="transition duration-100"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0"
      >
        <CommonGrid v-if="filter === 'top'" :dataSet="filteredTechArray" />
      </Transition>
      <Transition
        enter-from-class=" opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition duration-1000"
        leave-active-class="transition duration-100"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0"
      >
        <CommonGrid v-if="filter === 'web'" :dataSet="filteredTechArray" />
      </Transition>
      <Transition
        enter-from-class=" opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition duration-1000"
        leave-active-class="transition duration-100"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0"
      >
        <CommonGrid v-if="filter === 'backend'" :dataSet="filteredTechArray" />
      </Transition>
    </div>
  </SectionContainer>
</template>
<style scoped>
.active {
  background: black;
  color: white;
}
</style>
