<template>
  <div class="box-border flex w-full rounded-2xl p-6 shadow">
    <div class="mr-6 flex h-12 w-12 items-center justify-center rounded-full shadow">
      <div class="w-24px h-24px text-green" :class="icon"></div>
    </div>
    <div class="gap-48px flex items-center">
      <div class="gap-8px flex flex-col">
        <div class="text-20px">375$</div>
        <div class="text-#6b7280 text-16px flex items-center font-bold">3 days Ago</div>
      </div>
      <div class="gap-8px flex flex-col">
        <div class="text-#6b7280 text-14px">Home Loan Account</div>
        <div
          class="w-70px text-12px h-26px bg-green ml-auto flex items-center justify-center rounded-2xl text-white"
        >
          button
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return { icon: props.icon }
  },
  components: { BaseIcon }
})
</script>

<style scoped></style>
