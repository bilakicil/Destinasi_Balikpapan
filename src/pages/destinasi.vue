<script setup>
import CardDestinasi from "@/components/CardDestinasi.vue";
</script>

<template>
  <h2
    class="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-primary mb-6 text-center pt-24 sm:pt-28 px-4 sm:px-0"
  >
    Destinasi Wisata Alam
  </h2>
  <p
    class="max-w-2xl mx-auto text-gray-600 mb-6 text-center px-4 sm:px-6 lg:px-0 text-sm sm:text-base"
  >
    Jelajahi berbagai destinasi wisata alam menarik dan asri di Balikpapan. Klik
    pada destinasi ini untuk melihat informasi lebih detail
  </p>
  <h2 />
  <CardDestinasi kategori="alam" />

  <h2
    class="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-primary mb-6 text-center"
  >
    Destinasi Pantai
  </h2>
  <p
    class="max-w-2xl mx-auto text-gray-600 mb-6 text-center px-4 sm:px-6 lg:px-0 text-sm sm:text-base"
  >
    Jelajahi berbagai destinasi pantai menarik dan asri di Balikpapan. Klik pada
    destinasi ini untuk melihat informasi lebih detail
  </p>
  <h2 />
  <CardDestinasi kategori="pantai" />

  <h2
    class="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-primary mb-6 text-center"
  >
    Destinasi Kuliner
  </h2>
  <p
    class="max-w-2xl mx-auto text-gray-600 mb-6 text-center px-4 sm:px-6 lg:px-0 text-sm sm:text-base"
  >
    Jelajahi berbagai destinasi pantai menarik dan asri di Balikpapan. Klik pada
    destinasi ini untuk melihat informasi lebih detail
  </p>
  <h2 />
  <CardDestinasi kategori="kuliner" />
</template>
