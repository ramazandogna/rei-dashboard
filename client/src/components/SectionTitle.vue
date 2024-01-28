<script setup lang="ts">
defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <section class="gap-24px mb-6 flex items-center">
    <div class="flex h-12 w-12 items-center justify-center rounded-full shadow">
      <div class="w-24px h-24px" :class="icon"></div>
    </div>
    <h1 class="text-30px">{{ title }}</h1>
  </section>
</template>
