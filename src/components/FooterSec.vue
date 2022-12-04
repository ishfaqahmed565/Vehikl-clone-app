<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
</script>
<template>
  <SectionContainer class="py-[2rem] lg:py-[5rem] background relative">
    <img
      src="@/assets/footerbg_1.png"
      alt=""
      class="absolute z-10 w-[19rem] left-10 top-20 opacity-10 lg:opacity-20"
    />
    <div class="flex flex-col items-center gap-10 lg:gap-5">
      <a
        aria-current="page"
        class="focus:ring mx-auto"
        aria-label="Home"
        href="/"
      >
        <img src="@/assets/logo.png" alt="" />
      </a>
      <div class="grid lg:grid-cols-4 gap-10 items-center z-50 px-0">
        <div class="lg:col-span-3 space-y-5">
          <h3 class="text-white font-xl uppercase text-center lg:text-start">
            About Us
          </h3>
          <p class="paragraphStyle text-white paragraphFont">
            Founded in 2018, Sigma Solutions is a software development company
            that excels in the area of computer vision, machine learning (ML),
            artificial intelligence (AI) and deep learning (DL). We are
            implementing excellence in business organizations by introducing
            cutting edge technologies utilizing ML, AI, and DL. We are a team of
            passionate individuals with the goal of adding value to
            organizations in order to create a world of predictive & forecasting
            analysis. Our core focus is to provide products and services of the
            highest quality at a competitive price that attains highest possible
            customer satisfaction.
          </p>
        </div>
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-white font-xl uppercase">Contact Us</h3>
          <p class="paragraphStyle text-white paragraphFont">+8801817181215</p>
          <p class="paragraphStyle text-white paragraphFont">
            sigmasolutions.com.bd
          </p>
          <div
            class="text-xl bg-[#011D39] py-1 px-2 space-x-3 text-gray-400 mt-2"
          >
            <i class="fa-brands fa-square-facebook hover:text-gray-200"></i>
            <i class="fa-brands fa-linkedin hover:text-gray-200"></i>
            <i class="fa-brands fa-square-twitter hover:text-gray-200"></i>
            <i class="fa-brands fa-square-whatsapp hover:text-gray-200"></i>
          </div>
        </div>
      </div>
      <div class="flex gap-5 mt-10">
        <h3 class="text-white font-xl uppercase text-center lg:text-start">
          Privacy Policy
        </h3>
        <h3 class="text-white font-xl uppercase text-center lg:text-start">
          Terms and Conditions
        </h3>
      </div>
    </div>
    <img
      src="@/assets/footerbg_2.png"
      alt=""
      class="absolute z-10 w-[19rem] right-0 top-20 opacity-10 lg:opacity-20"
    />
  </SectionContainer>
</template>
<style scoped>
.background {
  background: #090e1c;
}
.paragraphFont {
  font-weight: 300;
}
</style>
