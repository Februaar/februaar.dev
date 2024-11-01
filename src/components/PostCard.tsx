import Link from "next/link";
import { Post } from "@/lib/types";

export default function PostCard({ posts }: { posts: Post }) {
  const reduceYear = posts.publishDate.split(".").slice(1).join(".");

  return (
    <Link href={`/posts/${posts.slug}`}>
      <li className="post-item">
        <span className="post-item-title">{posts.title}</span>
        <span className="post-item-date">{reduceYear}</span>
      </li>
    </Link>
  );
}
