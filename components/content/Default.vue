<script setup lang="ts">
import type { DefaultContentProps } from "./Default.props"
defineProps<DefaultContentProps>()
</script>

<template>
  <div class="default-content">
    <div class="grid-standard">
      <div class="col-span-full">
        <h2>{{ data }} - Cms Content</h2>
      </div>
    </div>
  </div>
</template>
