<script lang="ts">
import { defineComponent, ref } from 'vue'
import { navbarItems } from '../data'
import NavbarItem from './NavbarItem.vue'
export default defineComponent({
  setup() {
    const show = ref(false)
    const toggleShow = () => {
      show.value = !show.value
    }
    return { toggleShow, show, navbarItems }
  },
  components: { NavbarItem }
})
</script>

<template>
  <nav
    class="lg:ml-24px z-99 maxW bg-#f9fafb text-black! pl-1.5rem pr-1.5rem fixed inset-0 flex h-14 items-center lg:pl-60"
  >
    <div
      class="hover:scale-101 flex h-12 w-12 cursor-pointer items-center justify-center shadow-sm transition-all hover:rotate-3 lg:hidden lg:items-stretch"
    >
      <div class="w-32px h-32px i-mdi-hamburger"></div>
    </div>
    <div class="flex w-full items-center justify-between">
      <h1 class="text-20px lg:pl-1.5rem pl-1">Reî Dashboard</h1>
      <ul class="gap-12px decoration-none mr-1 flex items-center">
        <NavbarItem
          v-for="(navItem, index) in navbarItems"
          :key="index"
          :title="navItem.title"
          :to="navItem.to"
          :hasDropDown="navItem.hasDropDown"
          :subItems="navItem.subItems"
          :color="navItem.color"
          :logout="navItem.logout"
        />
      </ul>
    </div>
  </nav>
</template>
