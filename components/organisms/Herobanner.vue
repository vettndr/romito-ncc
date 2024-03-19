<script setup lang="ts">
import type { HerobannerProps } from "./Herobanner.props"
defineProps<HerobannerProps>()

const { isMobile } = useVViewport()
</script>

<template>
  <section class="organisms-herobanner overflow-x-hidden">
    <VSlider
      :items="slides"
      theme="homepage"
      :slides-per-view="1"
      effect="fade"
    >
      <template #default="{ item }">
        <VImage
          v-if="isMobile"
          v-bind="item.image.mobile"
          class="v-image-screen"
        />
        <VImage v-else v-bind="item.image" class="v-image-screen" />
        <div class="absolute inset-0 z-10 hero-background" />
        <div
          class="hero-wrapper absolute inset-x-0 z-20 top-1/2 -translate-y-1/2 flex flex-col gap-y-5 max-w-[300px] md:max-w-[650px] m-auto text-center"
        >
          <h2 class="title-herobanner-mobile md:title-herobanner text-white">
            {{ item.title }}
          </h2>
          <p class="title-main-mobile md:title-main text-white uppercase">
            {{ item.subtitle }}
          </p>
          <VButton v-if="item?.button" v-bind="item?.button" class="m-auto" />
        </div>
      </template>
    </VSlider>
  </section>
</template>
