import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center border-b p-5 border-b-[#585858]">
        <Image
          src="/svg/xpzone-logo.svg"
          alt="10XP Twitter"
          width={200}
          height={35}
          className="cursor-pointer"
        />
      </div>
      <div className="flex w-full h-[100px] ">
        <div className="flex flex-col sm:flex-row w-full items-center sm:justify-between px-10 mt-5 sm:mt-0">
          <p className="text-[16px] leading-[26px] text-[#AEAEAE] text-center">
            © Copyright 2024, All Rights Reserved :D naber
          </p>

          <div className="flex justify-center items-center p-5 gap-x-6 ">
            <Link
              href="https://twitter.com/Samet_Talha_K"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/twitter.svg"
                alt="10XP Twitter"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
            <Link
              href="https://www.instagram.com/s.t_kavutcu/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/instagram.svg"
                alt="10XP Instagram"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
