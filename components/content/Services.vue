<script setup lang="ts">
import type { ServicesContentProps } from "./Services.props"
defineProps<ServicesContentProps>()
</script>

<template>
  <section class="content-services">
    <OrganismsServices v-bind="data" />
  </section>
</template>
