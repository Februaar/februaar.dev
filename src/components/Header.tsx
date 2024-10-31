import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-10">
      <Link href={"/"}>
        <h1 className="title">Februaar.dev</h1>
      </Link>
    </header>
  );
}