<script setup>
import CenterDes from "@/components/CenterDes.vue";
import AppCard from "@/components/AppCard.vue";
import LeadershipCard from "@/components/LeadershipCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import InfoCard from "@/components/InfoCard.vue";
import ContSec from "@/components/ContSec.vue";
import InfoHeader from "@/components/InfoHeader.vue";
import TeamSection from "@/components/TeamSection.vue";
</script>
<template>
  <div>
    <div class="bg-none pb-10">
      <ContSec>
        <div class="grid lg:grid-cols-3 gap-4 lg:gap-8 pt-10">
          <div
            class="flex flex-col p-5 border border-gray-300 items-center justify-between shadow-xl hover:bg-white"
          >
            <div class="lg:max-w-[290px] max-w-[200px] z-[1]">
              <img src="@/assets/growth.png" alt="" class="object-fit" />
            </div>
            <div class="info flex flex-col items-center lg:items-start gap-2">
              <div class="flex flex-row items-center">
                <svg class="h-[2px] w-[40px]">
                  <line
                    x1="0"
                    y1="0"
                    x2="25"
                    y2="0"
                    style="stroke: rgba(73, 120, 140, 1); stroke-width: 4"
                  />
                </svg>
                <h2 class="text-brand uppercase text-xl font-bold">
                  business growth
                </h2>
              </div>
              <p class="paragraphStyle text-center lg:text-start">
                We maintain our global business standards according to our
                tried-and-true business methodology.
              </p>
            </div>
          </div>
          <div
            class="flex flex-col p-5 border border-gray-300 items-center justify-between shadow-xl hover:bg-white"
          >
            <div class="lg:max-w-[290px] max-w-[200px] z-[1]">
              <img src="@/assets/mission.png" alt="" class="object-fit" />
            </div>
            <div class="info flex flex-col items-center lg:items-start gap-2">
              <div class="flex flex-row items-center">
                <svg class="h-[2px] w-[40px]">
                  <line
                    x1="0"
                    y1="0"
                    x2="25"
                    y2="0"
                    style="stroke: rgba(73, 120, 140, 1); stroke-width: 4"
                  />
                </svg>
                <h2 class="text-brand uppercase text-xl font-bold">
                  MISSION, VISION & VALUE
                </h2>
              </div>
              <p class="paragraphStyle text-center lg:text-start">
                Our mission, vision and values are the core foundation of our
                success and commitment to excellence.
              </p>
            </div>
          </div>
          <div
            class="flex flex-col p-5 border border-gray-300 items-center justify-between shadow-xl hover:bg-white"
          >
            <div class="lg:max-w-[290px] max-w-[200px] z-[1]">
              <img src="@/assets/services.png" alt="" class="object-fit" />
            </div>
            <div class="info flex flex-col items-center lg:items-start gap-2">
              <div class="flex flex-row items-center">
                <svg class="h-[2px] w-[40px]">
                  <line
                    x1="0"
                    y1="0"
                    x2="25"
                    y2="0"
                    style="stroke: rgba(73, 120, 140, 1); stroke-width: 4"
                  />
                </svg>
                <h2 class="text-brand uppercase text-xl font-bold">
                  OUR Services
                </h2>
              </div>
              <p class="paragraphStyle text-center lg:text-start">
                Simplified hiring solutions for your everyday business needs.
                Including virtual assistants.
              </p>
            </div>
          </div>
        </div>
      </ContSec>
    </div>
    <CenterDes class="bg-none">
      <template v-slot:header>What we do best </template>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-20">
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_1.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              App Development
            </h3>
          </div>
          <p class="paragraphStyle">
            Utilizing cutting-edge technologies, like as React, React Native,
            Flutter, and others, to make your products scalable and ready for
            the future.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_2.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">ML & AI</h3>
          </div>
          <p class="paragraphStyle">
            In a world full of uncertainties and unexpecting waves, we offers
            comprehensive AI services that help companies build intelligent
            workflows, drastically boost productivity, and reduce costs.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_3.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              E-commerce
            </h3>
          </div>
          <p class="paragraphStyle">
            We have the knowledge and tools to support your company's marketing
            initiatives, including e-commerce options that let you market and
            sell your goods and services online.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_4.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              Cloud Solution
            </h3>
          </div>
          <p class="paragraphStyle">
            Our applications are cutting-edge secure, accessible from any device
            (PC, tablet, or mobile), simple to use, attractive, and scalable
            rich enterprise applications (REA) in an online cloud environment.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_5.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              Banking Solution
            </h3>
          </div>
          <p class="paragraphStyle">
            By embracing the latest technologies, we build customized banking
            solutions and dedicated software to leverage your unique banking &
            financial business needs.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_6.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              Digital Content
            </h3>
          </div>
          <p class="paragraphStyle">
            Our service makes it possible to incorporate content into your
            business operations and offers features for unstructured data
            collection, document management, process automation, and workflows.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_7.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              API DEVELOPMENT
            </h3>
          </div>
          <p class="paragraphStyle">
            APIs are carefully developed to guarantee maximum profit and
            continuous availability for your apps and features.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_8.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              Maintenance & Upgrades
            </h3>
          </div>
          <p class="paragraphStyle">
            Even after the product is finished, we continue to provide
            assistance.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 items-center text-center md:text-start md:items-start"
        >
          <div class="header flex gap-4 items-center">
            <img src="@/assets/App_9.png" alt="" class="w-[45px]" />
            <h3 class="text-lg font-semibold uppercase text-black">
              project management
            </h3>
          </div>
          <p class="paragraphStyle">
            You can rely on us to steer your project in the right direction and
            get the greatest results from start to finish.
          </p>
        </div>
      </div>
    </CenterDes>
  </div>
</template>
<style scoped>
.bg-none {
  background: none;
}
</style>
