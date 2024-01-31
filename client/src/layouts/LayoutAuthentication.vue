<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
//components
import Navbar from '../components/Navbar.vue'
import SideMenu from '../components/SideMenu.vue'
//hooks
import useSideMenuShow from '../hooks/sideMenu'
export default defineComponent({
  setup() {
    const isDark = ref<boolean>(false)
    const { isSideMenuOpen, toggleSideMenu } = useSideMenuShow()

    const readLocalStorage = () => {
      const storedIsDark = localStorage.getItem('isDark')
      isDark.value = storedIsDark === 'true'
    }

    const writeLocalStorage = () => {
      localStorage.setItem('isDark', isDark.value.toString())
    }
    onMounted(() => {
      readLocalStorage()
    })
    watch(isDark, () => {
      writeLocalStorage()
    })

    watch(isSideMenuOpen, () => {
      console.log('isSideMenuOpen:', isSideMenuOpen.value)
    })
    console.log('dark mode:', isDark.value)

    return { isDark, isSideMenuOpen, toggleSideMenu }
  },
  components: { Navbar, SideMenu }
})
</script>

<template>
  <div :class="{ dark: isDark }" class="font-[Open_Sans]">
    <Navbar :toggleSideMenu="toggleSideMenu" />
    <SideMenu :isSideMenuOpen="isSideMenuOpen" :toggleSideMenu="toggleSideMenu" />
    <div class="min-h-100vh lg:ml-24px mt-14 lg:pl-60">
      <slot></slot>
    </div>
  </div>
</template>
