<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-bg text-text text-14px [&_svg]:w-20px [&_svg]:h-20px font-[400] font-[Open_Sans]">
    <keep-alive>
      <RouterView />
    </keep-alive>
  </div>
</template>

<style scoped></style>
