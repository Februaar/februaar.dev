import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";
import FilteredPostList from "@/components/FilteredPostList";

export default async function PostsPage() {
  const posts: Post[] = await getPosts(); // 서버 측에서 직접 데이터 호출

  if (!posts || posts.length === 0) {
    return <h1>Empty</h1>; // TODO: Empty UI
  }

  return <FilteredPostList posts={posts}/>;
}
