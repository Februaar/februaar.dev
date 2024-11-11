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
          <h3 className="text-h3 font-semibold to-light">About</h3>
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
