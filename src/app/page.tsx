import Link from "next/link";
import { getSortedPostsByDate } from "@/utils/posts";
import PostCard from "../components/PostCard";

export default async function Home() {
  const sortedPosts = await getSortedPostsByDate();
  const pinnedPosts = sortedPosts.filter((post) => post.pinned);

  return (
    <article>
      <div className="mt-12 mb-8">
        <span className="text-h3 font-bold">TIL</span>
      </div>
      <ul className="w-full flex flex-col gap-y-4">
        {pinnedPosts.map((post) => (
          <PostCard key={post.slug} posts={post} />
        ))}
      </ul>

      <div className="mt-12 mb-8">
        <span className="text-h3 font-bold">Recent Posts</span>
      </div>
      <ul className="w-full flex flex-col gap-y-4">
        {sortedPosts.slice(0, 5).map((sortedPost) => (
          <PostCard key={sortedPost.slug} posts={sortedPost} />
        ))}
      </ul>

      <Link href={"/posts"}>
        <button
          className="flex mx-auto mt-10 rounded-md px-3 py-1.5
         text-[#f3f4f6] dark:text-[rgba(156,163,175,0.5)]
         bg-[rgb(19,82,149)] dark:bg-[rgba(47,47,47,1)]
         transition-colors duration-500 ease
         hover:text-[#f3f4f6] dark:hover:text-[rgba(156,163,175,0.5)]
         hover:bg-[rgb(19,82,149)] dark:hover:bg-[rgba(47,47,47,1)]"
        >
          <span className="text-sm bg-transparent">MORE</span>
        </button>
      </Link>
    </article>
  );
}
