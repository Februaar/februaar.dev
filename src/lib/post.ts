import fs from "fs";
import path from "path";
import { readdir } from "fs/promises";
import matter from "gray-matter";
import { Post, PostMatter } from "@/lib/types";

const postPath = path.resolve(process.cwd(), "src", "contents");

// MDX 파일 파싱
export const parsePost = async (postPath: string) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

// MDX 개요 파싱
const parsePostAbstract = async (postPath: string) => {
  const files = await readdir(postPath, { withFileTypes: true });

  const slug = files
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".mdx"))
    .map((file) => file.name.replace(".mdx", ""));

  return { slug };
};

// MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  return { ...grayMatter, content };
};

// post를 날짜 순으로 정렬
export const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};
