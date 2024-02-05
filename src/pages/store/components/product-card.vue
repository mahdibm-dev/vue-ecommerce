<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{ product: Product }>()
</script>
<template>
  <div class="flex flex-col shadow-xl">
    <img :src="product.image" :alt="product.name" class="h-96 w-full block" />
    <div class="flex flex-1 flex-col gap-y-2 px-4 py-2 justify-between">
      <div class="text-xl">{{ product.name }}</div>
      <div>{{ product.price.toFixed(2) }}€</div>
      <button class="btn-primary text-white">add to cart</button>
    </div>
  </div>
</template>
