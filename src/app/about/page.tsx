import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiPaperclip } from "react-icons/fi";

const PROFILE_IMAGE = "/icons/profile.png";
const GITHUB_LINK = "https://github.com/Februaar";
const RESUME_LINK = "https://github.com/Februaar";

export default function AboutDetailPage() {
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="flex flex-col items-center mb-2">
        <div className="w-full mb-4">
          <Image src={PROFILE_IMAGE} alt="profile" width={150} height={150} />
        </div>
        <h1 className="text-[32px] font-bold">정경진</h1>
        <p>Frontend Developer</p>
      </div>

      <div className="w-full flex justify-center gap-4 pb-2 mb-8 border-b">
        <Link href={GITHUB_LINK} target={"_blank"}>
          <SiGithub size={24} />
        </Link>

        <Link href={RESUME_LINK} target={"_blank"}>
          <FiPaperclip size={24} />
        </Link>
      </div>

      <div>
        자기소개
        <br />
        자기소개 <br />
        자기소개 <br />
        자기소개 <br />
        자기소개 <br />
        자기소개 <br />
        자기소개 <br />
      </div>
    </div>
  );
}
