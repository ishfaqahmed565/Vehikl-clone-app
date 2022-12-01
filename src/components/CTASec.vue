<script setup>
import CenterDes from "@/components/CenterDes.vue";
import ButtonItem from "@/components/ButtonItem.vue";
</script>
<template>
  <CenterDes class="bg-none pb-0 lg:pb-0">
    <template v-slot:header
      ><span class="text-brand"
        >Get Started With US <br />
        Follow A Simple Process!</span
      ></template
    >
    <template v-slot:paragraph>
      <span class="text-black"
        >The Process of connecting with us is easy. All you need to do is assess
        your needs, identify the tasks which you wish to delegate, and we can
        get started,</span
      >
    </template>
    <div class="flex flex-col items-center gap-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-20 mt-20">
        <div class="flex flex-col items-center gap-1">
          <img src="@/assets/step_4.png" alt="" class="w-[50px]" />
          <span class="text-sm text-black font-[500]">Step 1</span>
          <span class="text-[15px] text-black font-[500] text-center"
            >Make an Inquiry</span
          >
        </div>
        <div class="flex flex-col items-center gap-1">
          <img src="@/assets/step_3.png" alt="" class="w-[50px]" />
          <span class="text-sm text-black font-[500]">Step 2</span>
          <span class="text-[15px] text-black font-[500] text-center"
            >Take it ahead with manager</span
          >
        </div>
        <div class="flex flex-col items-center gap-1">
          <img src="@/assets/step_2.png" alt="" class="w-[50px]" />
          <span class="text-sm text-black font-[500]">Step 3</span>
          <span class="text-[15px] text-black font-[500] text-center"
            >Meet your virtual team</span
          >
        </div>
        <div class="flex flex-col items-center gap-1">
          <img src="@/assets/step_1.png" alt="" class="w-[50px]" />
          <span class="text-sm text-black font-[500]">Step 4</span>
          <span class="text-[15px] text-black font-[500] text-center"
            >Get Started</span
          >
        </div>
      </div>
      <ButtonItem>Let's Talk</ButtonItem>
    </div>
  </CenterDes>
</template>
<style scoped></style>
