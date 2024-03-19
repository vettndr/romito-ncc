<script setup lang="ts">
import type { VImageProps } from "./VImage.props"
const props = defineProps<VImageProps>()

if (props.preload) {
  useHead({
    link: [
      {
        rel: "preload",
        as: "image",
        fetchpriority: "high",
      },
    ],
  })
}
</script>

<template>
  <div class="v-image relative">
    <NuxtImg
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
      :preset="preset"
      :quality="100"
      provider="prismic"
      loading="lazy"
    />
  </div>
</template>
