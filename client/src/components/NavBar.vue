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
      class="mr-8px hover:scale-101 h-24px w-24px p-8px flex cursor-pointer items-center justify-center rounded shadow-sm transition-all hover:rotate-3 hover:bg-slate-100 active:bg-slate-300 lg:hidden lg:items-stretch"
    >
      <div class="w-20px h-20px i-charm-menu-hamburger"></div>
    </div>
    <div class="flex w-full items-center justify-between">
      <h1 class="text-20px lg:pl-1.5rem gap-8px flex cursor-pointer rounded py-2 pl-1 transition-all">
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
          :icon="navItem.icon"
        />
      </ul>
    </div>
  </nav>
</template>
