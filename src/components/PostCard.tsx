import Link from "next/link";

export default function PostCard() {
  return (
    <Link href={"/posts"}>
      <div className="flex items-center justify-between pb-12 mb-12">
        <div className="flex flex-col items-flex-start">
          <span className="text-sm flex-shrink-0 pl-1 mb-4">Sep.23.2024</span>
          <div className="text-[32px] font-bold hover:underline hover:decoration-primary pb-3">
            게시글 제목
          </div>
          <div>게시글 내용</div>
        </div>
      </div>
    </Link>
  );
}
