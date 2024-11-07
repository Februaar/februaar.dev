import type { MDXComponents } from "mdx/types";
import { DetailedHTMLProps, HTMLAttributes, createElement } from "react";

const HeaderComponent = (level: number) => {
  const header = (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    const Tag = `h${level}`;

    return (
      <div>
        {createElement(Tag, { ...props }, props.children)}
      </div>
    );
  };
  header.displayName = `h${level}`;
  return header;
};

const codeComponent = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLElement> & { "data-language"?: string },
    HTMLElement
  >
) => {
  return <code className="flex flex-col relative">{props.children}</code>;
};
const CustomComponents: MDXComponents = {
  h1: HeaderComponent(1),
  h2: HeaderComponent(2),
  h3: HeaderComponent(3),
  h4: HeaderComponent(4),
  h5: HeaderComponent(5),
  h6: HeaderComponent(6),
  code: codeComponent,
};

export default CustomComponents;
