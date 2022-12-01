<script setup>
import ButtonItem from "@/components/ButtonItem.vue";
import ContSec from "@/components/ContSec.vue";
</script>
<template>
  <div
    class="flex items-center max-h-[90vh] overflow-y-hidden relative overflow-x-clip"
  >
    <img
      src="@/assets/candid-9.png"
      alt=""
      class="w-full object-cover min-h-[90vh]"
    />
    <div class="absolute w-full grid items-center justify-center h-full">
      <ContSec>
        <div
          class="relative lg:static z-50 lg:grid lg:grid-cols-2 items-center justify-center"
        >
          <div class="description text-center lg:text-start grid gap-8">
            <h1
              class="text-black text-2xl lg:text-3xl uppercase leading-8 lg:leading-10 font-semibold"
            >
              SIGMA SOLUTIONS <br />
              <span class="text-brand text-3xl lg:text-4xl"
                >Implementing excellence</span
              ><br />
              Innovative Concept
            </h1>
            <p class="paragraphStyle text-black">
              Sigma Solutions is a research and software develop firm that work
              on overcoming most critical challenges and identified problems in
              Bangladesh. Team work is our main strength. Our confronting
              approach of problem solving helped us overcome all the critical
              hurdles. Sigma Solutions is specialized in Natural Language
              Processing (NLP), Machine Learning (ML), Artificial Intelligence
              (AI) and GSM & Telecom solutions.
            </p>
            <ButtonItem class="mx-auto lg:mx-0">Work with us</ButtonItem>
          </div>
          <div
            class="w-[400px] md:w-[450px] lg:w-[500px] absolute z-10 opacity-[.5] position lg:static lg:mx-auto lg:opacity-60 ml-3"
          >
            <img
              src="@/assets/hero.png"
              alt=""
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </ContSec>
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 1024px) {
  .position {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
