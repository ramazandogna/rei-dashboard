<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: String || undefined,
    buttonSize: {
      type: String,
      default: 'px-16px py-8px'
    },
    buttonText: {
      type: String,
      default: 'text-14px'
    },
    buttonColor: {
      type: String,
      default: 'text-white hover:bg-green-600 bg-green'
    },
    buttonType: String,
    title: String,
    isIcon: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>
<template>
  <router-link :to="to || ''">
    <button
      class="gap-8px flex cursor-pointer items-center justify-center rounded-2xl transition-all hover:shadow"
      :class="buttonSize buttonColor buttonType"
    >
      <div v-show="isIcon" class="w-16px h-16px i-mynaui-external-link" />
      <div v-show="title">{{ title }}</div>
    </button>
  </router-link>
</template>
