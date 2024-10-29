import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";

export async function getSortedPostsByDate(): Promise<Post[]> {
  const posts = await getPosts();

  if (posts.length === 0) {
    return [];
  }

  // 날짜에 따라 내림차순 정렬
  return posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}
