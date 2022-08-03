import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'

const Gstore = reactive({ flashMessage: '' })

createApp(App).use(store).use(router).provide('Gstore', Gstore).mount('#app')
