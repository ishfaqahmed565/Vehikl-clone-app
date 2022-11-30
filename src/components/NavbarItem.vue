<script setup>
import ModalItem from "@/components/ModalItem.vue";
import LogoItem from "@/components/LogoItem.vue";

import { ref } from "vue";
let showClose = ref(false);
</script>
<template>
  <div
    class="bg-black border-b-[2px] border-gray-800 shadow-xl text-gray-200 padding-x sticky"
  >
    <nav class="max-w-6xl h-20 container mx-auto flex items-center">
      <div class="left mr-auto">
        <LogoItem />
      </div>
      <div class="right">
        <ul class="hidden md:flex space-x-7 text-sm font-bold items-center">
          <li>
            <a href="#" class="font-semibold text-brand uppercase">Home</a>
            <hr
              class="border-t-[3px] mt-[-3px] border-brand rounded-lg relative top-[32px]"
            />
          </li>
          <li>
            <a href="#" class="uppercase">How we work</a>
          </li>
          <li>
            <a href="#" class="uppercase">Team</a>
          </li>
          <li>
            <a href="#" class="uppercase">We're hiring</a>
          </li>
          <li>
            <a
              class="uppercase flex items-center gray-border px-3 py-2 hover:border hover:border-brand"
              >Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-4 h-4 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <div class="relative lg:hidden">
          <button
            class="relative z-50 lg:hidden border rounded border-gray-800 p-1"
          >
            <svg
              @click="showClose = true"
              v-show="!showClose"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-7 text-gray-400 fill-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              @click="showClose = false"
              v-show="showClose"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-7 text-gray-400 fill-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ModalItem :show="showClose" @close="show = false"> </ModalItem>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
