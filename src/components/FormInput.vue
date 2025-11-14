<script setup>
import { UserRound } from 'lucide-vue-next';
import { Mail } from 'lucide-vue-next';
import { MessageSquare } from 'lucide-vue-next';
</script>

<template>
  <div class="w-full max-w-4xl mx-auto py-12">
    <form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <h3 class="text-xl font-bold font-heading text-primary mb-1">
          Kirim Pesan
        </h3>
      </div>
      <div class="mb-4">
        <label
          class=" text-gray-700 flex items-center gap-2 text-base font-heading font-bold mb-2"
          for="Nama"
        >
          <UserRound/> Nama
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          id="Nama"
          type="text"
          placeholder="Masukkan nama anda..."
        />
      </div>
      <div class="mb-6">
        <label
          class=" text-gray-700 flex items-center gap-2 text-base font-heading font-bold mb-2"
          for="email"
        >
          <Mail/> Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          id="Email"
          type="text"
          placeholder="Masukkan email anda..."
        />
      </div>
      <div class="mb-6">
        <label
          class=" text-gray-700 flex items-center gap-2 text-base font-heading font-bold mb-2"
          for="pesan"
        >
          <MessageSquare/> Pesan
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          id="Pesan"
          type="text"
          placeholder="Masukkan pesan anda..."
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  </div>
</template>
