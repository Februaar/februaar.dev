import Link from "next/link";

export default function PostCard() {
  return (
    <Link href={"/posts"}>
      <div className="flex items-center justify-between py-2">
        <div className="text-md hover:underline hover:decoration-primary">포스트 제목</div>
        <span className="text-xs flex-shrink-0">2024-09-23</span>
      </div>
    </Link>
  );
}
