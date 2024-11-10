interface Tag {
  tags: string[];
}

export default function Tag({ tags }: Tag) {
  return (
    <div className="flex gap-3">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="border rounded-[8px] text-[14px] py-1 px-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
