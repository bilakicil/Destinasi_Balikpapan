<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'outline'].includes(value);
    }
  },
  content: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <button 
    :class="[
      'px-4 py-2 rounded-md transition-colors duration-200 font-medium',
      variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 
      variant === 'outline' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50' : ''
    ]"
  >
    {{ content }}
  </button>
</template>
