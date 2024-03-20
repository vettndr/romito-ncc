<script setup lang="ts">
import type { TextWithImageProps } from "./TextWithImage.props"
defineProps<TextWithImageProps>()
</script>

<template>
  <div class="organisms-text-with-image content-space">
    <div class="grid-standard">
      <!-- <div
        class="col-span-full flex flex-col md:flex-row items-center bg-accent"
      >
        <div class="w-full mt-[60px] md:mt-0 md:w-1/2">
          <VImage v-bind="image" class="v-image-full" />
        </div>
        <div
          class="w-4/5 md:w-1/2 order-first md:order-none md:grid md:gapped md:grid-cols-6"
        >
          <div class="mt-[60px] md:mt-0 md:col-span-4 md:col-start-2">
            <MoleculesTitle v-bind="title" />
            <p v-if="subtitle" class="title-card text-black text-center pt-5">
              {{ subtitle }}
            </p>
            <div class="text pt-[68px] rich-text-wrapper" v-html="text" />
            <VButton
              v-if="button && button?.path && button?.label"
              v-bind="button"
              class="m-auto mt-[30px]"
            />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
