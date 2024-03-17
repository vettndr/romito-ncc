<script setup lang="ts">
// const { data: dataHome, error: errorHome } = await useFetch(
//   `/api/fetchHome/home`
// )

// if (errorHome.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: "Page Not Found",
//     fatal: true,
//   })
// }

// useSeoMeta({
//   title: dataHome.value?.seo?.meta_title,
//   ogTitle: dataHome.value?.seo?.meta_title,
//   description: dataHome.value?.seo?.meta_description,
//   ogDescription: dataHome.value?.seo?.meta_description,
// })
</script>

<template>
  <div class="homepage min-h-screen">
    <!-- <OrganismsHerobanner
      v-if="dataHome?.herobanner"
      v-bind="dataHome?.herobanner"
    />
    <VDynamicContent v-if="dataHome?.content" :components="dataHome?.content" /> -->
  </div>
</template>
