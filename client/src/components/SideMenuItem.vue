<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'

interface SubItem {
  title?: string
  to: string
  subItems?: SubItem[]
}

export default defineComponent({
  props: {
    title: String,
    subItems: Array as () => SubItem[], // SubItem tipindeki diziyi bekleyen bir prop tanımlaması
    icon: String,
    to: String,
    hasSubMenu: Boolean
  },
  components: {
    RouterLink
  },
  setup() {
    const showSub = ref(false)

    const toggleShowSub = () => {
      showSub.value = !showSub.value
    }

    return {
      showSub,
      toggleShowSub
    }
  }
})
</script>

<template>
  <li>
    <RouterLink
      :to="to || ''"
      class="hover:scale-101 flex cursor-pointer py-3 text-blue-600 transition-all hover:text-black hover:shadow"
      @click.prevent="toggleShowSub"
    >
      <div class="flex h-6 w-16 grow items-center">
        <div class="w-64px flex items-center justify-center">
          <div v-if="icon" class="max-w-20px max-h-20px fill-white" v-html="icon"></div>
        </div>
        <div class="px-12px line-clamp-1 flex grow items-center text-ellipsis">{{ title }}</div>
        <div v-if="hasSubMenu" class="w-48px flex items-center justify-center">
          <div
            class="i-material-symbols:keyboard-arrow-down-rounded w-24px h-24px transition-all"
            :class="showSub ? 'rotate-0' : '-rotate-90'"
          ></div>
        </div>
      </div>
    </RouterLink>

    <!-- Alt menüyü oluştur -->
    <ul v-if="hasSubMenu && showSub">
      <li
        v-show="showSub"
        v-for="(subItem, index) in subItems"
        :key="index"
        class="text-14px px-12px flex cursor-pointer bg-slate-500 py-2 text-white transition-all hover:bg-slate-600 hover:shadow"
      >
        <RouterLink :to="subItem.to || ''" class="flex h-6 w-16 w-full items-center">
          <div class="px-12px line-clamp-1 flex grow items-center text-ellipsis">{{ subItem.title }}</div>
        </RouterLink>
      </li>
    </ul>
  </li>
</template>
