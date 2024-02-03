<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <section class="py-22 px-6 text-center lg:mx-auto lg:max-w-2xl lg:px-0">
    <h1 class="text-2xl text-gray-500 dark:text-slate-400">
      {{ title }}
    </h1>
  </section>
</template>
