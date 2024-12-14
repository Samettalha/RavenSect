import VideoBackground from "@/components/backgrounds/video-background";
import Link from "next/link";

export default function ZonesOpening() {
  return (
    <div className="w-full h-screen ">
      <VideoBackground videoSrc={"videos/video.mp4"}>
        <div className="w-full h-full flex justify-center md:justify-start p-5  items-end ">
          <div className="flex flex-col gap-5 md:ml-[20%] mb-[30%] md:mb-[10%] max-w-[600px]">
            <p className="font-bold text-white text-2xl md:text-[32px] ">
              <span
                className="font-bold text-4xl md:text-[48px] py-5 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFD900 4.51%, #FF3E00 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  userSelect: "none",
                }}
              >
                YEPYENİ
              </span>{" "}
              BİR MACERAAAAYA
            </p>

            <p className="text-lg text-white">
              Farklı ilgi alanlarında her yaştan ziyaretçi için eğitici ve öğretici kaynaklar
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={"/iletisim"}>
                <button
                  className="text-white w-full sm:w-[185px] h-[40px] font-semibold"
                  style={{
                    borderRadius: "40px",

                    background:
                      "linear-gradient(265deg, #F6EE59 -24.03%, #FF3000 111.01%)",
                  }}
                >
                  İletişime Geç gardajj
                </button>
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );
}
