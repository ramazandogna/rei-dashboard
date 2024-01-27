import { createApp } from 'vue';
import App from './App.vue';
//style
import './assets/style.css';
import 'virtual:uno.css';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');