<script setup>
import Navbar from "./components/navbar.vue";
</script>

<template>
  <Navbar />
  <main class="flex-1">
    <router-view />
      
  </main>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
