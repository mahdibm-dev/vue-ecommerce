import '@/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routes'
import registerLayouts from './layouts/register-layouts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerLayouts(app)

app.mount('#app')
