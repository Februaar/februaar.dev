import Link from "next/link";

const LinkItem = () => {
  const itemsData = [
    {
      pathName: "Github",
      path: "https://github.com/Februaar",
    },
    { pathName: "Resume", path: "https://bit.ly/3W2LzOJ" },
  ];

  return (
    <div className=" px-4 my-4 mt-8">
      <ul className="flex gap-3">
        {itemsData.map((data) => (
          <li
            className="
           font-light underline underline-offset-[4px] decoration-[rgba(221,224,230,1)] dark:decoration-[rgba(156,163,175,0.5)] transition-colors duration-500 ease
    tracking-[0.04em]
    text-[rgba(19,82,149,0.5)] dark:text-[rgba(187,187,187,0.5)]
    hover:font-bold hover:text-[rgba(19,82,149,1)] dark:hover:text-[#f3f4f6]"
            key={data.path}
          >
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
