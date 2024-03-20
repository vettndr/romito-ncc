<script setup lang="ts">
import type { TextAndServicesContentProps } from "./TextAndServices.props"
defineProps<TextAndServicesContentProps>()
</script>

<template>
  <section class="content-text-and-services">
    <OrganismsTextWithServices v-bind="data" />
  </section>
</template>
