import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";

export default async function FilteredPostList() {
  const posts: Post[] = await getPosts(); // 서버 측에서 직접 데이터 호출

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}제목</h2>
          <time>{post.date}날짜</time>
        </div>
      ))}
    </div>
  );
}
