<script setup lang="ts">
import type { MenuDesktopProps } from "./Desktop.props"
defineProps<MenuDesktopProps>()
</script>

<template>
  <div class="menu-desktop bg-primary">
    <div class="grid-standard items-center">
      <div class="col-span-1">
        <VIconsLogo class="w-[53px] h-[43px]" />
      </div>
      <nav class="col-span-7 col-start-3" aria-label="Main">
        <ul class="nav-list-desktop">
          <li v-for="(navItem, index) in items" :key="index">
            <NuxtLink :to="`#${navItem?.slug}`">{{ navItem.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="col-span-2">
        <NuxtLink
          to="https://wa.me/3881222641"
          target="_blank"
          class="text-base tracking-[1.3px] flex justify-end gap-x-2 transition-opacity duration-300 hover:opacity-50"
          >Whatsapp <VIconsPhone
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>
