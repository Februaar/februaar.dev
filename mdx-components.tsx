import type { MDXComponents } from "mdx/types";

export function usdMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
