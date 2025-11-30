<script setup>
import { UserRound, Mail, MessageSquare } from "lucide-vue-next";
import { ref } from "vue";
import PopUp from "./PopUp.vue";

const showPopup = ref(false);

const nama = ref("");
const email = ref("");
const pesan = ref("");

const errorMessage = ref("");

function kirimPesan() {
  if (!nama.value || !email.value || !pesan.value) {
    errorMessage.value = "Harap isi semua data terlebih dahulu!";
    return;
  }

  errorMessage.value = "";
  showPopup.value = true;
}

function closePopup() {
  showPopup.value = false;

  // hps data input 
  nama.value = "";
  email.value = "";
  pesan.value = "";
}
</script>

<template>
  <div class="w-full max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-0">
    <form
      class="bg-white shadow-lg rounded px-4 sm:px-6 lg:px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <h3 class="text-lg sm:text-xl font-bold font-heading text-primary mb-1">
          Kirim Pesan
        </h3>
      </div>
      <div class="mb-4">
        <label
          class="text-gray-700 flex items-center gap-2 text-sm sm:text-base font-heading font-bold mb-2"
          for="Nama"
        >
          <UserRound /> Nama
        </label>
        <input
          v-model="nama"
          class="shadow appearance-none border rounded w-full py-2 px-3 placeholder-gray-300 text-gray-700 focus:outline-none placeholder-shown:bg-white placeholder-shown:border-gray-300 not-placeholder-shown:bg-blue-50 not-placeholder-shown:border-black not-placeholder-shown:text-black"
          id="Nama"
          type="text"
          placeholder="Masukkan nama anda..."
        />
      </div>
      <div class="mb-6">
        <label
          class="text-gray-700 flex items-center gap-2 text-base font-heading font-bold mb-2"
          for="email"
        >
          <Mail /> Email
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 placeholder-gray-300 text-gray-700 focus:outline-none placeholder-shown:bg-white placeholder-shown:border-gray-300 not-placeholder-shown:bg-blue-50 not-placeholder-shown:border-black not-placeholder-shown:text-black"
          id="Email"
          type="text"
          placeholder="Masukkan email anda..."
        />
      </div>
      <div class="mb-6">
        <label
          class="text-gray-700 flex items-center gap-2 text-sm sm:text-base font-heading font-bold mb-2"
          for="pesan"
        >
          <MessageSquare /> Pesan
        </label>
        <input
          v-model="pesan"
          class="shadow appearance-none border rounded w-full py-2 px-3 placeholder-gray-300 text-gray-700 focus:outline-none placeholder-shown:bg-white placeholder-shown:border-gray-300 not-placeholder-shown:bg-blue-50 not-placeholder-shown:border-black not-placeholder-shown:text-black"
          id="Pesan"
          type="text"
          placeholder="Masukkan pesan anda..."
        />
      </div>
      <div class="flex items-center justify-center sm:justify-between">
        <button
          class="bg-primary hover:bg-primary-dark text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
          type="button"
          @click="kirimPesan"
        >
          Kirim Pesan
        </button>
      </div>
      <p v-if="errorMessage" class="text-red-600 text-sm mt-2">
        {{ errorMessage }}
      </p>
    </form>
    <PopUp :show="showPopup" :onClose="closePopup" />
  </div>
</template>
