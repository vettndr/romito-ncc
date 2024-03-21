<script setup lang="ts">
import type { TextContentProps } from "./Text.props"
defineProps<TextContentProps>()
</script>

<template>
  <section class="content-text">
    <OrganismsText v-bind="data" />
  </section>
</template>
