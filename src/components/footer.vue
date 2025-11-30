<script setup>
import { Phone } from "lucide-vue-next";
import { MapPin } from "lucide-vue-next";
import { Instagram } from "lucide-vue-next";
import { Facebook } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-primary text-white">
    <div
      class="max-w-screen-xl mx-auto w-full p-4 py-6 px-4 sm:px-6 md:px-8 lg:px-8 lg:py-8"
    >
      <div
        class="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between gap-8 md:gap-10 lg:gap-12"
      >
        <!-- Logo dan Deskripsi -->
        <div class="text-center md:text-left lg:text-left md:flex-1 lg:flex-1">
          <a class="inline-block">
            <img
              src="/aset/logofooter.png"
              class="h-7 mx-auto md:mx-0 lg:mx-0"
              alt="logo"
            />
            <p
              class="mt-4 max-w-sm mx-auto md:mx-0 lg:mx-0 text-body text-sm sm:text-base"
            >
              Jelajahi keindahan Kota Balikpapan dengan berbagai destinasi
              wisata menarik.
            </p>
          </a>
        </div>

        <!-- Grid Kontak dan Social Media -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-12 md:flex-1 lg:flex-1"
        >
          <!-- Kontak -->
          <div class="text-center sm:text-left md:text-left">
            <h2
              class="mb-4 sm:mb-6 md:mb-4 text-sm font-semibold text-heading uppercase"
            >
              Kontak
            </h2>
            <ul class="text-body font-medium space-y-3">
              <li>
                <a
                  class="flex items-center justify-center sm:justify-start md:justify-start gap-3 hover:underline transition-colors"
                  ><Phone class="w-4 h-4" />+62 892 123 4567</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=DISPORAPAR+Balikpapan"
                  target="_blank"
                  class="flex items-center justify-center sm:justify-start md:justify-start gap-3 hover:underline transition-colors"
                >
                  <MapPin class="w-4 h-4" /> Balikpapan, Kalimantan Timur
                </a>
              </li>
            </ul>
          </div>

          <!-- Social Media -->
          <div class="text-center sm:text-left md:text-left">
            <h2
              class="mb-4 sm:mb-6 md:mb-4 text-sm font-semibold text-heading uppercase"
            >
              Ikuti Kami
            </h2>
            <ul
              class="text-body font-medium flex items-center justify-center sm:justify-start md:justify-start gap-6"
            >
              <li>
                <a
                  href="https://www.instagram.com/disporapar_balikpapan?igsh=em93cmMxb2k2b3N3"
                  target="_blank"
                  class="hover:text-blue-300 transition-colors"
                  ><Instagram class="w-5 h-5"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1DPvW22HR2/"
                  target="_blank"
                  class="hover:text-blue-300 transition-colors"
                  ><Facebook class="w-5 h-5"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-default sm:mx-auto lg:my-8" />
      <div class="text-center">
        <span class="text-sm text-body"
          >© 2025
          <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
          All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
