<script setup lang="ts"></script>
<template>
  <div class="shadow-center">
    <div class="container mx-auto flex w-full items-center justify-between px-6 lg:px-10 py-2">
      <router-link :to="{ name: 'store' }">
        <img
          src="/src/assets/images/logo.jpg"
          alt="logo"
          width="128"
          height="40"
          class="object-cover"
        />
      </router-link>
      <ul class="justify-end gap-x-2.5 text-sm font-semibold uppercase flex">
        <li class="flex px-4">
          <router-link :to="{ name: 'store' }" class="flex items-center"> Products </router-link>
        </li>
        <li class="flex px-4">
          <router-link :to="{ name: 'cart' }" class="flex items-center gap-x-1">
            <i class="icon-shopping-cart text-xl"></i>
            <span>0</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
