"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="px-4 pt-12 pb-8 flex justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <h1 className="text-h1 font-extrabold mr-4">Februaar.dev</h1>
        </Link>
        <Link href={"/about"}>
          <h3
            className="text-h3 font-semibold  transition-colors duration-500 ease
    tracking-[0.04em]
    text-[rgba(19,82,149,0.5)] dark:text-[rgba(187,187,187,0.5)]
    hover:font-bold hover:text-[rgba(19,82,149,1)] dark:hover:text-[#f3f4f6]"
          >
            About
          </h3>
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
