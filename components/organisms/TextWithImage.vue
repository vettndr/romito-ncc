<script setup lang="ts">
import type { TextWithImageProps } from "./TextWithImage.props"
defineProps<TextWithImageProps>()
</script>

<template>
  <div
    class="organisms-text-with-image content-space"
    :id="menuLink ? slugify(menuLink) : ''"
  >
    <div class="grid-standard sm:items-center">
      <div class="col-span-full sm:col-span-4 lg:col-span-5">
        <VImage v-bind="image" class="v-image-full v-image-rounded" />
      </div>
      <div
        class="col-span-full sm:col-span-4 lg:col-span-6 pt-10 sm:pt-0"
        :class="{ 'sm:order-first': inverted, 'lg:col-start-7': !inverted }"
      >
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
