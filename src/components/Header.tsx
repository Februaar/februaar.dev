import Link from "next/link";

const navigationData = [
  {
    path: "/posts",
    pathName: "Post",
  },
  {
    path: "/about",
    pathName: "About",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 pt-8 pb-4">
      <Link href={"/"}>
        <h1 className="text-xl font-bold">Februaar.dev</h1>
      </Link>

      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          {navigationData.map((data) => (
            <li key={data.path} className="text-xl font-semiBold">
              <Link href={data.path}>
                <button>{data.pathName}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
