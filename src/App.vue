<script setup>
import NavbarItem from "./components/NavbarItem.vue";
import HeroSec from "./components/HeroSec.vue";
import BusinessInfo from "./components/BusinessInfo.vue";
import ClientsInfo from "./components/ClientsInfo.vue";
import CommunityInfo from "./components/CommunityInfo.vue";
import AdvisorsInfo from "./components/AdvisorsInfo.vue";
import MeetupsInfo from "./components/MeetupsInfo.vue";
import CTASec from "./components/CTASec.vue";
import FooterSec from "./components/FooterSec.vue";
import TechSec from "./components/TechSec.vue";
import SolutionsSec from "./components/SolutionsSec.vue";
import ContactSec from "./components/ContactSec.vue";
import ProductSec from "./components/ProductSec.vue";
import TeamSection from "./components/TeamSection.vue";
</script>

<template>
  <NavbarItem />
  <HeroSec id="home" />
  <BusinessInfo id="services" />
  <TeamSection />
  <TechSec />
  <SolutionsSec id="solutions" />
  <CTASec />

  <ClientsInfo id="clients" />
  <ContactSec id="contact" />
  <ProductSec id="products" />
  <FooterSec />
</template>

<style scoped></style>
