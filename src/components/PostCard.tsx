import Link from "next/link";
import { Post } from "@/lib/types";

export default function PostCard({ posts }: { posts: Post }) {
  return (
    <Link href={`/posts/${posts.slug}`}>
      <div className="flex justify-between">
        <div>{posts.title}</div>
        <div>{posts.publishDate}</div>
      </div>
    </Link>
  );
}
