<script setup>
import Button from "./Button.vue";
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
  kategori: {
    type: String,
    default: null,
  },
});
const destinasi = [
  {
    nama: "Pantai Manggar",
    kategori: "Pantai",
    lokasi: "Manggar, Balikpapan",
    deskripsi:
      "Nikmati pasir putih dan panorama laut di Pantai Manggar yang dilengkapi berbagai fasilitas modern, mulai dari kuliner lokal hingga olahraga air.",
    gambar: "/aset/pantai_manggar.jpg",
  },
  {
    nama: "Hutan Mangrove",
    kategori: "Wisata Alam",
    lokasi: "Margomulyo, Balikpapan",
    deskripsi:
      "Kawasan konservasi mangrove dengan jembatan kayu yang menawan, tempat terbaik untuk edukasi lingkungan.",
    gambar: "/aset/hutan_mangrove.png",
  },
  {
    nama: "Pasar Tumpah Pringgodani",
    kategori: "Kuliner",
    lokasi: "Teitip, Balikpapan",
    deskripsi:
      "Rasakan sensasi berbelanja kuliner di tengah hutan yang rindang, sebuah pengalaman unik di Pasar Tumpah Pringgodani, Balikpapan Timur.",
    gambar: "/aset/pringgondani.jpeg",
  },
  {
    nama: "Wisata Meranti ",
    kategori: "Wisata Alam",
    lokasi: "Karang Joang, Balikpapan",
    deskripsi:
      "Ekowisata Meranti Balikpapan menawarkan perkemahan dan fasilitas modern di tengah upaya pelestarian pohon langka.",
    gambar: "/aset/wisata_meranti.webp",
  },
  {
    nama: "Bukit Kebo ",
    kategori: "Wisata Alam",
    lokasi: "Manggar, Balikpapan",
    deskripsi:
      "Berawal dari peternakan, Bukit Kebo kini menjadi destinasi wisata favorit berkat hamparan bukitnya yang luas dan menenangkan.",
    gambar: "/aset/bukit_kebo.jpeg",
  },
  {
    nama: "Pantai Seraya",
    kategori: "Pantai",
    lokasi: "Sepinggan, Balikpapan",
    deskripsi:
      "Pantai Sepinggan Raya (Seraya) adalah destinasi di Balikpapan dimana pengunjung dapat menyaksikan pesawat lepas landas dan mendarat dari jarak dekat.",
    gambar: "/aset/pantai_seraya.jpg",
  },
  {
    nama: "Pantai Kilang Mandiri",
    kategori: "Pantai",
    lokasi: "Prapatan, Balikpapan",
    deskripsi:
      "Pantai Kilang Mandiri menawarkan paviliun bersahabat, kafe Western, dan aktivitas unik seperti berenang malam, tepat di seberang Lapangan Merdeka.",
    gambar: "/aset/pantai_kilang_mandiri.webp",
  },
  {
    nama: "Restoran Dandito",
    kategori: "Kuliner",
    lokasi: "Gn. Bahagia, Balikpapan",
    deskripsi:
      "Restoran Dandito adalah ikon kuliner Balikpapan, terkenal dengan olahan kepiting premium, terutama Kepiting Saus Dandito yang legendaris.",
    gambar: "/aset/dandito.jpeg",
  },
  {
    nama: "Gulung Jenebora",
    kategori: "Kuliner",
    lokasi: "MT Haryono, Balikpapan",
    deskripsi:
      "Gulung Jenebora adalah toko oleh-oleh khas Balikpapan spesialis bolu gulung dengan berbagai varian rasa.",
    gambar: "/aset/gulung.jpg",
  },
];
// FILTER by kategori
let filtered = props.kategori
  ? destinasi.filter((d) => d.kategori === props.kategori)
  : destinasi;

// LIMIT jumlah card
if (props.limit) {
  filtered = filtered.slice(0, props.limit);
}
</script>

<template>
  <section class="pb-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
      <div
        class="bg-white max-w-lg rounded-2xl shadow-md overflow-hidden relative h-92"
        v-for="d in filtered"
        :key="d.nama"
      >
        <a href="#">
          <div class="relative">
            <img class="w-full h-48 object-cover" :src="d.gambar" alt="" />

            <div
              class="overlay absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
            >
              <h5 class="text-lg font-semibold text-white">{{ d.nama }}</h5>

              <p class="flex items-center text-gray-200 text-sm">
                <svg
                  class="w-4 h-4 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {{ d.lokasi }}
              </p>
            </div>
          </div>
        </a>

        <div class="p-4">
          <p class="text-gray-600 text-sm mt-1">
            {{ d.deskripsi }}
          </p>
          <div class="absolute left-0 bottom-4">
            <Button
              variant="secondary"
              content="Lihat Detail"
              icon="ArrowRight"
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
