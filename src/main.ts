import { createApp } from 'vue'
import App from '@/layouts/App.vue'
import router from '@/router'
import store from '@/store'
// Global scss styles
import '@/styles/main.scss';

createApp(App).use(store).use(router).mount('#app')
