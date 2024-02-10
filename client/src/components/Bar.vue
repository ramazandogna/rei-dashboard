<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    },
    barClose: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const barClose = ref<boolean>(props.barClose)
    const barShow = ref<boolean>(true)
    const toggleBarClose = () => {
      barClose.value = !barClose.value
      barShow.value = !barShow.value
    }
    return { barClose, toggleBarClose, barShow }
  }
})
</script>
<template>
  <div
    v-if="barShow"
    :class="
      barType === 'normal'
        ? 'bg-Slate'
        : barType === 'success'
          ? 'bg-Success'
          : barType === 'error'
            ? 'bg-Error'
            : 'bg-Blue'
    "
    class="min-h-42px mb-6 items-center justify-center rounded px-3 py-6 transition-colors duration-150 last:mb-0 md:flex md:py-3"
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
          <span :class="barText" class="ml-8px text-16px text-center md:py-2 md:text-left">{{ title }} </span>
        </div>
      </div>
      <div v-if="!barClose" v-show="barRight" class="flex items-center justify-center">
        <span :class="barText" class="text-center md:py-2 md:text-left"> <slot></slot> </span>
      </div>
      <div
        @click="toggleBarClose"
        v-if="barClose"
        class="w-32px h-32px bg-bg/30 active:bg-bg/50 hover:bg-bg/40 shadow-bg/20 md:mr-none mx-auto flex cursor-pointer items-center justify-center rounded-full transition-all hover:shadow-lg"
      >
        <div class="i-ic-baseline-cancel w-20px h-20px bg-bg" />
      </div>
    </div>
  </div>
</template>
