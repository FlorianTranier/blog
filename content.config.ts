import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        type: "page",
        source: "blog/**.md",
        schema: z.object({
          title: z.string(),
          date: z.date(),
        }),
      })
    ),
  },
});
