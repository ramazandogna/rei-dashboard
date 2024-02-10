<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import axios from 'axios'
import Button from '../../components/Button.vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import { useRouter } from 'vue-router'
type InputType = 'password' | 'text'

export default defineComponent({
  setup() {
    //helpers
    const toast = useToast()
    const router = useRouter()
    //refs
    const inputType = ref<InputType>('password')

    const togglePassword = () => {
      inputType.value = inputType.value === 'password' ? 'text' : 'password'
    }

    const auth = reactive({
      usernameOrEmail: '',
      password: ''
    })

    const handleSubmit = async () => {
      const { usernameOrEmail, password } = auth
      try {
        const response = await axios.post('http://localhost:8000/auth/login', {
          usernameOrEmail,
          password
        })
        const data = response.data
        if (data.error) {
          toast.error(data.error)
        } else {
          toast.success('Login success')
          setTimeout(() => {
            router.push('/')
          }, 1000)
        }
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      auth,
      handleSubmit,
      togglePassword,
      inputType
    }
  },
  components: {
    Button
  }
})
</script>

<template>
  <div class="gradient-background fixed inset-0 flex items-center justify-center">
    <div
      class="bg-bg sm:w-450px p-24px gap-16px fixed bottom-4 left-4 right-4 top-4 flex flex-col [box-shadow:_10px_0_10px_-5px_rgba(0,_0,_0,_0.5)] sm:left-auto"
    >
      <router-link to="/">
        <img
          class="w-50px -translate-x-50% absolute absolute right-4 top-4 mx-auto rounded-full opacity-60 shadow-lg transition-all hover:scale-105 hover:opacity-100 hover:shadow-2xl"
          src="../../assets/vue-svgrepo-com.svg"
          alt="dashboard-logo"
        />
      </router-link>
      <h1 class="mt-12px text-2xl font-bold">Login</h1>
      <div class="input">
        <i
          class="i-material-symbols-person-raised-hand-rounded text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.usernameOrEmail" type="text" placeholder=" " id="usernameOrEmail" />
        <label class="cursor-text" for="usernameOrEmail">Username or Email</label>
      </div>

      <div class="input">
        <i
          class="i-material-symbols-password text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.password" :type="inputType" placeholder=" " id="password" />
        <label class="cursor-text" for="password">Password</label>
        <div
          @click="togglePassword"
          class="w-42px z-4 right-14px h-42px -translate-y-50% hover:bg-#6236ff30 duration-400 absolute top-1/2 flex cursor-pointer items-center justify-center rounded-full transition-all"
        >
          <i class="h-24px w-24px i-line-md-watch-loop text-#00000090" />
        </div>
      </div>
      <router-link to="/forgot-password"
        ><p class="text-#9e9e9e80 text-13px cursor-pointer underline">Şifremi Unuttum</p></router-link
      >
      <div class="gap-16px w-100% flex items-center justify-end">
        <router-link to="/register">
          <div class="gap-16px px-16px py-8px flex items-center font-bold">
            <div class="i-material-symbols-back-to-tab w-20px h-20px" />
            <p class="underline">Register</p>
          </div>
        </router-link>
        <Button :buttonColor="'gradient-background-button'" title="Login" @click="handleSubmit" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* floating label */
.input {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #0000000d;
  border-radius: 4px;
}

input {
  border: none;
  flex-grow: 1;
  height: 46px;
  padding-top: 10px;
  background: transparent;
  font-size: 14px;
  font-weight: 300;
  transition: all 0.4s ease;
  border-radius: 4px;
  padding-left: 52px;
  z-index: 2;
}

.input input:focus {
  outline: none;
  border-bottom: 1px solid #6236ff;
  box-shadow: 0 1px 0 0 #6236ff;
}

label {
  left: 52px;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  color: #00000090;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-17px);
  font-size: 12px;
  color: #6236ff;
}
</style>
