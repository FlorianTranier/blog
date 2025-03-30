<template>
  <div class="container">
    <header class="hero">
      <h1>Florian Tranier</h1>
      <div class="social-links">
        <a href="https://github.com/FlorianTranier" target="_blank">GitHub</a>
        <a
          href="https://bsky.app/profile/floriantranier.bsky.social"
          target="_blank"
          >Bluesky</a
        >
      </div>
      <p>
        Welcome to my corner of the web! I write about technology, software
        development, and document the journey of building various projects.
      </p>
    </header>

    <ClientOnly>
      <h1>Blog Posts</h1>
      <div>
        <article
          v-if="blogPosts && blogPosts.length > 0"
          v-for="doc in blogPosts"
          :key="doc.path"
          :to="doc.path"
        >
          <header>
            <NuxtLink :to="doc.path">
              <h2>{{ doc.title }}</h2>
            </NuxtLink>
            <p>
              {{ new Date(doc.date).toLocaleDateString() }}
            </p>
          </header>
          <p>{{ doc.description }}</p>
        </article>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const blogPosts = await queryCollection("blog")
  .select("title", "date", "path", "description")
  .order("date", "DESC")
  .all();

useSeoMeta({
  title: "Florian Tranier",
  description:
    "Welcome to my corner of the web! I write about technology, software development, and document the journey of building various projects.",
  ogTitle: "Florian Tranier",
  ogDescription:
    "Welcome to my corner of the web! I write about technology, software development, and document the journey of building various projects.",
  ogImage: "https://blog.tranier.dev/android-chrome-192x192.png",
  ogUrl: "https://blog.tranier.dev",
  twitterCard: "summary",
  ogType: "website",
  ogLocale: "en",
  ogSiteName: "Florian Tranier",
  ogImageWidth: 192,
  ogImageHeight: 192,
});
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
  background: var(--card-background-color);
  border-radius: var(--border-radius);
}

.hero h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.hero p {
  margin: 0;
  opacity: 0.85;
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
