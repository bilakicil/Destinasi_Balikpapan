<script setup>
const items = [
  {
    judul: "Visi",
    deskripsi:
      "Menjadikan Balikpapan sebagai destinasi wisata unggulan di Kalimantan yang berkelanjutan, dengan mengedepankan keindahan dan pelestarian budaya lokal, serta pelayanan berkualitas tinggi.",
    logo: "/aset/visi.png",
    color: "bg-primary",
  },
  {
    judul: "Misi",
    deskripsi: `
    1. Mengembangkan infrastruktur pariwisata yang ramah lingkungan.
    2. Meningkatkan promosi destinasi wisata lokal.
    3. Memberdayakan masyarakat.
    4. Melestarikan budaya daerah.
    `,
    logo: "/aset/misi.png",
    color: "bg-secondary",
  },
];
</script>

<template>
  <section class="pb-12 text-center">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-4xl mx-auto px-6 sm:px-8 lg:px-4"
    >
      <div
        v-for="item in items"
        :key="item.judul"
        :class="`p-6 shadow-lg rounded-2xl ${item.color} transition duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl cursor-pointer`"
      >
        <img :src="item.logo" :alt="item.judul" class="mx-auto mb-1 w-8" />
        <h3 class="text-white font-primary text-xl font-bold mb-1">
          {{ item.judul }}
        </h3>
        <p
          class="text-white whitespace-pre-line"
          :class="item.judul === 'Visi' ? 'text-center mt-6' : 'text-left'"
        >
          {{ item.deskripsi }}
        </p>
      </div>
    </div>
  </section>
</template>
