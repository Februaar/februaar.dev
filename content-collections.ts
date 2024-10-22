import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "src/contents",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    pinned: z.boolean(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [],
      remarkPlugins: [],
    });

    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
