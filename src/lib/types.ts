import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostMatter {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  pinned?: boolean;
}

export interface Post extends PostMatter {
  slug: string;
  content: MDXRemoteSerializeResult;
}
