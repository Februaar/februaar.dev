"use client";

import { MDXRemote } from "next-mdx-remote";
import { Post } from "@/lib/types";

interface FilteredPostListProps {
  posts: Post[];
}

export default function FilteredPostList({ posts }: FilteredPostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.context}</p>
          <time>{post.publishDate}</time>
          <MDXRemote {...post.content} />
        </div>
      ))}
    </div>
  );
}
