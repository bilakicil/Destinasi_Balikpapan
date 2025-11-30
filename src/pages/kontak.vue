<script setup>
import HeroKontak from "@/components/HeroKontak.vue";
import FormInput from "@/components/FormInput.vue";
</script>

<template>
  <HeroKontak />
  <div
    class="flex flex-col md:flex-row mx-auto max-w-6xl gap-4 md:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-8"
  >
    <iframe
      class="hidden md:block w-full md:w-1/2 lg:w-[600px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8771157856527!2d116.87293057424924!3d-1.2698011356068137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df146963aafe5f1%3A0x6c2f292a791828a5!2sDISPORAPAR!5e1!3m2!1sen!2sid!4v1763083229779!5m2!1sen!2sid"
      width="600"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="w-full md:w-1/2">
      <FormInput />
    </div>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
