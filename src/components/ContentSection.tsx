import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentSection = ({ children }: Props) => (
  <section
    className={clsx(
      "prose prose-base dark:prose-invert !max-w-none",
      "hover:prose-a:decoration-primary-500 hover:prose-a:decoration-2",
      "prose-h1:font-bold"
    )}
  >
    {children}
  </section>
);

export default ContentSection;
