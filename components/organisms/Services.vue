<script setup lang="ts">
import type { ServicesProps } from "./Services.props"
defineProps<ServicesProps>()
</script>

<template>
  <div class="organisms-services content-space">
    <div class="grid-standard">
      <div class="col-span-full lg:col-span-10 lg:col-start-2 pt-10 sm:pt-0">
        <MoleculesTitle v-bind="title" />
        <div class="pt-6 rich-text-wrapper" v-html="text" />
        <VButton
          v-if="button && button?.path && button?.label"
          v-bind="button"
          class="button mt-6"
        />
      </div>
      <div
        class="col-span-full grid grid-cols-4 sm:grid-cols-9 lg:grid-cols-12 gap-4 lg:gap-6 mt-20"
        v-if="services?.length"
      >
        <MoleculesService
          v-for="(service, index) in services"
          v-bind="service"
          :key="index"
          class="col-span-full sm:col-span-3"
        />
      </div>
    </div>
  </div>
</template>
