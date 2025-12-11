<script setup>
const items = [
  {
    judul: "Public Speaking",
    deskripsi:
      "Saya memiliki kemampuan dalam komukasi yang baik terutama dalam memyampaikan informasi, dan skill ini saya dapat dari pengalaman-pengalaman yang sudah saya lalui",
    logo: "/aset/visi.png",
    color: "bg-primary",
  },
  {
    judul: "UI/UX Desain",
    deskripsi: "Saya memiliki kemampuan dalam mendesain sebuah aplikasi baik itu mobile ataupun web dengan fitur-fitur interaktif yang sudah saya pelajari",
    logo: "/aset/misi.png",
    color: "bg-secondary",
  },
  {
    judul: "Frondend Dev",
    deskripsi: "Saya mampu mengimplementasikan hasil desain yang saya buat ke dalam frontend dalam bentuk web maupun mobile secara interaktif dan juga responsif yang ramah penggunA",
    logo: "/aset/visi.png",
    color: "bg-secondary",
  },
];
</script>

<template>
  <section class="pb-12 text-center">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-4xl mx-auto px-6 sm:px-8 lg:px-4"
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
