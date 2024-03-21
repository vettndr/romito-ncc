<script setup lang="ts">
import type { FaqProps } from "./Faq.props"
defineProps<FaqProps>()
</script>

<template>
  <div
    class="organisms-faq content-space"
    :id="menuLink ? slugify(menuLink) : ''"
  >
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
        v-if="faqs?.length"
        class="col-span-full lg:col-span-10 lg:col-start-2 pt-10"
      >
        <VAccordion v-for="(faq, index) in faqs" :key="index" v-bind="faq" />
      </div>
    </div>
  </div>
</template>
