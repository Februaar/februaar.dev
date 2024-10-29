import path from "path";
import { readdir } from "fs/promises";
import { Post } from "@/lib/types";

export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(), "src", "contents"); // contents 폴더 경로

  // .mdx 파일들만 필터링
  const files = (await readdir(postPath, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".mdx"))
    .map((file) => file.name);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const { metadata } = await import(`../contents/${filename}`);
      const slug = filename.replace(".mdx", ""); // 파일명에서 확장자 제거
      return { slug, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}