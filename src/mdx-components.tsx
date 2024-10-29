import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

const CustomComponents: MDXComponents = {
  h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
};

export default CustomComponents;
