export default function Tag2({ tags }: any) {
  return (
    <div className="w-fit mb-4">
      <span className="bg-gray-primary rounded-[8px] text-black text-[14px] py-1 px-2">
        {tags}
      </span>
    </div>
  );
}
