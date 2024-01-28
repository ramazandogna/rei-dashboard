<template>
  <nav class="lg:ml-24px z-99 maxW bg-#f9fafb fixed inset-0 flex h-14 items-center lg:pl-60">
    <div
      class="flex h-12 w-12 cursor-pointer items-center justify-center lg:mx-auto lg:hidden lg:items-stretch"
    >
      <div class="w-24px h-24px i-mdi-hamburger"></div>
    </div>
    <div class="flex w-full items-center justify-between">
      <h1 class="text-20px">Reî</h1>
      <ul class="gap-12px decoration-none flex items-center">
        <li>list el 1</li>
        <li>list el 2</li>
        <li>list el 3</li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
