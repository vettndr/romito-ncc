<script setup lang="ts">
import type { VButtonProps } from "./VButton.props"
defineProps<VButtonProps>()
</script>

<template>
  <NuxtLink :target="target" :to="path" class="v-button">
    {{ label }}
    <slot name="custom-icon" />
  </NuxtLink>
</template>
