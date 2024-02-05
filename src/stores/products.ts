import api from '@/services/api'
import type { Product, ProductFilterQuery } from '@/types'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products-store', {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
    pagination: {
      currentPage: 0,
      totalPages: 0,
      totalItems: 0
    },
    error: null as Error | null,
    message: null as string | null
  }),
  actions: {
    async dehydrate() {
      this.$reset()
    },
    async getProducts(queries?: ProductFilterQuery) {
      this.isLoading = true
      this.error = null
      try {
        const response = await api.get('/product', { params: queries ?? { page: 1, perPage: 10 } })
        this.products = response.data.products
        this.pagination = {
          currentPage: response.data.currentPage,
          totalPages: response.data.totalPages,
          totalItems: response.data.totalItems
        }
      } catch (err: any) {
        this.error = err?.response?.data
      } finally {
        this.isLoading = false
      }
    }
  }
})
// 27 0202 10
