<script setup>
import { Phone } from "lucide-vue-next";
import { MapPin } from "lucide-vue-next";
import { Instagram } from "lucide-vue-next";
import { Facebook } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-primary text-white">
    <div class="max-w-screen mx-auto w-full p-4 py-6 px-8 lg:py-8">
      <div class="md:flex md:justify-between md:gap-x-12 md:gap-y-8">
        <div class="mb-6 md:mb-0 md:mr-12">
          <a>
            <img src="/aset/logofooter.png" class="h-7 me-3" alt="logo" />
            <p class="mt-4 max-w-2xs text-body">
              Jelajahi keindahan Kota Balikpapan dengan berbagai destinasi
              wisata menarik.
            </p>
          </a>
        </div>
        <div
          class="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-10 sm:grid-cols-3"
        >
          <div>
            <h2 class="mb-6 text-sm font-semibold text-heading uppercase">
              Kontak
            </h2>
            <ul class="text-body font-medium">
              <li class="mb-4">
                <a
                  href="https://tailwindcss.com/"
                  class="flex items-center gap-3 hover:underline"
                  ><Phone />+62 542 123 4567</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=DISPORAPAR+Balikpapan"
                  target="_blank"
                  class="flex items-center gap-3 hover:underline"
                >
                  <MapPin /> Balikpapan, Kalimantan Timur
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-heading uppercase">
              Ikuti Kami
            </h2>
            <ul class="text-body font-medium flex items-center gap-7">
              <li>
                <a href="https://www.instagram.com" class="hover:underline"
                  ><Instagram
                /></a>
              </li>
              <li>
                <a href="https://www.facebook.com" class="hover:underline"
                  ><Facebook
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-default sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between sm:gap-x-8">
        <span class="text-sm text-body sm:text-center"
          >© 2023
          <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
          All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0"></div>
      </div>
    </div>
  </footer>
</template>
