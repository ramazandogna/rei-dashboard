<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import SideMenuItem from './SideMenuItem.vue'
import { sideMenuItems } from '../data/index'

export default defineComponent({
  props: {
    isSideMenuOpen: {
      type: Boolean,
      default: true
    },
    toggleSideMenu: {
      type: Function as () => void, // Tipi () => void olarak belirtiliyor.
      default: () => {}
    }
  },
  setup(props) {
    const show = ref<boolean>(false)
    console.log('side menu show', props.isSideMenuOpen)

    watch(
      () => props.isSideMenuOpen,
      () => {
        show.value = props.isSideMenuOpen
        console.log('side menu show:', show.value)
      }
    )

    return {
      sideMenuItems,
      isSideMenuOpen: props.isSideMenuOpen,
      show
    }
  },
  components: { RouterLink, SideMenuItem }
})
</script>

<template>
  <aside
    :class="!show ? 'hidden lg:flex' : 'flex lg:flex'"
    class="z-100 animate-fade-in-left animate-duration-200 bg-#141c2e fixed inset-0 left-0 top-0 mb-2 ml-2 mt-2 w-60 overflow-hidden rounded-2xl text-white"
  >
    <div class="relative h-full w-full flex-col justify-center rounded-2xl">
      <div class="flex h-full flex-col">
        <div class="relative flex h-14 items-center justify-center rounded-t-2xl font-bold">
          <div>Hey, Name <br /></div>
          <div
            @click="toggleSideMenu"
            v-show="show"
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
        <div class="flex w-full cursor-pointer items-center rounded-b-2xl bg-blue-500 hover:bg-blue-700">
          <RouterLink class="flex cursor-pointer py-3 text-white" to="/styles">
            <div class="inline-flex h-6 w-16 flex-none items-center justify-center">
              <div class="i-material-symbols-account-balance w-18px h-18px"></div>
            </div>
            <span class="line-clamp-1 flex grow items-center text-ellipsis pr-12">Logout</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<style></style>
