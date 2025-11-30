<script setup>
import { Send } from "lucide-vue-next";
import Button from "./Button.vue";

const props = defineProps({
  show: Boolean,
  onClose: Function,
});
</script>

<template>
  <div
    v-if="props.show"
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
  >
    <div
      class="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm lg:w-[420px] text-center"
    >
      <Send
        class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4"
        style="color: #0077b6"
      />

      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
        Pesan Berhasil Dikirim!
      </h2>

      <p class="text-gray-600 mb-3 text-sm sm:text-base">
        Terimakasih atas pesan yang anda kirim, kami sangat mengapresiasinya!
      </p>
      <Button variant="primary" content="Tutup" @click="props.onClose">
      </Button>
    </div>
  </div>
</template>
