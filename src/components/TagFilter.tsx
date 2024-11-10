"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function TagFilter() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(true);
  };

  const handleUnClick = () => {
    setIsChecked(false);
  };

  return (
    <div
      className={`relative w-fit h-7 border border-gray-primary rounded-sm cursor-pointer transition-all duration-300
  ${
    isChecked
      ? "bg-blue-primary"
      : "bg-white hover:border-gray-dark hover:bg-gray-primary"
  }`}
    >
      <div onClick={handleClick}>
        <input
          type="checkbox"
          className="appearance-none"
          checked={isChecked}
        />
        <label
          className={`text-black text-xs cursor-pointer ${
            isChecked ? "pl-3 pr-5 transition-all duration-300" : "px-4"
          }`}
        >
          Tag
        </label>
      </div>
      {isChecked ? (
        <IoMdClose
          onClick={handleUnClick}
          className="absolute right-0 top-[0.35rem] pr-1"
        />
      ) : null}
    </div>
  );
}
