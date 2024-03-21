<script setup lang="ts">
import type { ContactProps } from "./Contact.props"
defineProps<ContactProps>()
</script>

<template>
  <div class="organisms-contact content-space">
    <div class="grid-standard">
      <div class="col-span-full lg:col-span-10 lg:col-start-2 pt-10 sm:pt-0">
        <MoleculesTitle v-bind="title" />
        <div class="pt-6 rich-text-wrapper text-center" v-html="text" />
        <VButton
          v-if="button && button?.path && button?.label"
          v-bind="button"
          class="button mt-6"
        />
        <FormContact class="mt-9 sm:mx-10 lg:mx-16" />
      </div>
    </div>
  </div>
</template>
