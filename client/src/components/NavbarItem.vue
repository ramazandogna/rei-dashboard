<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouteLocationRaw } from 'vue-router'

interface SubItem {
  title?: string
  to: RouteLocationRaw
  subItems?: SubItem[]
  icon?: string
}

export default defineComponent({
  props: {
    color: String,
    hasDropDown: Boolean,
    logout: Number,
    title: String,
    to: String,
    subItems: Array as () => SubItem[] | undefined,
    icon: String || undefined
  },

  setup() {
    const show = ref(false)

    const toggleShow = () => {
      show.value = !show.value
    }
    const handleLogOut = () => {
      console.log('logout')
    }

    return { toggleShow, show, handleLogOut }
  }
})
</script>

<style scoped></style>

<template>
  <li
    v-if="hasDropDown"
    @click="toggleShow"
    class="relative cursor-pointer rounded-2xl px-3 py-2 active:bg-slate-300"
  >
    <div class="flex items-center">
      <span>{{ title }}</span>
      <span
        :class="show ? 'rotate-0' : 'rotate-180'"
        class="i-material-symbols:keyboard-arrow-down-rounded ml-2 h-4 w-4 transition-all duration-300"
      >
      </span>
    </div>
    <ul v-show="show" class="w-160px absolute right-0 top-full mt-3 rounded-2xl bg-white p-3 shadow-md">
      <router-link v-for="(navitem, index) in subItems" :to="navitem.to || ''" :key="index">
        <li class="cursor-pointer rounded-xl p-2 text-black hover:bg-gray-200">
          {{ navitem.title }}
        </li>
      </router-link>
    </ul>
  </li>
  <router-link v-else-if="logout === 1" @click="handleLogOut" :to="to || ''">
    <li v-if="title" :class="color" class="rounded-2xl px-3 py-2">{{ title }}</li>
    <div
      class="w-20px h-20px p-8px flex items-center justify-center rounded-2xl bg-slate-600 shadow-sm transition-all hover:bg-slate-700 active:bg-slate-900"
      v-else
    >
      <div v-html="icon" />
    </div>
  </router-link>
  <router-link v-else :to="to || ''">
    <li v-if="title" :class="color" class="rounded-2xl px-3 py-2 text-black">{{ title }}</li>
    <div
      class="w-20px h-20px p-8px flex items-center justify-center rounded-2xl bg-slate-600 shadow-sm transition-all hover:bg-slate-700 active:bg-slate-900"
      v-else
    >
      <div v-html="icon" />
    </div>
  </router-link>
</template>

<style></style>
