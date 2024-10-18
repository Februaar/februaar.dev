import { Metadata } from "next";

// import FilteredPostList from "../../components/FilteredPostList";

export const metadata: Metadata = {
  title: "Posts | februaar.dev",
  description: "전체 게시글 페이지",
};

export default function PostsPage() {
  if (!posts) {
    return <h1>Empty</h1>;
  }

  // return <FilteredPostList />;
}
