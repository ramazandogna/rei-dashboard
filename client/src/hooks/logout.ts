import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export default function useLogout() {
  const router = useRouter()
  const toast = useToast()
  const handleLogout = async () => {
    try {
      await axios.get('/auth/logout')
      localStorage.removeItem('userData')
      toast.error('Logged out successfully')
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      router.push('/login')
    }, 1000)
  }

  return { handleLogout }
}
