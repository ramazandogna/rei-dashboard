<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../Button.vue'

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
  components: { Button }
})
</script>
<template>
  <div class="box-border flex grow cursor-copy rounded bg-white p-6 shadow transition-all hover:shadow-xl">
    <div
      class="mr-6 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all hover:shadow-xl"
    >
      <div class="w-24px h-24px bgSuccess" :class="icon"></div>
    </div>
    <div class="gap-48px flex grow items-center">
      <div class="gap-8px flex flex-col">
        <div class="text-20px">375$</div>
        <div class="text-#6b7280 text-16px flex items-center font-bold">3 days Ago</div>
      </div>
      <div class="gap-8px ml-auto flex flex-col items-end">
        <div class="text-#6b7280 text-14px">Home Loan Account</div>
        <Button title="buton" button-type="mini" />
      </div>
    </div>
  </div>
</template>
