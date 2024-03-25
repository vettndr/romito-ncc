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
  <div class="menu-mobile bg-primary">
    <div class="border-grey-300 border-b py-2 text-white">
      <div class="grid-standard">
        <div class="col-span-full">
          <NuxtLink
            to="https://wa.me/+393881222641"
            target="_blank"
            class="text-xs font-light tracking-[1.3px] flex justify-end gap-x-2 transition-opacity duration-300 hover:opacity-50 items-center"
            >Whatsapp <VIconsPhone class="w-[20px] h-[19px]"
          /></NuxtLink>
        </div>
      </div>
    </div>
    <div class="py-6 sm:py-8">
      <div class="grid-standard">
        <div class="col-span-full flex items-center relative">
          <div
            class="font-jost font-medium tracking-widest text-white text-base"
          >
            <VIconsLogo class="w-[33px] h-[26px]" />
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
    </div>

    <LazyVWrapsMobileMenu :items="items" v-if="isOpen" />
  </div>
</template>
