import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppHeaderVue from './components/AppHeader.vue';

const app = createApp(App)

app.use(router)

app.mount('#app')
