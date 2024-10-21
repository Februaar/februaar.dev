import Link from "next/link";

export default function PostCard() {
  return (
    <Link href={"/posts"}>
      <div>
        <div>게시글 제목</div>
        <div>10.21</div>
      </div>
    </Link>
  );
}
