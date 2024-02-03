<script setup lang="ts">
defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <section class="gap-12px mb-6 flex items-center [line-height:1.5rem]">
    <div
      class="flex h-12 w-12 items-center justify-center rounded-full shadow transition-all hover:shadow-xl"
    >
      <div class="w-24px h-24px" :class="icon || 'i-eos-icons-admin-outlined'"></div>
    </div>
    <h1 class="text-30px">{{ title }}</h1>
  </section>
</template>
