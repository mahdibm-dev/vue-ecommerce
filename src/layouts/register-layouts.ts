import type { App } from 'vue'
import defaultLayout from './default-layout.vue'

export default function registerLayouts(app: App) {
  app.component('DefaultLayout', defaultLayout)
}
