import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";
import MDXContent from "@/components/MDXContent";
import Tag from "@/components/Tag";

interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

// 특정 slug에 해당하는 게시물만 선택
export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const posts: Post[] = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className=" mx-auto px-0">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mt-6 mb-3 pb-2 border-b">
          {post.title}
        </h1>
        <div className="flex flex-col gap-2">
          <span>{post.date}</span>
          <Tag tags={post.tags} />
        </div>
      </div>

      <MDXContent content={post.content} />
    </div>
  );
}
