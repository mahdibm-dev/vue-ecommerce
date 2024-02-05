<script setup lang="ts">
import router from '@/routes'
import ProductCard from './components/product-card.vue'
import ProductSkeleton from './components/product-skeleton.vue'
import { useProductsStore } from '@/stores/products'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const productStore = useProductsStore()
const { products, isLoading, pagination } = storeToRefs(useProductsStore())

onMounted(async () => {
  await productStore.getProducts({
    page: +(router.currentRoute.value.query.page as string) || 1,
    perPage: +(router.currentRoute.value.query.perPage as string) || 10
  })
  router.push({
    query: {
      ...router.currentRoute.value.query,
      page: router.currentRoute.value.query.page ?? 1,
      perPage: router.currentRoute.value.query.perPage ?? 10
    }
  })
})

const goToNextPage = async () => {
  if (pagination.value.currentPage < pagination.value.totalPages) {
    router.push({
      query: {
        ...router.currentRoute.value.query,
        page: pagination.value.currentPage + 1,
        perPage: router.currentRoute.value.query.perPage ?? 10
      }
    })
    await productStore.getProducts({
      page: pagination.value.currentPage + 1,
      perPage: +(router.currentRoute.value.query.perPage as string) || 10
    })
  }
}
const goToPrevPage = async () => {
  if (pagination.value.currentPage > 1) {
    router.push({
      query: {
        ...router.currentRoute.value.query,
        page: pagination.value.currentPage - 1,
        perPage: router.currentRoute.value.query.perPage ?? 10
      }
    })
    await productStore.getProducts({
      page: pagination.value.currentPage - 1,
      perPage: +(router.currentRoute.value.query.perPage as string) || 10
    })
  }
}
</script>

<template>
  <div class="container flex-1 flex flex-col mx-auto px-6 lg:px-10 md:px-4 py-10">
    <div
      v-if="isLoading"
      class="container mx-auto p-4 grid-col-1 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ProductSkeleton v-for="item in items" :key="item" />
    </div>
    <section
      v-if="!isLoading"
      class="grid-col-1 grid h-fit w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </section>
    <v-pagination
      :current-page="pagination.currentPage"
      :total-pages="pagination.totalPages"
      @goto-next-page="goToNextPage"
      @goto-prev-page="goToPrevPage"
    >
    </v-pagination>
  </div>
</template>
