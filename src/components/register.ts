import type { App } from 'vue'
import Pagination from './v-pagination.vue'

export default function registerComponents(app: App) {
  app.component('VPagination', Pagination)
}
