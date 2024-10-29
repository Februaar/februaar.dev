import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  context: string;
  image: string;
  tags: string[];
  pinned?: boolean;
  content: MDXRemoteSerializeResult;
};
