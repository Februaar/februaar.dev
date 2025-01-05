import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiPaperclip } from "react-icons/fi";

const PROFILE_IMAGE = "/icons/profile.png";
const GITHUB_LINK = "https://github.com/Februaar";
const RESUME_LINK = "https://bit.ly/3W2LzOJ";

export default function AboutDetailPage() {
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="flex flex-col items-center">
        <div className="w-full mb-4">
          <Image src={PROFILE_IMAGE} alt="profile" width={150} height={150} />
        </div>
        <h1 className="text-[28px] font-bold">정경진</h1>
        <p className="font-semibold">Frontend Developer</p>
      </div>

      <div className="w-full flex justify-center gap-4 py-4 mb-8 border-b">
        <Link href={GITHUB_LINK} target={"_blank"}>
          <SiGithub size={24} />
        </Link>

        <Link href={RESUME_LINK} target={"_blank"}>
          <FiPaperclip size={24} />
        </Link>
      </div>

      <div className="px-8 flex flex-col gap-2">
        "최적의 사용자 경험을 통해 유저가 더욱 쉽게, 더 즐겁게 다가설 수 있는
        서비스를 만들고, 동료에게는 간결하면서도 확장성 있는 코드를 제공하는
        개발자."

        <br />
        
        UX와 DX의 균형을 맞추며, 사용자는 물론 함께 일하는 팀의 효율까지 고려한
        개발을 추구합니다.
      </div>
    </div>
  );
}
