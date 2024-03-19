<script setup lang="ts">
import type { HerobannerProps } from "./Herobanner.props"
defineProps<HerobannerProps>()

const { isMobile, isTablet } = useVViewport()
</script>

<template>
  <section class="organisms-herobanner relative">
    <VImage v-if="isMobile" v-bind="image.mobile" />
    <VImage v-else-if="!isMobile && isTablet" v-bind="image.tablet" />
    <VImage v-else v-bind="image" class="v-image-screen" />
    <div class="absolute inset-0 z-10 hero-background" />
    <div
      class="hero-wrapper absolute inset-x-0 z-20 vertical-abs-centered grid-standard items-center"
    >
      <div class="texts lg:col-span-6 flex flex-col gap-y-6">
        <h2
          class="title-herobanner-mobile sm:title-herobanner-mobile lg:title-herobanner text-white"
        >
          {{ title }}
        </h2>
        <p class="text-white text-lg sm:text-xl lg:text-2xl font-jost">
          {{ subtitle }}
        </p>
      </div>
      <FormHeroContact />
    </div>
  </section>
</template>
