<script setup lang="ts">
import type { VHeaderProps } from "./VHeader.props"
defineProps<VHeaderProps>()

const { isTablet, isMobile } = useVViewport()
</script>

<template>
  <header>
    <MenuDesktop v-if="items && !isMobile && !isTablet" :items="items" />
    <MenuMobile
      v-if="(items && isMobile) || (items && !isMobile && isTablet)"
      :items="items"
    />
  </header>
</template>
