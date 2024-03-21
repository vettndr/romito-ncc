<script setup lang="ts">
import type { VAccordionProps } from "./VAccordion.props"
defineProps<VAccordionProps>()

const isOpen = ref(false)

const setOpen = (val: boolean) => {
  isOpen.value = val
}
</script>

<template>
  <div class="v-accordion" :class="{ 'v-accordion-open': isOpen }">
    <Disclosure v-slot="{ open }">
      {{ setOpen(open) }}
      <DisclosureButton class="v-accordion-button">
        <span>{{ title }}</span>

        <VIconsPlus class="h-auto w-auto" :class="open && 'hidden'" />
        <VIconsMinus class="h-auto w-auto" :class="!open && 'hidden'" />
      </DisclosureButton>
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
      >
        <DisclosurePanel class="v-accordion-body">
          <div
            class="accordion-content rich-text-wrapper"
            v-html="content"
          ></div>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
