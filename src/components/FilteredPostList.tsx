// import { getPosts } from "@/lib/posts";
import { getSortedPostsByDate, groupPostsByYear } from "@/utils/posts";
import PostCard from "@/components/PostCard";

export default async function FilteredPostList() {
  const posts = await getSortedPostsByDate();
  const groupedPostsByYear = groupPostsByYear(posts);

  const YearSection = () => {
    return (
      <div>
        {Object.entries(groupedPostsByYear)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, posts]) => (
            <div key={year} className="flex mb-6">
              <h1 className="post-item-year">{year}</h1>
              <ul className="post-list">
                {posts.map((post) => (
                  <PostCard key={post.slug} posts={post} />
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  };

  return <YearSection />;
}
