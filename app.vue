<script setup lang="ts">
const { public: envs } = useRuntimeConfig()
</script>

<template>
  <div class="app">
    <Head>
      <Link
        id="canonical"
        rel="canonical"
        :href="`${envs.BASE_URL}${$route.fullPath}`"
      />
    </Head>

    <NuxtPage />
    <VFooter />
  </div>
</template>
