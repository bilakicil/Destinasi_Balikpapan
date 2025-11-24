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
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    @click.self="props.onClose"
  >
    <div
      class="bg-white p-10 rounded-2xl shadow-xl w-[420px] text-center"
      @click="props.onClose"
    >
      <Send class="w-16 h-16 mx-auto mb-4" style="color: #0077b6" />

      <h2 class="text-2xl font-bold mb-2">Pesan Berhasil Dikirim!</h2>

      <p class="text-gray-600">
        Terimakasih atas pesan yang anda kirim, kami sangat mengapresiasinya!
      </p>
    </div>
  </div>
</template>
