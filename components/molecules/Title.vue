<script setup lang="ts">
import type { TitleProps } from "./Title.props"
const props = defineProps<TitleProps>()

const getShowTitle = computed(() => (props.showTitle ? props.showTitle : true))
const getTitleSize = computed(() => (props.titleSize ? props.titleSize : "h2"))
const getPositionText = computed(() =>
  props.position ? `text-${props.position}` : "text-center"
)
</script>

<template>
  <div class="molecules-title">
    <component
      v-if="getShowTitle"
      :is="getTitleSize"
      :class="`${getPositionText}`"
    >
      <span v-html="title" />
    </component>
  </div>
</template>
