<script setup>
import Hero from "../components/HeroHome.vue";
import AboutCard from "../components/AboutCard.vue";
import CardDestinasi from "@/components/CardDestinasi.vue";
import Button from "@/components/Button.vue";
import { destinations } from "@/data/destinations.js";

const popularDestinations = destinations.slice(0, 3);
</script>

<template>
  <Hero />
  <h2
    class="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-gray-800 mb-6 text-center mt-10 px-4 sm:px-0"
  >
    Selamat Datang di <span class="text-primary">Balikpapan</span>
  </h2>
  <p
    class="max-w-2xl mx-auto text-gray-600 mb-6 text-center pb-12 px-4 sm:px-6 lg:px-0 text-sm sm:text-base"
  >
    Balikpapan adalah kota minyak yang terletak di pesisir timur Kalimantan,
    menawarkan kombinasi sempurna antara modernitas dan keindahan alam. Dari
    pantai-pantai eksotis hingga wisata alam yang masih asri, Balikpapan siap
    memukau anda dengan pesona wisatanya yang beragam.
  </p>
  <AboutCard />
  <h2
    class="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-gray-800 mb-6 text-center mt-10 px-4 sm:px-0"
  >
    <span class="text-primary">Destinasi Populer</span>
  </h2>
  <CardDestinasi :destinations="popularDestinations" />
  <div class="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
    <RouterLink to="/destinasi">
      <Button content="Lihat Semua Destinasi" variant="primary" />
    </RouterLink>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
