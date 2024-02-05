<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import CardBox from './CardBox.vue'
import useModalShow from '../hooks/modal'

export default defineComponent({
  props: {
    style: {
      type: String,
      default: ''
    }
  },
  components: { CardBox },
  setup() {
    const { isModalOpen, toggleModal } = useModalShow()
    const { value } = toRefs(isModalOpen)

    return { isModalOpen: value, toggleModal }
  }
})
</script>

<template>
  <div v-if="isModalOpen" class="z-999999 fixed inset-0 flex items-center justify-center">
    <div @click="toggleModal" class="bg-#000000 fixed inset-0 opacity-70"></div>
    <CardBox class="" :style="style">
      <div
        @click="toggleModal"
        class="i-material-symbols-close-rounded Error w-18px h-18px absolute right-4 top-4 cursor-pointer"
      ></div>
      <slot></slot>
    </CardBox>
  </div>
</template>
