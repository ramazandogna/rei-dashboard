<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import NavBar from '../components/NavBar.vue'
import SideMenu from '../components/SideMenu.vue'

export default defineComponent({
  setup() {
    const isDark = ref<boolean>(false)
    const readLocalStorage = () => {
      const storedIsDark = localStorage.getItem('isDark')
      // If the stored value is present, use it; otherwise, use the default value false
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
    console.log(isDark.value)
    return { isDark }
  },
  components: { NavBar, SideMenu }
})
</script>

<template>
  <div :class="{ dark: isDark }" class="font-[Open_Sans]">
    <NavBar />
    <SideMenu mr- />
    <div class="lg:ml-24px mt-14 lg:pl-60">
      <slot></slot>
    </div>
  </div>
</template>