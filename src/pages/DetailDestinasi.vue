<script setup>
import { useRoute, useRouter } from "vue-router";
import { destinations } from "@/data/destinations.js";
import Button from "@/components/Button.vue";
import {
  ArrowLeft,
  Star,
  Clock4,
  CircleDollarSign,
  MapPin,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const infoStructure = [
  { key: "jam", icon: Clock4, label: "Jam Operasional" },
  { key: "harga", icon: CircleDollarSign, label: "Harga Tiket" },
  { key: "akses", icon: MapPin, label: "Akses" },
];

// ambil data berdasarkan slug
const destination = destinations.find((s) => s.slug === slug);

const goBack = () => {
  router.push("/destinasi");
};
</script>

<template>
  <section class="pt-24 max-w-6xl mx-auto" v-if="destination">
    <div class="mb-6">
      <Button
        variant="outline"
        content="Kembali"
        icon="ArrowLeft"
        iconPosition="left"
        @click="goBack"
      />
    </div>

    <div class="relative rounded-2xl overflow-hidden shadow-xl">
      <img :src="destination.image" class="w-full h-100 object-cover" />
      <div class="absolute bottom-4 left-4 text-white">
        <h2 class="text-5xl font-bold drop-shadow-lg">
          {{ destination.nama }}
        </h2>
        <p class="text-3xl drop-shadow-lg flex items-center gap-1">
          <MapPin class="w-8 h-8" />
          {{ destination.lokasi }}
        </p>
      </div>
    </div>

    <div class="mt-8 bg-white p-6 shadow-lg rounded-2xl">
      <h2 class="text-2xl font-heading font-bold mb-2 text-primary">
        Tentang Destinasi
      </h2>
      <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
        {{ destination.description }}
      </p>
    </div>

    <div class="mt-8 bg-white p-6 shadow-lg rounded-2xl">
      <h2 class="text-2xl font-heading font-bold mb-4 text-primary">
        Highlight
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          v-for="(item, i) in destination.Highlight"
          :key="i"
          class="bg-blue-50 text-gray-600 px-3 py-2 rounded-lg text-sm flex items-center gap-2"
        >
          <Star style="color: #ffa500" />
          {{ item }}
        </div>
      </div>
    </div>

    <div class="mt-8 bg-white p-6 shadow-lg rounded-2xl">
      <h2 class="text-2xl font-heading font-bold mb-4 text-primary">Lokasi</h2>

      <iframe
        :src="destination.mapEmbed"
        class="w-full rounded-xl"
        height="350"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <p class="text-gray-600 mt-3">{{ destination.location }}</p>
    </div>

    <div class="mt-8 bg-white p-6 shadow-lg rounded-2xl mb-20">
      <h2 class="text-2xl font-heading font-bold mb-4 text-primary">
        Informasi Praktis
      </h2>

      <ul class="text-sm space-y-4 text-gray-600">
        <li class="flex items-center gap-3">
          <Clock4 class="w-5 h-5" style="color: #0077b6" />

          <span>{{ destination.Informasi.jam }}</span>
        </li>

        <li class="flex items-center gap-3">
          <CircleDollarSign class="w-5 h-5" style="color: #ffa500" />

          <span>{{ destination.Informasi.harga }}</span>
        </li>

        <li class="flex items-center gap-3">
          <MapPin class="w-5 h-5" style="color: #0077b6" />

          <span>{{ destination.Informasi.akses }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
