<script setup lang="ts"></script>
<template>
  <div class="flex flex-col bg-dark w-auto">
    <footer
      class="container mx-auto flex justify-between flex-col gap-x-4 gap-y-8 px-4 pb-[85px] pt-24 text-white md:flex-row"
    >
      <div>
        <div class="px-2.5">
          <ul class="flex flex-col gap-y-2">
            <li class="flex items-center gap-x-4 text-base">
              <i class="icon-map-pin text-base"></i>
              <span>Address: Piazza Arcole, 4 - 20143, Milano, Italy</span>
            </li>
            <li class="flex items-center gap-x-4 text-base">
              <i class="icon-mail text-base"></i>
              <span>The Level S.r.l VAT No: IT 12627050961</span>
            </li>
            <li class="flex items-center gap-x-4 text-base">
              <i class="icon-phone text-base"></i>
              <span>T: +39 02 87287200</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="px-2.5">
          <div>
            <h3 class="mb-10 text-lg uppercase text-white underline underline-offset-[20px]">
              Quick Links
            </h3>
          </div>
          <ul class="flex flex-col gap-y-2">
            <li id="menu-item-400">
              <router-link :to="{ name: 'store' }">products</router-link>
            </li>
            <li id="menu-item-398">
              <router-link :to="{ name: 'cart' }">cart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
