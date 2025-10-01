import Link from "next/link";
import { Post } from "@/lib/types";

export default function PostCard({ posts }: { posts: Post }) {
  const reduceYear = posts.date.split(".").slice(1).join(".");

  return (
    <Link href={`/posts/${posts.slug}`}>
      <li className="w-full flex whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="transition-[color] duration-500 ease hover:text-[light-dark(rgba(65,65,65,0.5),rgba(187,187,187,0.5))] flex-1 basis-0 w-1 mr-4 whitespace-nowrap overflow-hidden text-ellipsis">
          {posts.title}
        </span>
        <span className="text-start">{reduceYear}</span>
      </li>
    </Link>
  );
}
