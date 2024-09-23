import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";

import PostCard from "../components/ui/PostCard";

const GITHUB_LINK = "https://github.com/Februaar";
const RESUME_LINK = "https://github.com/Februaar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center pt-8 pb-6">
        <p>한 가지에 몰두해 내 것으로 만드는 것을 좋아합니다.</p>
        <div className="flex space-x-6">
          <p className="text-md font-semibold">Social Links</p>
          <div className="flex gap-2">
            <Link href={GITHUB_LINK}>
              <SiGithub size={24} />
            </Link>

            <Link href={RESUME_LINK}>
              <FiPaperclip size={24} />
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col pt-12 pb-6">
        <span className="text-2xl font-semibold pb-4 text-primary">Series</span>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <div className="flex flex-col pt-12 pb-6">
        <span className="text-2xl font-semibold pb-4 text-primary">
          Recent Posts
        </span>
        <PostCard />
        <PostCard />
        <PostCard />
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
