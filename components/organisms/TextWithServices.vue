<script setup lang="ts">
import type { TextWithServicesProps } from "./TextWithServices.props"
defineProps<TextWithServicesProps>()

const { isMobile, isTablet, isDesktop } = useVViewport()
</script>

<template>
  <div class="organisms-text-with-services content-space">
    <div class="grid-standard sm:items-center">
      <div class="col-span-full sm:col-span-4 lg:col-span-5">
        <VImage v-bind="image" class="v-image-full v-image-rounded" />
      </div>
      <div
        class="col-span-full sm:col-span-4 lg:col-span-6 lg:col-start-7 pt-10 sm:pt-0"
      >
        <MoleculesTitle v-bind="title" />
        <div class="pt-6 rich-text-wrapper" v-html="text" />
        <VButton
          v-if="button && button?.path && button?.label"
          v-bind="button"
          class="button mt-6"
        />
        <div
          v-if="services?.length && isDesktop"
          class="grid grid-cols-6 gap-4 mt-6"
        >
          <MoleculesService
            v-for="(service, index) in services"
            v-bind="service"
            :key="index"
            class="lg:col-span-3"
          />
        </div>
      </div>
    </div>
    <div
      class="grid-standard mt-10"
      v-if="services?.length && (isTablet || isMobile)"
    >
      <div
        class="col-span-full sm:col-span-6 sm:col-start-2 grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-6"
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
