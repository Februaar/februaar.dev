import Tag2 from "../../../components/Tag2";

// export async function generateStaticParams() {
//   return posts?.map((post) => ({ slug: post._meta.path ?? "" })) ?? []; //posts 데이터 사용해서 각 경로의 slug 생성
// }

export default async function PostDetailPage() {
  // const post = posts.find((post) => post._meta.path === post);

  // if (!post) {
  //   return <div>Post not found</div>
  // }

  return (
    <div className="container mx-auto px-0">
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
