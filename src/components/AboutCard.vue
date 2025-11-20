<script setup>
const aboutcards = [
  {
    judul: "Pantai",
    deskripsi: "Nikmati keindahan pantai dengan pasir putih dan air jernih.",
    gambar: "/aset/pantai.png",
  },
  {
    judul: "Wisata Alam",
    deskripsi: "Nikmati suasana ruang terbuka dengan udara yang segar.",
    gambar: "/aset/alam.png",
  },
  {
    judul: "Kuliner",
    deskripsi: "Cicipi berbagai makanan lezat khas Balikpapan.",
    gambar: "/aset/kuliner.png",
  },
];
</script>

<template>
  <section class="pb-12 text-center ">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-4xl mx-auto">
      <div class="p-6 shadow-lg rounded-2xl bg-white"
        v-for="card in aboutcards"
        :key="card.judul">
        <img :src="card.gambar" :alt="card.judul" class="mx-auto mb-1 w-8" />
        <h3 class="text-xl font-bold font-heading text-primary mb-1">{{ card.judul }}</h3>
        <p class="text-gray-700">
          {{ card.deskripsi }}
        </p>
      </div>
    </div>
  </section>
</template>
