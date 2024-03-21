<script setup lang="ts">
const route = useRoute()
const { data: dataHome, error: errorHome } = await useFetch(
  `/api/fetchHome/home/${
    route?.query?.ref ? encodeURIComponent(route?.query?.ref as string) : ""
  }`
)

if (errorHome.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  })
}

const structuredDataHome = computed(() => ({
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: dataHome.value?.seo?.meta_title,
  inLanguage: "it_IT",
}))

useHead({
  script: [
    {
      id: "structureddataHome",
      innerHTML: JSON.stringify(structuredDataHome.value),
      type: "application/ld+json",
    },
  ],
})

useSeoMeta({
  title: dataHome.value?.seo?.meta_title,
  ogTitle: dataHome.value?.seo?.meta_title,
  description: dataHome.value?.seo?.meta_description,
  ogDescription: dataHome.value?.seo?.meta_description,
  ogImage: dataHome.value?.seo?.meta_image?.url,
  twitterTitle: dataHome.value?.seo?.meta_title,
  twitterImage: "summary",
  ogLocale: "it_IT",
  ogType: "website",
})
</script>

<template>
  <main class="min-h-screen">
    <VHeader :items="dataHome?.items" />
    <OrganismsHerobanner
      v-if="dataHome?.herobanner"
      v-bind="dataHome?.herobanner"
    />
    <VDynamicContent v-if="dataHome?.content" :components="dataHome?.content" />
  </main>
</template>
