<script setup lang="ts">
import type { MenuMobileProps } from "~/components/menu/Mobile.props"
defineProps<MenuMobileProps>()

const { isOpen, setMobileMenu } = useMobileMenu()

const closeMenu = (): void => {
  setMobileMenu(false)
}
</script>

<template>
  <div class="v-wraps-mobilemenu">
    <VModal :isOpen="isOpen" @close="closeMenu()">
      <nav class="absolute vertical-abs-centered horizontal-abs-centered">
        <ul class="nav-list-mobile flex flex-col gap-y-6">
          <template v-for="(navItem, index) in items" :key="index">
            <li class="text-center">
              <NuxtLink
                :to="navItem.slug"
                @click.prevent="closeMenu()"
                class="uppercase font-jost font-medium tracking-widest text-primary text-base"
                >{{ navItem.label }}</NuxtLink
              >
            </li>
          </template>
        </ul>
      </nav>
    </VModal>
  </div>
</template>
