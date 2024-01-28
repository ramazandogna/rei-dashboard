<template>
  <div class="fle box-border w-full rounded-2xl p-6 shadow">
    <div class="mb-12px">
      <div class="w-70px text-12px h-26px bg-green flex items-center justify-center rounded-2xl text-white">
        button
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="w-55px justify-between">
        <div class="text-18px border-b-1">Clients</div>
        <div class="text-30px">512</div>
      </div>
      <div class="w-48px h-48px flex items-center justify-center">
        <BaseIcon
          path="your-icon-path"
          class="text-green i-material-symbols:deployed-code-account-rounded h-full w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from './BaseIcon.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: { BaseIcon }
})
</script>

<style scoped></style>
