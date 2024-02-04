import { reactive } from 'vue'

const isSideMenuOpen = reactive({
  value: false
})

export default function useSideMenuShow() {
  const toggleSideMenu = () => {
    isSideMenuOpen.value = !isSideMenuOpen.value
    console.log(isSideMenuOpen.value)
  }
  return { toggleSideMenu, isSideMenuOpen }
}
