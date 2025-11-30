<script setup>
import Button from "./Button.vue";
import { useRouter } from "vue-router";
import { destinations } from "@/data/destinations";
import { computed } from "vue";

const router = useRouter();

const props = defineProps({
  destinations: {
    type: Array,
    default: () => [],
  },
  kategori: {
    type: String,
    default: null,
  },
});

const goToDetail = (slug) => {
  // Simpan informasi halaman saat ini sebelum navigate
  const currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath === "/home") {
    sessionStorage.setItem("previousPage", "home");
  } else if (currentPath === "/destinasi") {
    sessionStorage.setItem("previousPage", "destinasi");
  }

  router.push(`/destinasi/${slug}`);
};

const filteredDestinations = computed(() => {
  let filtered = props.destinations.length ? props.destinations : destinations;

  if (props.kategori) {
    const kategorieMap = {
      alam: ["hutan-mangrove", "wisata-meranti", "bukit-kebo"],
      pantai: ["pantai-manggar", "pantai-seraya", "pantai-kilang-mandiri"],
      kuliner: [
        "pasar-tumpah-pringgodani",
        "restoran-dandito",
        "gulung-jenebora",
      ],
    };

    if (kategorieMap[props.kategori]) {
      filtered = destinations.filter((d) =>
        kategorieMap[props.kategori].includes(d.slug)
      );
    }
  }

  return filtered;
});
</script>

<template>
  <section class="pb-20">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto px-6 sm:px-6 lg:px-0"
    >
      <div
        class="bg-white max-w-lg rounded-2xl shadow-md overflow-hidden relative h-92"
        v-for="d in filteredDestinations"
        :key="d.nama"
      >
        <a href="#">
          <div class="relative" @click="goToDetail(d.slug)">
            <img class="w-full h-48 object-cover" :src="d.image" alt="" />

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
          <p class="line-clamp-4 text-gray-600 text-sm mt-1">
            {{ d.description }}
          </p>
          <div class="absolute left-0 bottom-4">
            <Button
              variant="secondary"
              content="Lihat Detail"
              icon="ArrowRight"
              iconPosition="right"
              @click="goToDetail(d.slug)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
