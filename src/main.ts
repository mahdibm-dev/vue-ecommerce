import '@/style/globals.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routes'
import registerLayouts from './layouts/register-layouts'
import registerComponents from './components/register'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerLayouts(app)
registerComponents(app)

app.mount('#app')
