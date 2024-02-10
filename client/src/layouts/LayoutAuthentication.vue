<script lang="ts">
import { defineComponent, ref, onMounted, watch, reactive } from 'vue'
//components
import Navbar from '../components/Navbar.vue'
import SideMenu from '../components/SideMenu.vue'
import { UserResponse } from '../types/types'
import axios from 'axios'
//hooks
export default defineComponent({
  setup() {
    const isDark = ref<boolean>(false)
    const userResponse = reactive<UserResponse>({
      id: 0,
      name: '',
      surname: '',
      username: '',
      email: '',
      userRole: '',
      company: ''
    })

    const readLocalStorage = () => {
      const storedIsDark = localStorage.getItem('isDark')
      isDark.value = storedIsDark === 'true'
    }

    const writeLocalStorage = () => {
      localStorage.setItem('isDark', isDark.value.toString())
    }

    const fetchUserFromAPI = async () => {
      try {
        const response = await axios.get('/auth/user')
        const userData = response.data
        localStorage.setItem('userData', JSON.stringify(userData))
        updateUserResponse(userData)
      } catch (error) {
        console.log(error)
      }
    }

    const updateUserResponse = (userData: UserResponse) => {
      userResponse.id = userData.id
      userResponse.name = userData.name
      userResponse.surname = userData.surname
      userResponse.username = userData.username
      userResponse.email = userData.email
      userResponse.userRole = userData.userRole
      userResponse.company = userData.company
    }

    const user = () => {
      const userDataString = localStorage.getItem('userData')
      if (userDataString) {
        const userData = JSON.parse(userDataString)
        updateUserResponse(userData)
      } else {
        fetchUserFromAPI()
      }
    }

    onMounted(() => {
      readLocalStorage()
      user()
    })
    watch(isDark, () => {
      writeLocalStorage()
    })

    console.log('dark mode:', isDark.value)

    return { isDark, userResponse }
  },
  components: { Navbar, SideMenu }
})
</script>

<template>
  <div :class="{ dark: isDark }">
    <Navbar />
    <SideMenu />
    <div class="min-h-100vh lg:ml-24px mt-14 lg:pl-60">
      <slot></slot>
    </div>
  </div>
</template>
