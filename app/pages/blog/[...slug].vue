<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value.title,
  titleTemplate: "%s | Florian Tranier",
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogImage:
    page.value.ogImage ?? "https://blog.tranier.dev/android-chrome-192x192.png",
  ogUrl: page.value.ogUrl ?? "https://blog.tranier.dev",
  twitterCard: "summary",
  ogType: "website",
  ogLocale: "en",
  ogSiteName: "Florian Tranier",
  ogImageWidth: 192,
  ogImageHeight: 192,
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" class="container" />
</template>

<style scoped>
.container {
  padding: 2rem;
}
</style>
