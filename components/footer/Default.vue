<script setup lang="ts">
import type { FooterDefaultProps } from "./Default.props"
const props = defineProps<FooterDefaultProps>()
</script>

<template>
  <footer class="bg-white border-primary border-t-2">
    <div class="grid-standard lg:py-8">
      <div class="lg:col-span-3">
        <p class="text-primary font-medium">
          frase per noleggio conducente info paragrafo breve descrizione
        </p>
      </div>
      <div class="lg:col-span-2 lg:col-start-6">
        <p>
          <span class="text-primary font-medium">Sede:</span><br />
          Via indirizzo, 23<br />
          33333, Citta (RO)<br />
          <span class="text-primary font-medium">P.Iva:</span> 333333333
        </p>
      </div>
      <div class="lg:col-span-3 lg:col-start-9">
        <p>
          <span class="text-primary font-medium">Telefono:</span><br />
          <NuxtLink to="tel:+3934033333333">+340 33333333</NuxtLink><br />
          <span class="text-primary font-medium">Email: </span>
          <NuxtLink to="mailto:romitorobertoncc@gmail.com"
            >romitorobertoncc@gmail.com</NuxtLink
          >
        </p>
      </div>
    </div>
    <div class="grid-standard lg:pb-8">
      <div class="lg:col-span-full">
        <p class="text-xs text-grey-300">
          <NuxtLink to="/">Privacy Policy</NuxtLink> |
          <NuxtLink to="/">Cookie Policy</NuxtLink> - Copyright @ Romito Roberto
          NCC
          <MoleculesVCurrentYear />
        </p>
      </div>
    </div>
  </footer>
</template>
