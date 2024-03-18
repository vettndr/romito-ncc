<script setup lang="ts">
import type { MenuMobileProps } from "./Mobile.props"
defineProps<MenuMobileProps>()

const label = ref("Menu")

const { isOpen, setMobileMenu } = useMobileMenu()

const toggleMenu = (): void => {
  setMobileMenu(!isOpen.value)
}
</script>

<template>
  <div class="menu-mobile bg-primary py-3 sm:py-4">
    <div class="grid-standard">
      <div class="col-span-full flex items-center relative">
        <div class="font-jost font-medium tracking-widest text-white text-base">
          Romito Roberto NCC
        </div>
        <button
          class="flex items-center gap-x-2 absolute right-0 vertical-abs-centered text-white"
          aria-label="Open Menu"
          @click="toggleMenu()"
        >
          <span class="text-xs font-jost font-light">{{ label }}</span>
          <VIconsToggle />
        </button>
      </div>
    </div>

    <LazyVWrapsMobileMenu :items="items" v-if="isOpen" />
  </div>
</template>
