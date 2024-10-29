"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface PostContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: PostContentProps) {
  return <MDXRemote {...content} />;
}
