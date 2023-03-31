import { createApp } from 'vue'
import '../src/style/style.scss'
import App from './App.vue'
import router from './router'
import api from './api/index'
import 'uno.css'
import '@unocss/reset/tailwind.css';
import { setupStore } from './stores';


function setupApp() {
  const app = createApp(App)
  setupStore(app);
  app.provide('$api', api)
  app.use(router)
  app.mount('#app')
}
setupApp();
