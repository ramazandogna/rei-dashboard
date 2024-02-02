<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { navbarItems } from '../data'
import NavbarItem from './NavbarItem.vue'
import useSideMenuShow from '../hooks/sideMenu'
export default defineComponent({
  setup() {
    const { toggleSideMenu, isSideMenuOpen } = useSideMenuShow()
    const { value } = toRefs(isSideMenuOpen)

    return { navbarItems, toggleSideMenu, isSideMenuOpen: value }
  },
  components: { NavbarItem }
})
</script>

<template>
  <nav
    class="maxW bg-#f9fafb text-black! pl-1.5rem pr-1.5rem lg:ml-62 fixed inset-0 z-20 flex h-14 items-center"
  >
    <div
      @click="toggleSideMenu"
      class="hover:scale-101 flex h-12 w-12 cursor-pointer items-center justify-center shadow-sm transition-all hover:rotate-3 lg:hidden lg:items-stretch"
    >
      <div class="w-32px h-32px i-mdi-hamburger"></div>
    </div>
    <div class="flex w-full items-center justify-between">
      <h1 class="text-20px lg:pl-1.5rem gap-8px flex pl-1">
        Reî <span class="hidden lg:flex">Dashboard</span>
      </h1>
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
