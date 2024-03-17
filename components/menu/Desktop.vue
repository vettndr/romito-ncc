<script setup lang="ts">
import type { MenuDesktopProps } from "./Desktop.props"
defineProps<MenuDesktopProps>()
</script>

<template>
  <div class="menu-desktop bg-primary">
    <div class="grid-standard">
      <nav class="col-span-10" aria-label="Main">
        <ul class="nav-list-desktop">
          <li v-for="(navItem, index) in items" :key="index">
            <NuxtLink :to="navItem.slug">{{ navItem.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="col-span-2">
        <NuxtLink
          to="https://wa.me/3402786208"
          target="_blank"
          class="text-base tracking-[1.3px] flex justify-end gap-x-2 transition-opacity duration-300 hover:opacity-50"
          >Whatsapp <VIconsPhone
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>
