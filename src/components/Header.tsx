import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FiPaperclip } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import { HoverCard } from "../components/ui/hovercard";

const GITHUB_LINK = "https://github.com/Februaar";
const RESUME_LINK = "https://github.com/Februaar";

const propsData = [
  {
    trigger: () => (
      <Link href={GITHUB_LINK}>
        <SiGithub size={24} />
      </Link>
    ),
    content: () => <p className="text-sm">GitHub 페이지로 연결됩니다.</p>,
  },
  {
    trigger: () => (
      <Link href={RESUME_LINK}>
        <FiPaperclip size={24} />
      </Link>
    ),
    content: () => <p className="text-sm">이력서 페이지로 연결됩니다.</p>,
  },
  {
    trigger: () => <MdMailOutline size={24} />,
    content: () => <p className="text-sm">kyoooungjin@gmail.com</p>,
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 pt-8 pb-4">
      <Link href={"/"}>
        <h1 className="text-xl font-semiBold">Februaar.dev</h1>
      </Link>

      <div className="flex space-x-4">
        <div className="flex gap-2 items-center">
          {propsData.map((data, index) => (
            <div key={index}>
              <HoverCard trigger={data.trigger} content={data.content} />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
