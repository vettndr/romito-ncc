<script setup lang="ts">
import type { FaqContentProps } from "./Faq.props"
defineProps<FaqContentProps>()
</script>

<template>
  <section class="content-faq">
    <OrganismsFaq v-bind="data" />
  </section>
</template>
