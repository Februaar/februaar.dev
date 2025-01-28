import Link from "next/link";
import { getSortedPostsByDate } from "@/utils/posts";
import PostCard from "../components/PostCard";

export default async function Home() {
  const sortedPosts = await getSortedPostsByDate();
  const pinnedPosts = sortedPosts.filter((post) => post.pinned);

  return (
    <article>
      <div className="mt-12 mb-8">
        <span className="text-h3 font-bold ">TIL</span>
      </div>
      <ul className="post-list">
        {pinnedPosts.map((post) => (
          <PostCard key={post.slug} posts={post} />
        ))}
      </ul>

      <div className="mt-12 mb-8">
        <span className="text-h3 font-bold ">Recent Posts</span>
      </div>
      <ul className="post-list">
        {sortedPosts.slice(0, 5).map((sortedPost) => (
          <PostCard key={sortedPost.slug} posts={sortedPost} />
        ))}
      </ul>

      <Link href={"/posts"}>
        <button className="post-more">
          <span className="text-sm bg-transparent">MORE</span>
        </button>
      </Link>
    </article>
  );
}
