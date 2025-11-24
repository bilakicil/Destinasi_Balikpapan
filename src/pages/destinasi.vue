<script setup>
import CardDestinasi from "@/components/CardDestinasi.vue";
</script>

<template>
  <h2
    class="text-3xl font-heading font-bold text-primary mb-6 text-center pt-28"
  >
    Destinasi Wisata Alam
  </h2>
  <p class="max-w-2xl mx-auto text-gray-600 mb-6 text-center">
    Jelajahi berbagai destinasi wisata alam menarik dan asri di Balikpapan. Klik
    pada destinasi ini untuk melihat informasi lebih detail
  </p>
  <h2 />
  <CardDestinasi kategori="Wisata Alam" />
  
  <h2
    class="text-3xl font-heading font-bold text-primary mb-6 text-center pt-2"
  >
    Destinasi Pantai
  </h2>
  <p class="max-w-2xl mx-auto text-gray-600 mb-6 text-center">
    Jelajahi berbagai destinasi pantai menarik dan asri di Balikpapan. Klik pada
    destinasi ini untuk melihat informasi lebih detail
  </p>
  <h2 />
  <CardDestinasi kategori="Pantai" />

  <h2
    class="text-3xl font-heading font-bold text-primary mb-6 text-center pt-2"
  >
    Destinasi Kuliner
  </h2>
  <p class="max-w-2xl mx-auto text-gray-600 mb-6 text-center">
    Jelajahi berbagai destinasi pantai menarik dan asri di Balikpapan. Klik pada
    destinasi ini untuk melihat informasi lebih detail
  </p>
  <h2 />
  <CardDestinasi kategori="Kuliner" />
</template>
