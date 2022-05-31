import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const routers = createRouter({
    history: createWebHashHistory(),
    routes: router
})

const app = createApp(App)
app.use(routers)
app.use(ELementPlus)
app.mount("#app")
