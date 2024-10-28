import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
