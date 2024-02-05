<script setup lang="ts"></script>
<template>
  <div class="flex flex-col gap-y-2 border-2 border-gray-100">
    <div class="p-4">
      <div class="h-56 animate-pulse bg-slate-200"></div>
    </div>
    <div class="content px-4 pb-4">
      <header class="h-10">
        <h3 class="h-4 w-2/3 animate-pulse bg-slate-200 text-sm"></h3>
      </header>
      <div class="price mb-3 font-medium">
        <div class="h-4 w-1/2 animate-pulse bg-slate-200"></div>
      </div>
      <div class="buttons flex gap-x-2">
        <button
          type="button"
          class="flex-1 animate-pulse rounded bg-slate-200 px-1 text-sm font-semibold text-transparent"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>
