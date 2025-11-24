<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <main class="flex-1">
    <router-view />
      
  </main>

  <Footer/>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
