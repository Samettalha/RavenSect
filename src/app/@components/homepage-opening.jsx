import VideoBackground from "@/components/backgrounds/video-background";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen ">
      <VideoBackground videoSrc={"videos/video.mp4"}>
        <div className="w-full h-full flex justify-center md:justify-start p-5 items-end">
          <div className="flex flex-col gap-5 md:ml-[20%] md:mb-[8%] max-w-[600px]">
            <p className="font-bold text-white text-2xl md:text-4xl ">
              <span
                className="font-bold text-[48px] md:text-[64px] md:leading-[70px]"
                style={{
                  background:
                    "linear-gradient(183deg, #FFD900 6.68%, #FF3E00 40.92%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  userSelect: "none",
                }}
              >
                TEKNOLOJININ
              </span>{" "}
              KALBİNDE YERİNİ AL
            </p>

            <p className="text-base text-white">
              Yenilikçi ve kullanıcı odaklı deneyimsel teknolojinin
              sınırlarını zorlayacak, hem öğrenirken hem de eğlenirken
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/blog">
                <button
                  className="text-sm text-white font-semibold h-[47px] w-full sm:w-[215px] custom-border"
                  style={{
                    borderRadius: "40px",
                    background:
                      "linear-gradient(265deg, #F6EE59 -24.03%, #FF3000 111.01%)",
                  }}
                >
                  Daha Fazla Öğren
                </button>
              </Link>
              <Link href="/iletisim">
                <button
                  className="text-sm font-semibold text-white w-full sm:w-[215px] h-[47px]"
                  style={{
                    borderRadius: "9999px",
                    border: "0.3px solid #B3B1B1",
                    background: "#09090B",
                    boxShadow:
                      "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 1px rgba(255, 255, 255, 0.10), 0px 0px 0px 0px #FFF",
                  }}
                >
                  İletişime Geçebilirsin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );
}
