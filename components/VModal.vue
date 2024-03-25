<script setup lang="ts">
import type { VModalProps } from "./VModal.props"
defineProps<VModalProps>()

const emit = defineEmits<{
  (e: "close"): void
}>()

const closeModal = () => {
  emit("close")
}
</script>

<template>
  <div class="v-modal">
    <TransitionRoot
      :show="isOpen"
      as="template"
      enter="duration-300 ease-in"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-out"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Dialog @close="closeModal" class="relative z-50">
        <TransitionChild
          enter="duration-300 ease-in"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-out"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0" aria-hidden="true" />
        </TransitionChild>
        <TransitionChild
          enter="duration-300 delay-300 ease-in"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-out"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-background bg-opacity-80 backdrop-blur-[25px]"
          >
            <DialogPanel class="h-full w-full">
              <div class="h-full w-full relative overflow-y-scroll">
                <div
                  class="padded py-[18px] flex items-center justify-end gap-x-2"
                >
                  <span class="text-xs font-jost font-light">Chiudi</span>
                  <button
                    class="block outline-none"
                    @click="closeModal"
                    aria-label="Chiudi"
                  >
                    <VIconsClose />
                  </button>
                </div>
                <slot />
              </div>
            </DialogPanel>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
