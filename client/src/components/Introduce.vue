<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>
<template>
  <div
    class="gradient-background mb-6 mt-6 cursor-crosshair rounded px-6 py-12 text-center shadow transition-all hover:shadow-2xl lg:px-12"
  >
    <h1 class="mb-6 text-3xl text-white">This is test project, see ya soon.</h1>
    <a
      class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-white bg-white px-6 py-2 text-black ring-gray-200 transition-colors duration-150 hover:bg-gray-100 focus:outline-none focus:ring dark:ring-gray-500"
      href="https://github.com/ramazanogna"
      target="_blank"
      disabled="false"
      ><span class="bg-Slate inline-flex h-6 w-6 items-center justify-center rounded-full"
        ><div class="i-line-md-github-loop bg-bg"></div></span
      ><span class="px-2">GitHub</span></a
    >
  </div>
</template>
