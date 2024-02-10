import { createApp } from 'vue'
import App from './App.vue'
//style
import './assets/style.css'
import 'virtual:uno.css'
import '@unocss/reset/eric-meyer.css'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.withCredentials = true

const app = createApp(App)
app.use(router)
app.mount('#app')
