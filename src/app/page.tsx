import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import PostCard from "../components/PostCard";
import Tag from "../components/Tag";

const MAIN_IMAGE = "/icons/main.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* <section className="flex flex-col items-center pt-8 pb-6">
        <p>한 가지에 몰두해 내 것으로 만드는 것을 좋아합니다.</p>
      </section> */}
      <div className="relative px-8 w-full h-72">
        <Image
          src={MAIN_IMAGE}
          alt="main_image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 my-16 mx-20 space-x-2">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>

      <div className="flex flex-col pt-12 pb-6">
        <span className="text-2xl font-semibold pb-4 text-primary">
          Recent Posts
        </span>
        <PostCard />
        <PostCard />
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
