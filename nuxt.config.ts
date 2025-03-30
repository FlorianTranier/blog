// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare_pages",
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-04-03",
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.fuchsia.min.css",
        },
      ],
    },
  },
});
