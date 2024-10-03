export default function Tag() {
  return (
    <div className="w-fit h-7 bg-white border border-gray hover:border-gray-500 hover:bg-gray rounded-sm transition-all duration-300">
      <input type="checkbox" className="appearance-none"/>
      <label className="text-black text-xs px-4">Tag</label>
    </div>
  );
}
