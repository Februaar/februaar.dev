import path from "path";
import { readdir, readFile } from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import { Post } from "@/lib/types";

export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(), "src", "contents"); // contents 폴더 경로

  // .mdx 파일들만 필터링
  const files = (await readdir(postPath, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".mdx"))
    .map((file) => file.name);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postPath, filename);
      const fileContent = await readFile(filePath, "utf-8");

      // next-mdx-remote로 MDX 콘턴체를 직렬화하고 메타데이터 추출
      const mdxSource = await serialize(fileContent, {
        parseFrontmatter: true,
      });
      const { metadata } = await import(`../contents/${filename}`);
      const slug = filename.replace(".mdx", ""); // 파일명에서 확장자 제거

      return {
        slug,
        ...mdxSource.frontmatter, // 메타데이터 추출
        content: mdxSource, // MDX 본문 포함
        ...metadata,
      };
    })
  );

  return posts;
}
