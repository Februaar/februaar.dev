import Link from "next/link";

const LinkItem = () => {
  const itemsData = [
    {
      pathName: "Github",
      path: "https://github.com/Februaar",
    },
    { pathName: "Email", path: "https://github.com" },
  ];

  return (
    <div className=" px-4 my-4 mt-8">
      <ul className="flex gap-3">
        {itemsData.map((data) => (
          <li className="sns-item to-light" key={data.path}>
            <Link href={data.path} target="_blank">
              {data.pathName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkItem;
