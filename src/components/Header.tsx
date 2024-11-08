"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // "isDarkMode"에 따라 body 클래스 업데이트
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="mb-12 flex justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <h1 className="title">Februaar.dev</h1>
        </Link>
        <Link href={"/about"}>
          <h2 className="text-[20px] to-light">About</h2>
        </Link>
      </div>

      <button onClick={toggleTheme}>
        {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
      </button>
    </header>
  );
}
