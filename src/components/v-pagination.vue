<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()
defineEmits<{
  (e: 'gotoPrevPage'): void
  (e: 'gotoNextPage'): void
}>()
</script>

<template>
  <div class="gap-2 mt-auto flex justify-center py-4 items-center w-full">
    <button
      :disabled="currentPage === 1"
      class="btn-secondary max-w-fit text-white p-1"
      @click="$emit('gotoPrevPage')"
    >
      prev
    </button>
    <div>{{ `${currentPage}/${totalPages}` }}</div>
    <button
      :disabled="currentPage === totalPages"
      class="btn-secondary max-w-fit text-white p-1"
      @click="$emit('gotoNextPage')"
    >
      next
    </button>
  </div>
</template>
