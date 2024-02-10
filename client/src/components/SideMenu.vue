<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import SideMenuItem from './SideMenuItem.vue'
import { sideMenuItems } from '../data/index'
import useSideMenuShow from '../hooks/sideMenu'
import useLogout from '../hooks/logout'

export default defineComponent({
  setup() {
    const { toggleSideMenu, isSideMenuOpen } = useSideMenuShow()
    const { handleLogout } = useLogout()
    const { value } = toRefs(isSideMenuOpen)

    return {
      sideMenuItems,
      toggleSideMenu,
      isSideMenuOpen: value,
      handleLogout
    }
  },
  components: { RouterLink, SideMenuItem }
})
</script>

<template>
  <aside
    :class="!isSideMenuOpen ? 'hidden lg:flex' : 'flex lg:flex'"
    class="z-100 animate-fade-in-left animate-duration-200 bg-#141c2e fixed inset-0 left-0 top-0 mb-2 ml-2 mt-2 w-60 overflow-hidden rounded text-white"
  >
    <div class="relative h-full w-full flex-col justify-center rounded">
      <div class="flex h-full flex-col">
        <div class="rounded-t- relative flex h-14 items-center justify-center font-bold">
          <div>Hey, Name <br /></div>
          <div
            @click="toggleSideMenu"
            v-show="isSideMenuOpen"
            class="i-material-symbols:close-small-outline-rounded h-30px text-35px w-30px -translate-y-50% absolute right-3 top-1/2 block cursor-pointer lg:hidden"
          ></div>
        </div>
        <div class="bg-#1f2937 flex flex-grow overflow-y-auto">
          <ul class="flex w-full flex-col">
            <SideMenuItem
              v-for="(menuItem, index) in sideMenuItems"
              :key="index"
              :title="menuItem.title"
              :icon="menuItem.icon"
              :to="menuItem.to"
              :hasSubMenu="menuItem.hasSubMenu"
              :subItems="menuItem.subItems"
            />
          </ul>
        </div>
        <div @click="handleLogout" class="gradient-background flex w-full cursor-pointer items-center">
          <RouterLink class="text-text flex cursor-pointer py-3" to="/login">
            <div class="inline-flex h-6 w-16 flex-none items-center justify-center">
              <div class="i-line-md-log-out w-18px h-18px"></div>
            </div>
            <span class="line-clamp-1 flex grow items-center text-ellipsis pr-12">Logout</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<style></style>
