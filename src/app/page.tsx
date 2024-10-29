import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getSortedPostsByDate } from "@/utils/posts";
import PostCard from "../components/PostCard";
// import Tag from "../components/Tag";

export default async function Home() {
  const sortedPosts = await getSortedPostsByDate();

  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center pt-8 pb-6">
        <p>한 가지에 몰두해 내 것으로 만드는 것을 좋아합니다.</p>
      </section>
      <div className="flex flex-wrap items-center justify-center gap-2 my-16 mx-20 space-x-2">
        {/* <Tag /> */} 태그
      </div>

      <div className="flex flex-col pt-12 pb-6">
        {sortedPosts.slice(0, 5).map((sortedPost) => (
          <PostCard key={sortedPost.slug} posts={sortedPost} />
        ))}
      </div>

      <Link href={"/posts"}>
        <button className="flex items-center space-x-2">
          <span className="text-lg">All Posts</span>
          <FaArrowRight />
        </button>
      </Link>
    </main>
  );
}
