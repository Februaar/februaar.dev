"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import ContentSection from "./ContentSection";
import CustomComponents from "./CustomComponents";

interface PostContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: PostContentProps) {
  return (
    <ContentSection>
      <MDXRemote {...content} components={CustomComponents} />
    </ContentSection>
  );
}

// import { MDXRemote } from "next-mdx-remote/rsc";
// import remarkBreaks from "remark-breaks";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeSlug from "rehype-slug";

// import { Post } from "@/lib/types";
// import ContentSection from "./ContentSection";
// import CustomComponents from "./CustomComponents";

// interface PostContentProps {
//   post: Post;
// }

// const MDXContent = ({ post }: PostContentProps) => {
//   return (
//     <ContentSection>
//       <MDXRemote
//         source={post}
//         components={CustomComponents}
//         options={{
//           mdxOptions: {
//             remarkPlugins: [remarkBreaks],
//             rehypePlugins: [
//               [
//                 rehypePrettyCode,
//                 {
//                   theme: { dark: "github-dark-dimmed", light: "github-light" },
//                 },
//               ],
//               rehypeSlug,
//             ],
//           },
//         }}
//       />
//     </ContentSection>
//   );
// };

// export default MDXContent;
