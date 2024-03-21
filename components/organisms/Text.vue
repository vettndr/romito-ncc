<script setup lang="ts">
import type { TextProps } from "./Text.props"
defineProps<TextProps>()
</script>

<template>
  <div class="organisms-text content-space">
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
    </div>
  </div>
</template>
