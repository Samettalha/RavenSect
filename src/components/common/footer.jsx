import Image from "next/image"; // Next.js Image bileşenini import eder.
import Link from "next/link";   // Next.js Link bileşenini import eder.

export default function Footer() {
  return (
    <div className="mt-10">
      {/* Footer başlangıcı, üst kısmında logo yer alır */}
      <div className="flex items-center justify-center border-b p-5 border-b-[#585858]">
      <Link href="/">
        <Image
      
           src="/images/RavenLogo.png"  // Logo görseli
          alt="10XP X"          // Görselin açıklaması
          width={300}                 // Genişlik
          height={35}                 // Yükseklik
          className="cursor-pointer" // Görselin tıklanabilir olması için stil
        
        
        /></Link>
      </div>

      {/* Footer alt kısmı */}
      <div className="flex w-full h-[100px]">
        <div className="flex flex-col sm:flex-row w-full items-center sm:justify-between px-10 mt-5 sm:mt-0">
          {/* Copyright bilgisi */}
          <p className="text-[16px] leading-[26px] text-[#AEAEAE] text-center">
            © Copyright 2025, All Rights Reserved :D 
          </p>

          {/* Sosyal medya ikonları */}
          <div className="flex justify-center items-center p-5 gap-x-6">
            {/* Twitter Linki */}
            <Link
              href="https://x.com/ravensect36847" // Twitter profil linki
              target="_blank"  // Yeni sekmede açılır
              rel="noopener noreferrer"  // Güvenlik için
            >
              <Image
                src="/svg/twitter.svg"  // Twitter simgesi
                alt="10XP Twitter"      // Görselin açıklaması
                width={40}               // Genişlik
                height={40}              // Yükseklik
                className="cursor-pointer" // Görselin tıklanabilir olması için stil
              />
            </Link>

            {/* Instagram Linki */}
            <Link
              href="https://www.instagram.com/raven_sect/"  // Instagram profil linki
              target="_blank"  // Yeni sekmede açılır
              rel="noopener noreferrer"  // Güvenlik için
            >
              <Image
                src="/svg/instagram.svg"  // Instagram simgesi
                alt="10XP Instagram"      // Görselin açıklaması
                width={40}                 // Genişlik
                height={40}                // Yükseklik
                className="cursor-pointer" // Görselin tıklanabilir olması için stil
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
