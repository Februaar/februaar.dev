"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ContentSection from "./ContentSection";
import CustomComponents from "./CustomComponents";

interface PostContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: PostContentProps) {
  return (
    <ContentSection>
      <MDXRemote {...content} components={CustomComponents} />
    </ContentSection>
  );
}
