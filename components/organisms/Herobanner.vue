<script setup lang="ts">
import type { HerobannerProps } from "./Herobanner.props"
defineProps<HerobannerProps>()

const { isMobile, isTablet, isDesktop } = useVViewport()
</script>

<template>
  <section class="organisms-herobanner">
    <div class="image-wrapper relative">
      <VImage v-if="isMobile" v-bind="image.mobile" class="v-image-full" />
      <VImage
        v-else-if="!isMobile && isTablet"
        v-bind="image.tablet"
        class="v-image-full"
      />
      <VImage v-else v-bind="image" class="v-image-screen" />
      <div class="absolute inset-0 z-10 hero-background" />
      <div
        class="hero-wrapper absolute inset-x-0 z-20 vertical-abs-centered grid-standard items-center"
      >
        <div
          class="texts col-span-full sm:col-span-8 lg:col-span-6 flex flex-col gap-y-6"
        >
          <h2
            class="title-herobanner-mobile sm:title-herobanner-mobile lg:title-herobanner text-white text-center lg:text-left"
          >
            {{ title }}
          </h2>
          <p
            class="text-white text-lg sm:text-xl lg:text-2xl font-jost text-center lg:text-left"
          >
            {{ subtitle }}
          </p>
        </div>
        <FormHeroContact v-if="isDesktop" />
      </div>
    </div>

    <div v-if="isMobile || isTablet" class="grid-standard py-8">
      <h3
        class="text-primary text-center title-form-ncc col-span-full sm:mt-4 mb-6"
      >
        Richiesta di NCC
      </h3>
      <FormContact class="col-span-full" />
    </div>
  </section>
</template>
