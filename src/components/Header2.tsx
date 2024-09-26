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

export default function Header2() {
  return (
    <section>
      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          {navigationData.map((data) => (
            <li key={data.path} className="text-2xl font-bold">
              <Link href={data.path}>
                <button>{data.pathName}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
