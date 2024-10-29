export type Post = {
  id: string;
  tags: string[];
  slug: string;
  title: string;
  date: string;
  year: string;
  dateWithoutYear: string;
  pinned?: boolean;
};
