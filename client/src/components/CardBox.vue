<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: 'min-w-500px w-500px'
    },
    height: {
      type: String,
      default: 'min-h-282px'
    },
    background: {
      type: String,
      default: 'bg-white'
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="p-24px grow">
    <div
      class="mx-auto box-border cursor-copy rounded-2xl p-6 shadow transition-all hover:shadow-xl"
      :class="[height, width, background, centered ? 'gap-8px flex items-center justify-center' : '']"
    >
      <slot />
    </div>
  </div>
</template>
