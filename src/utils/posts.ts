import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";

// 날짜에 따라 내림차순 정렬
export async function getSortedPostsByDate(): Promise<Post[]> {
  const posts = await getPosts();

  if (posts.length === 0) {
    return [];
  }

  return posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

type PostGroupByYear = {
  [key in string]: Post[];
};

// 년도별로 게시글 그룹화
export function groupPostsByYear(posts: Post[]): PostGroupByYear {
  return posts.reduce((acc: PostGroupByYear, post) => {
    const year = post.publishDate.split(".")[0];

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(post);

    return acc;
  }, {});
}
