<script setup>
import CenterDes from "@/components/CenterDes.vue";
import ButtonItem from "@/components/ButtonItem.vue";
</script>
<template>
  <CenterDes class="bg-gradient-t from-brand2 to-brand2">
    <template #header> GET IN TOUCH </template>
    <div class="grid md:grid-cols-2 mt-10 gap-14">
      <div class="grid gap-5 items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7297.60469651424!2d90.39126262427568!3d23.86115134998896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c421ac592bfb%3A0xde477590450889e!2sSigma%20Solutions!5e0!3m2!1sen!2sbd!4v1669876831252!5m2!1sen!2sbd"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="w-full h-[390px] rounded"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="flex bg-[#8D99AE] py-2 gap-4 px-5 items-center rounded">
          <div class="w-[50px]">
            <img src="@/assets/Vector.png" alt="" class="object-cover" />
          </div>
          <p class="uppercase text-sm font-thin text-white">
            7th Floor, House 01 (Dhaka Square), Road 13 (Jasimuddin Road),
            Sector 01, Uttara, Dhaka-1230, Bangladesh
          </p>
        </div>
      </div>
      <form
        action=""
        class="grid gap-5 bg-[#8D99AE] py-7 px-8 rounded text-white"
      >
        <div class="grid gap-2">
          <label for="username" class="text-sm uppercase"
            >Enter your name</label
          >
          <input
            type="text"
            id="username "
            class="text-base text-black p-4 h-[2.7rem] rounded border shadow-sm bg-white placeholder:text-gray-300 border-none focus:ring focus:outline-none transition-all block w-full resize-none"
          />
        </div>
        <div class="grid gap-2">
          <label for="username" class="text-sm uppercase"
            >Enter your Email</label
          >
          <input
            type="text"
            id="username "
            class="text-base text-black h-[2.7rem] p-4 rounded border shadow-sm bg-white placeholder:text-gray-300 border-none focus:ring focus:outline-none transition-all block w-full resize-none"
          />
        </div>
        <div class="grid gap-2">
          <label for="username" class="text-sm uppercase">Message</label>
          <input
            type="text"
            id="username "
            class="h-[8rem] text-base text-black p-4 rounded border shadow-sm bg-white placeholder:text-gray-300 border-none focus:ring focus:outline-none transition-all block w-full resize-none"
          />
        </div>
        <ButtonItem class="h-[3rem] w-full text-center rounded-md"
          >Submit</ButtonItem
        >
      </form>
    </div>
  </CenterDes>
</template>
