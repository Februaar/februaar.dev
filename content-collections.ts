import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "contents",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    pinned: z.boolean(),
  }),
});

export default defineConfig({
  collections: [posts],
});
