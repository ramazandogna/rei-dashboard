<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    barText: {
      type: String as () => 'text-text' | 'text-bg',
      default: 'text-bg'
    },
    title: String,
    barType: {
      type: String as () => 'normal' | 'success' | 'error' | 'blue',
      default: 'normal'
    },
    barRight: {
      type: Boolean,
      default: false
    },
    barRightContent: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>
<template>
  <div
    :class="
      barType === 'normal'
        ? 'bg-Slate'
        : barType === 'success'
          ? 'bg-Success'
          : barType === 'error'
            ? 'bg-Error'
            : 'bg-Blue'
    "
    class="min-h-42px mb-6 items-center justify-center rounded-lg px-3 py-6 transition-colors duration-150 last:mb-0 md:flex md:py-3"
  >
    <div class="block grow items-center justify-between md:flex">
      <div class="mb-6 flex items-center justify-center md:mb-0">
        <div class="flex flex-col items-center md:flex-row">
          <span class="inline-flex h-10 w-10 items-center justify-center md:mr-2 md:h-5 md:w-5">
            <div
              class="w-24px h-24px inline-block"
              :class="[
                barType === 'normal'
                  ? 'i-line-md-cog-filled-loop'
                  : barType === 'success'
                    ? 'i-clarity-success-standard-solid'
                    : barType === 'error'
                      ? 'i-line-md-loading-alt-loop'
                      : 'i-line-md-coffee-half-empty-twotone-loop',
                barText
              ]"
            ></div>
          </span>
          <span :class="barText" class="ml-8px text-center md:py-2 md:text-left">{{ title }} </span>
        </div>
      </div>
      <div v-show="barRight" class="flex items-center justify-center">
        <span :class="barText" class="text-center md:py-2 md:text-left"> <slot></slot> </span>
      </div>
    </div>
  </div>
</template>
