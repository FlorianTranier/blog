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
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogImage: page.value.ogImage,
  ogUrl: page.value.ogUrl,
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
