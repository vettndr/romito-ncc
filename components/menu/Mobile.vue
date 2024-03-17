<script setup lang="ts">
import type { MenuMobileProps } from "./Mobile.props"
defineProps<MenuMobileProps>()

const sticky = ref(false)

const { y } = useWindowScroll()
const { isOpen, setMobileMenu } = useMobileMenu()

const toggleMenu = (): void => {
  setMobileMenu(!isOpen.value)
}

watch(y, (newVal, oldVal) => {
  if (newVal >= 50) {
    sticky.value = true
  }

  if (newVal === 0) {
    sticky.value = false
  }
})
</script>

<template>
  <div class="menu-mobile grid-standard py-6" :class="{ 'is-sticky': sticky }">
    <div class="col-span-full flex items-center justify-center relative">
      <div class="logo-wrapper">
        <NuxtLink to="/" class="block relative">
          <span class="logo-mobile">ERICAZETATRAVEL</span>
        </NuxtLink>
      </div>
      <button
        class="block absolute left-0 vertical-abs-centered"
        aria-label="Open Menu"
        @click="toggleMenu()"
      >
        <VIconsToggle />
      </button>
    </div>
    <LazyVWrapsMobileMenu :items="items" v-if="isOpen" />
  </div>
</template>
