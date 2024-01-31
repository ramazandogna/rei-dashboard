import { ref } from 'vue'
//sidemenu
export default function useSideMenuShow() {
  const isSideMenuOpen = ref(false)
  const toggleSideMenu = () => {
    isSideMenuOpen.value = !isSideMenuOpen.value
    console.log(isSideMenuOpen.value)
  }
  return { isSideMenuOpen, toggleSideMenu }
}
