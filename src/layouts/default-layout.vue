<script setup lang="ts">
import AppFooter from './components/app-footer.vue'
import AppHeader from './components/app-header.vue'
</script>
<template>
  <AppHeader></AppHeader>
  <main class="min-h-[calc(100vh-366px)] flex">
    <slot></slot>
  </main>
  <AppFooter></AppFooter>
</template>
