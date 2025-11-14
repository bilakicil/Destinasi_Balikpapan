<script setup>
import Hero from "../components/HeroHome.vue";
import AboutCard from "../components/AboutCard.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <Hero />
  <h2
    class="text-3xl font-heading font-bold text-gray-800 mb-6 text-center mt-10"
  >
    Selamat Datang di <span class="text-primary">Balikpapan</span>
  </h2>
  <p class="max-w-2xl mx-auto text-gray-600 mb-6 text-center">
    Balikpapan adalah kota minyak yang terletak di pesisir timur Kalimantan,
    menawarkan kombinasi sempurna antara modernitas dan keindahan alam. Dari
    pantai-pantai eksotis hingga wisata alam yang masih asri, Balikpapan siap
    memukau anda dengan pesona wisatanya yang beragam.
  </p>
  <AboutCard />
  <Footer />
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
