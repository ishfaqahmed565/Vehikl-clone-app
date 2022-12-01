<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import MembersSlide from "@/components/MembersSlide.vue";
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
    :fade="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper mt-20"
  >
    <swiper-slide
      ><div
        class="p grid lg:grid-cols-2 gap-5 text-white justify-items-center text-center"
      >
        <div class="max-w-[250px] sm:max-w-[320px] relative">
          <div
            class="bg-gradient-to-b from-[#8B0305] via-[#8B0305]/[.2] to-[#8B0305]/[.000000000000001] w-[12rem] h-[15rem] absolute z-10 top-[-30px] left-[-30px]"
          ></div>
          <img
            src="@/assets/ceo.png"
            alt=""
            class="object-cover relative z-50"
          />
        </div>
        <div
          class="flex flex-col gap-4 uppercase text-gray-200 text-start font-semibold text-sm sm:text-base"
        >
          <div class="quote">
            With an agile methodology, the team has produced more work with each
            sprint thanks to their efforts. The group is committed to keeping
            the communication strategy consistent. They have demonstrated that
            they are reliable and gifted, which makes US a fruitful cooperation.
          </div>
          <div
            class="details flex bg-[#8B0305] flex-col px-10 py-3 text-center lg:text-start"
          >
            <span>Md Mostafizur rahman</span> <span> Founder & CEO</span>
          </div>
        </div>
      </div></swiper-slide
    >

    <swiper-slide>
      <MembersSlide />
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
  padding-top: 4rem;
  padding-bottom: 4rem;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
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
