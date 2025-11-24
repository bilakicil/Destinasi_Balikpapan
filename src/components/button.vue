<script setup>
import * as icons from "lucide-vue-next";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "outline", "secondary"].includes(value);
    },
  },
  content: {
    type: String,
    required: true,
  },

  // props untuk ikon lucide
  icon: {
    type: String,
    default: null, 
  },

  // posisi ikon 
  iconPosition: {
    type: String,
    default: "left",
    validator(val) {
      return ["left", "right"].includes(val);
    }
  }
});

// ambil ikon berdasarkan nama
const IconComponent = props.icon ? icons[props.icon] : null;
</script>

<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors duration-200 font-medium inline-flex items-center gap-2',
      variant === 'primary' ? 'bg-primary text-white hover:bg-primary/90' : 
      variant === 'outline' ? 'border-2 border-primary text-primary hover:bg-primary/10' : 
      variant === 'secondary' ? 'text-primary hover:underline' : ''
    ]"
    @click="$emit('click')"
  >
    <!-- Ikon di kiri -->
    <component
      v-if="IconComponent && iconPosition === 'left'"
      :is="IconComponent"
      class="w-4 h-4"
    />

    {{ content }}

    <!-- Ikon di kanan -->
    <component
      v-if="IconComponent && iconPosition === 'right'"
      :is="IconComponent"
      class="w-4 h-4"
    />
  </button>
</template>
