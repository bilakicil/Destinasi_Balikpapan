<script setup>
import { RouterLink } from 'vue-router';

const menus = [
  { name: "Home", link: "/" },
  { name: "Tentang", link: "/tentang" },
  { name: "Destinasi", link: "/destinasi" },
  { name: "Kontak", link: "/kontak" },
];
</script>

<template>
  <div
    class="bungkus fixed z-50 w-full flex justify-between bg-white h-15 items-center py-6 px-8 shadow-lg"
  >
    <div class="logo">
      <img src="/aset/logo.png" alt="logo" width="100" />
    </div>
    <div class="menu">
      <nav>
        <ul>
          <li class="flex gap-10">
            <RouterLink
              class="text-sm hover:text-primary"
              v-for="menu in menus"
              :key="menu.name"
              :to="menu.link"
            >
              {{ menu.name }}
          </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
