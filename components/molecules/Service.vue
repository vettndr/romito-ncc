<script setup lang="ts">
import type { ServiceProps } from "./Service.props"
defineProps<ServiceProps>()
</script>

<template>
  <div
    class="molecules-service py-6 px-3 sm:p-4 lg:p-6 rounded-lg bg-white flex flex-col sm:gap-y-4 lg:gap-y-6"
  >
    <h3
      class="font-jost text-base sm:text-lg font-medium text-center text-primary"
    >
      {{ title }}
    </h3>
    <div class="font-jost text-xs sm:text-sm text-paragraph" v-html="desc" />
  </div>
</template>
