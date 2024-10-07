import Tag2 from "../../components/Tag2";

export default function PostDetailPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[32px] font-bold mt-6 mb-3 pb-2 border-b">제목</h1>
        <div className="flex flex-col gap-2">
          <span>Oct.07.2024</span>
          <Tag2 />
        </div>
      </div>

      <div>내용</div>
    </div>
  );
}
