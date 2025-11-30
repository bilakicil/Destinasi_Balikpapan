<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Menu } from "lucide-vue-next";

const menus = [
  { name: "Home", link: "/" },
  { name: "Tentang", link: "/tentang" },
  { name: "Destinasi", link: "/destinasi" },
  { name: "Kontak", link: "/kontak" },
];

const isOpen = ref(false);
</script>

<template>
  <div
    class="bungkus fixed z-50 w-full flex justify-between bg-white h-15 items-center py-6 px-8 shadow-lg"
  >
    <div class="logo">
      <img src="/aset/logo.png" alt="logo" width="100" />
    </div>

    <!-- destop -->
    <div class="hidden md:block">
      <nav>
        <ul>
          <li class="flex gap-10">
            <RouterLink
              class="text-sm"
              active-class="text-primary"
              exact-active-class="text-primary font-semibold"
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
    <!-- hamburger button -->
    <button class="md:hidden text-black" @click="isOpen = !isOpen">
      <Menu v-if="!isOpen" class="w-7 h-7" />
      <Menu v-else class="w-7 h-7" />
    </button>
  </div>

  <!-- dropdown -->
  <div
    v-if="isOpen"
    class="md:hidden fixed top-12 left-0 w-full bg-white shadow-lg py-6 px-8 z-40"
  >
    <nav>
      <ul class="flex flex-col gap-4 text-lg">
        <RouterLink
          v-for="menu in menus"
          :key="menu.name"
          :to="menu.link"
          @click="isOpen = false"
          class="text-gray-700"
          active-class="text-primary font-bold"
          exact-active-class="text-primary font-bold"
        >
          {{ menu.name }}
        </RouterLink>
      </ul>
    </nav>
  </div>
</template>
