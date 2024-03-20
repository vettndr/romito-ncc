<script setup lang="ts">
import type { VDynamicContentProps } from "./VDynamicContent.props"
defineProps<VDynamicContentProps>()

const getComponent = (name: string) => {
  return "Content" + capitalize(name)
}
</script>

<template>
  <component
    :is="getComponent(component.name)"
    v-for="(component, index) in components"
    :key="component.id + index"
    v-bind="component.props"
  />
</template>
