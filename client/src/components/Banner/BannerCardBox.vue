<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../Button.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: { Button }
})
</script>
<template>
  <div class="box-border grow cursor-copy rounded bg-white p-6 shadow transition-all hover:shadow-xl">
    <div class="mb-12px">
      <Button button-type="mini" title="buton" />
    </div>
    <div class="flex items-center justify-between">
      <div class="w-55px hover:-rotate-9 justify-between opacity-80 transition-all hover:opacity-100">
        <div class="text-18px border-b-1">Clients</div>
        <div class="text-30px">512</div>
      </div>
      <div class="w-48px h-48px flex items-center justify-center">
        <i
          class="i-material-symbols:deployed-code-account-rounded hover:rotate-9 bgSuccess h-full w-full transition-all"
        ></i>
      </div>
    </div>
  </div>
</template>
