import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import api from './api/index'

const app = createApp(App)

app.provide('$api', api)
app.use(router)
app.mount('#app')
