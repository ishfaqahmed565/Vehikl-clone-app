<script setup>
import ModalItem from "@/components/ModalItem.vue";

import { ref } from "vue";
let showClose = ref(false);
let nav = ref("home");
function navLink(navI) {
  showClose.value = false;
  nav.value = navI;
}
</script>
<template>
  <div
    class="bg-[#090E1C] border-b-[2px] border-gray-800 shadow-xl text-gray-200 padding-x sticky"
  >
    <nav class="max-w-6xl h-20 container mx-auto flex items-center">
      <div class="left mr-auto">
        <a
          aria-current="page"
          class="focus:ring mr-auto"
          aria-label="Home"
          href="/"
        >
          <img src="@/assets/logo.png" alt="" />
        </a>
      </div>
      <div class="right">
        <ul class="hidden md:flex space-x-7 text-sm font-bold items-center">
          <li :class="{ actveNavlink: nav === 'home' }">
            <a
              href="#home"
              class="font-semibold uppercase"
              @click="nav = 'home'"
              >Home</a
            >
            <hr
              class="border-t-[3px] mt-[-3px] border-brand rounded-lg relative top-[32px] hidden"
            />
          </li>
          <li :class="{ actveNavlink: nav === 'services' }">
            <a href="#services" class="uppercase" @click="nav = 'services'"
              >Services</a
            >
            <hr
              class="border-t-[3px] mt-[-3px] border-brand rounded-lg relative top-[32px] hidden"
            />
          </li>
          <li :class="{ actveNavlink: nav === 'solutions' }">
            <a href="#solutions" class="uppercase" @click="nav = 'solutions'"
              >Solutions</a
            >
            <hr
              class="border-t-[3px] mt-[-3px] border-brand rounded-lg relative top-[32px] hidden"
            />
          </li>
          <li :class="{ actveNavlink: nav === 'clients' }">
            <a href="#clients" class="uppercase" @click="nav = 'clients'"
              >Clients</a
            >
            <hr
              class="border-t-[3px] mt-[-3px] border-brand rounded-lg relative top-[32px] hidden"
            />
          </li>
          <li :class="{ actveNavlink: nav === 'products' }">
            <a href="#products" class="uppercase" @click="nav = 'products'"
              >Products</a
            >
            <hr
              class="border-t-[3px] mt-[-3px] border-brand rounded-lg relative top-[32px] hidden"
            />
          </li>
          <li :class="{ actveNavlink: nav === 'contact' }">
            <a
              class="uppercase flex items-center gray-border px-3 py-2 hover:border hover:border-brand"
              href="#contact"
              @click="nav = 'contact'"
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
        <div class="relative md:hidden">
          <button class="relative z-50 border rounded border-gray-800 p-1">
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
          <!--Responsive Navbar-->

          <Transition name="wrapper">
            <div
              v-if="showClose"
              class="modal-mask bg-black bg-opacity-100 opacity-[.9]"
              @close="show = false"
            >
              <SectionContainer class="background-none">
                <ul class="py-[4.5rem] grid gap-5">
                  <li
                    class="grid gap-5"
                    :class="{ actveNavlink: nav === 'home' }"
                  >
                    <a
                      href="#home"
                      class="text-2xl w-full pl-6"
                      @click="navLink('home')"
                      >Home</a
                    >
                    <hr class="border-t-[1.2px] border-gray-800" />
                  </li>
                  <li
                    class="grid gap-5"
                    :class="{ actveNavlink: nav === 'services' }"
                  >
                    <a
                      href="#services"
                      class="text-2xl w-full pl-6"
                      @click="navLink('services')"
                      >Services</a
                    >
                    <hr class="border-t-[1.2px] border-gray-800" />
                  </li>
                  <li
                    class="grid gap-5"
                    :class="{ actveNavlink: nav === 'solutions' }"
                  >
                    <a
                      href="#solutions"
                      class="text-2xl w-full pl-6"
                      @click="navLink('solutions')"
                      >Solutions</a
                    >

                    <hr class="border-t-[1.2px] border-gray-800" />
                  </li>
                  <li
                    class="grid gap-5"
                    :class="{ actveNavlink: nav === 'clients' }"
                  >
                    <a
                      href="#clients"
                      class="text-2xl w-full pl-6"
                      @click="navLink('clients')"
                      >Clients
                    </a>
                    <hr class="border-t-[1.2px] border-gray-800" />
                  </li>
                  <li
                    class="grid gap-5"
                    :class="{ actveNavlink: nav === 'Products' }"
                  >
                    <a
                      href="#products"
                      class="text-2xl w-full pl-6"
                      @click="navLink('products')"
                      >Products</a
                    >
                    <hr class="border-t-[1.2px] border-gray-800" />
                  </li>
                  <li
                    class="grid gap-5"
                    :class="{ actveNavlink: nav === 'contact' }"
                  >
                    <a
                      href="#contact"
                      class="text-2xl w-full pl-6"
                      @click="navLink('contact')"
                      >Contact</a
                    >
                  </li>
                </ul>
              </SectionContainer>
            </div>
          </Transition>
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
.actveNavlink {
  color: #da212a;
}
.actveNavlink > hr {
  display: block;
}
.actveNavlink > a {
  border-color: #da212a;
}
</style>
