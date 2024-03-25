<script setup lang="ts">
import type { FooterDefaultProps } from "./Default.props"
const props = defineProps<FooterDefaultProps>()
</script>

<template>
  <footer class="bg-white border-primary border-t-2">
    <div class="grid-standard py-8">
      <div class="col-span-full pb-6 lg:pb-0 lg:col-span-3">
        <p class="text-primary font-medium">
          Romito Roberto NCC è il tuo noleggio con conducente di fiducia.
        </p>
      </div>
      <div
        class="col-span-full pb-6 sm:col-span-2 lg:col-span-2 lg:col-start-6"
      >
        <p>
          <span class="text-primary font-medium">Sede Legale:</span><br />
          Via Svizzera, 6<br />
          35127, Padova (PD)<br />
          <span class="text-primary font-medium">P.Iva:</span> 05019830289
        </p>
        <br />
        <p>
          <span class="text-primary font-medium">Sede:</span><br />
          Via Sabbionara, 76<br />
          35045, Ospedaletto Euganeo (PD)
        </p>
      </div>
      <div class="col-span-full sm:col-span-2 lg:col-span-3 lg:col-start-9">
        <p>
          <span class="text-primary font-medium">Telefono:</span><br />
          <NuxtLink to="tel:+393294164902">+329 4164902</NuxtLink><br />
          <NuxtLink to="tel:+393881222641">+388 1222641</NuxtLink><br />
          <span class="text-primary font-medium">Email: </span>
          <NuxtLink to="mailto:romitorobertoncc@gmail.com"
            >romitorobertoncc@gmail.com</NuxtLink
          >
        </p>
      </div>
    </div>
    <div class="grid-standard pb-8">
      <div class="col-span-full">
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
