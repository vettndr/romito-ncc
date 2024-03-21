<script setup lang="ts">
import type { ContactContentProps } from "./Contact.props"
defineProps<ContactContentProps>()
</script>

<template>
  <section class="content-contact">
    <OrganismsContact v-bind="data" />
  </section>
</template>
