<script setup lang="ts">
import { headerData } from "~/data/header"
import type { VHeaderProps } from "./VHeader.props"
defineProps<VHeaderProps>()

const { isTablet, isMobile } = useVViewport()
</script>

<template>
  <header>
    <MenuDesktop
      v-if="headerData && !isMobile && !isTablet"
      v-bind="headerData"
    />
    <MenuMobile
      v-if="(headerData && isMobile) || (headerData && !isMobile && isTablet)"
      v-bind="headerData"
    />
  </header>
</template>
