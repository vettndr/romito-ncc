<script setup lang="ts">
import type { TextAndImageContentProps } from "./TextAndImage.props"
defineProps<TextAndImageContentProps>()
</script>

<template>
  <section class="content-text-and-image">
    <OrganismsTextWithImage v-bind="data" />
  </section>
</template>
