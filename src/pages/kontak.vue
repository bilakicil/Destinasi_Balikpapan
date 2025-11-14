<script setup>
import HeroKontak from "@/components/HeroKontak.vue";
import FormInput from "@/components/FormInput.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <HeroKontak />
  <div class="flex mx-auto max-w-5xl gap-4 items-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8771157856527!2d116.87293057424924!3d-1.2698011356068137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df146963aafe5f1%3A0x6c2f292a791828a5!2sDISPORAPAR!5e1!3m2!1sen!2sid!4v1763083229779!5m2!1sen!2sid"
      width="600"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <FormInput />
  </div>
  <Footer />
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
