<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['click'],
  props: {
    class: String || undefined,
    to: String || undefined,
    buttonText: {
      type: String as () => 'text-text' | 'text-bg',
      default: 'text-bg'
    },
    buttonColor: {
      type: String as () =>
        | 'bgSlate'
        | 'bgBlue'
        | 'bgError'
        | 'bgSuccess'
        | 'bgPurple'
        | 'gradient-background-button',
      default: 'bgSlate'
    },
    title: String || undefined,
    isIcon: {
      type: Boolean,
      default: false
    },
    buttonType: {
      type: String as () => 'normal' | 'mini',
      default: 'normal'
    },
    iconColor: {
      type: String as () => 'text-text' | 'text-bg',
      default: 'text-bg'
    },
    icon: {
      type: String,
      default: 'i-ooui-link-external-ltr'
    }
  },
  setup() {
    return {}
  }
})
</script>
<template>
  <router-link v-if="title && buttonType === 'normal'" :to="to || ''">
    <button
      @click="$emit('click')"
      class="gap-4px active:scale-100.5 active:translate-y-1px px-8px min-w-90px min-h-42px flex cursor-pointer items-center justify-center rounded transition-all hover:shadow"
      :class="buttonColor"
    >
      <div v-show="isIcon" class="w-24px h-24px flex items-center justify-center">
        <div :class="(iconColor, icon)" class="w-16px h-16px bg-white" />
      </div>
      <div class="px-4px text-16px" :class="buttonText">{{ title }}</div>
    </button>
  </router-link>
  <router-link v-else-if="title && buttonType === 'mini' && !isIcon" :to="to || ''">
    <button
      @click="$emit('click')"
      class="min-w-70px active:scale-100.5 active:translate-y-1px text-12px min-h-26px flex cursor-pointer items-center justify-center rounded-2xl transition-all transition-all hover:shadow"
      :class="buttonColor"
    >
      <div class="flex cursor-pointer items-center justify-center text-white">
        {{ title }}
      </div>
    </button>
  </router-link>
  <router-link v-if="!title" :to="to || ''">
    <button
      @click="$emit('click')"
      class="gap-8px active:scale-100.5 active:translate-y-1px p-4px flex cursor-pointer items-center justify-center rounded transition-all hover:shadow"
      :class="buttonColor"
    >
      <div class="w-24px h-24px flex items-center justify-center">
        <div :class="(iconColor, icon)" class="w-16px h-16px bg-white" />
      </div>
    </button>
  </router-link>
</template>
