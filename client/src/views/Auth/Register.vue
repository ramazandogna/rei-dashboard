<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

//components
import Button from '../../components/Button.vue'
import { useRouter } from 'vue-router'

type InputType = 'password' | 'text'

export default defineComponent({
  setup() {
    //helpers
    const router = useRouter()
    const toast = useToast()
    //refs
    const inputType = ref<InputType>('password')

    const togglePassword = () => {
      inputType.value = inputType.value === 'password' ? 'text' : 'password'
    }

    const auth = reactive({
      name: '',
      surname: '',
      username: '',
      email: '',
      company: '',
      password: '',
      repassword: ''
    })

    const handleSubmit = async () => {
      if (auth.password !== auth.repassword) {
        toast.warning('Passwords do not match')
      } else {
        const { name, surname, username, email, company, password } = auth
        try {
          const response = await axios.post('http://localhost:8000/auth/register', {
            name,
            surname,
            username,
            email,
            company,
            password,
            userRole: 'user'
          })
          const data = response.data
          if (data.error) {
            toast.error(data.error)
          } else {
            toast.success('Register success, your are redirecting to login page.')
            setTimeout(() => {
              router.push('/login')
            }, 1000)
          }
        } catch (error) {
          console.error(error)
        }
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
          class="w-50px -translate-x-50% absolute right-4 top-4 mx-auto rounded-full opacity-60 shadow-lg transition-all hover:scale-105 hover:opacity-100 hover:shadow-2xl"
          src="../../assets/vue-svgrepo-com.svg"
          alt="dashboard-logo"
        />
      </router-link>
      <h1 class="mt-12px text-2xl font-bold">Register</h1>

      <div class="input">
        <i
          class="i-icon-park-solid-edit-name text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.name" type="text" placeholder=" " id="name" />
        <label class="cursor-text" for="name">Name</label>
      </div>
      <div class="input">
        <i
          class="i-fluent-rename-28-filled text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.surname" type="text" placeholder=" " id="surname" />
        <label class="cursor-text" for="surname">Surname</label>
      </div>
      <div class="input">
        <i
          class="i-material-symbols-person-raised-hand-rounded text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.username" type="text" placeholder=" " id="username" />
        <label class="cursor-text" for="username">Username</label>
      </div>
      <div class="input">
        <i
          class="i-material-symbols-stacked-email-outline text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.email" type="email" placeholder=" " id="email" />
        <label class="cursor-text" for="email">Email</label>
      </div>
      <div class="input">
        <i
          class="i-mdi-office-building-outline text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.company" type="text" placeholder=" " id="company" />
        <label class="cursor-text" for="company">Company</label>
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
      <div class="input">
        <i
          class="i-material-symbols-password text-#9e9e9e z-1 h-24px w-24px left-14px absolute flex h-full items-center"
        />
        <input v-model="auth.repassword" :type="inputType" placeholder=" " id="repassword" />
        <label class="cursor-text" for="repassword">Re-enter Password</label>
        <div
          @click="togglePassword"
          class="w-42px z-4 right-14px h-42px -translate-y-50% hover:bg-#6236ff30 duration-400 absolute top-1/2 flex cursor-pointer items-center justify-center rounded-full transition-all"
        >
          <i class="h-24px w-24px i-line-md-watch-loop text-#00000090" />
        </div>
      </div>
      <router-link class="max-w-110px" to="/forgot-password"
        ><p class="text-#9e9e9e80 text-13px cursor-pointer underline">Şifremi Unuttum</p></router-link
      >
      <div class="gap-16px w-100% flex items-center justify-end">
        <router-link to="/login">
          <div class="gap-16px px-16px py-8px flex items-center font-bold">
            <div class="i-material-symbols-back-to-tab h-20px w-20px" />
            <p class="underline">Back To Login</p>
          </div>
        </router-link>

        <Button :buttonColor="'gradient-background-button'" title="Register" @click="handleSubmit" />
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
