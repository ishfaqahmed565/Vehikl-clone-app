<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import MembersSlide from "@/components/MembersSlide.vue";
import ButtonItem from "@/components/ButtonItem.vue";
import InfoHeader from "@/components/InfoHeader.vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MembersSlide,
    ButtonItem,
    InfoHeader,
  },
  data() {
    return {
      members: [
        {
          name: "Shuvajit Das",
          role: "Sn. Soft. Engineer",
          img: "member_6",
        },
        {
          name: "Raihanul Islam Refat",
          role: "Soft. Engineer ",
          img: "member_2",
        },
        {
          name: "Ashiq Zaman",
          role: "Sn. Soft. Engineer",
          img: "member_3",
        },
        {
          name: "Mosharaf Hossan",
          role: "Soft. Engineer ",
          img: "member_4",
        },
      ],
    };
  },
  methods: {
    photo(src) {
      return `/src/assets/img/${src}`;
    },
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Pagination, Navigation],
    };
  },
  computed: {},
};
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :fade="true"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="grid md:grid-cols-3 gap-4 grid-rows-2 md:grid-rows-none">
        <div
          class="rounded flex flex-col gap-5 bg-gray-900 py-8 px-8 items-center justify-center"
        >
          <InfoHeader>Pixmama</InfoHeader>
          <ButtonItem class="text-center py-2 rounded-sm">Visit</ButtonItem>
        </div>
        <div
          class="rounded flex flex-col gap-5 bg-gray-900 py-10 px-10 items-center md:col-span-2"
        >
          <p class="paragraphStyle">
            Pixmama is the largest digital content platform to source and supply
            Images of Bangladesh. Here at Pixmama, we emphasize to reflect
            diversity of Bangladesh through its people, traditions, culture, and
            values associated with distinctive regional customs, habits,
            lifestyle, food & festivals in one single digital page.
          </p>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="grid md:grid-cols-3 gap-4 grid-rows-2 md:grid-rows-none">
        <div
          class="rounded flex flex-col gap-5 bg-gray-900 py-8 px-8 items-center justify-center"
        >
          <InfoHeader>Weecare</InfoHeader>
          <ButtonItem class="text-center py-2 rounded-sm">Visit</ButtonItem>
        </div>
        <div
          class="rounded flex flex-col gap-5 bg-gray-900 py-10 px-10 items-center md:col-span-2"
        >
          <p class="paragraphStyle">
            Weecare is a value-added service designed for the health industry.
            Hospital can sell this value-added service to the patients or their
            family. One of the common issues among patients is that they forget
            to take medicines on assigned schedules, especially senior patients.
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="grid md:grid-cols-3 gap-4 grid-rows-2 md:grid-rows-none">
        <div
          class="rounded flex flex-col gap-5 bg-gray-900 py-8 px-8 items-center justify-center"
        >
          <InfoHeader>Smartcomm</InfoHeader>
          <ButtonItem class="text-center py-2 rounded-sm">Visit</ButtonItem>
        </div>
        <div
          class="rounded flex flex-col gap-5 bg-gray-900 py-10 px-10 items-center md:col-span-2"
        >
          <p class="paragraphStyle">
            No more worrying about making calls to potential customers or
            responding to incoming calls from the existing customers. SMARTCOMM
            is capable of providing you with all the necessary and conventional
            call center services but in a smarter, more efficient and effective
            way.
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .secSlide2 {
    display: flex;
  }
}

.swiper-slide {
  text-align: center;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  padding: 5rem 5rem;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
