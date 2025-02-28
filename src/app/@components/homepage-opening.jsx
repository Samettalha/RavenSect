import VideoBackground from "@/components/backgrounds/video-background";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-black">
      <VideoBackground videoSrc={"videos/tree.mp4"}> {/* Aksiyon ve macera temasına uygun bir video arka planı */}
        <div className="w-full h-full flex justify-start p-5 items-end">
          <div className="flex flex-col gap-5 ml-8 mb-12 max-w-[600px]"> {/* Yazıları sola almak ve biraz daha aşağıya yerleştirmek için margin eklendi */}
            <p className="font-bold text-yellow-500 text-2xl md:text-4xl">
              <span
                className="font-bold text-[48px] md:text-[64px] md:leading-[70px] text-white"
                style={{
                  background: "linear-gradient(183deg, #FF5733 6.68%, #FFC300 40.92%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0px 0px 2px rgba(255, 255, 0, 0.8), 0px 0px 12px rgba(255, 165, 0, 0.6)", // Parlak efekt
                  userSelect: "none",
                }}
              >
                MACERA VE
              </span>{" "}
              AKSİYON DOLU
            </p>

            <p className="text-base text-white opacity-90">
              Efsanevi bir kahraman ol, zorlu görevleri tamamla ve unutulmaz bir yolculuğa çık. Hazır mısın?
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/game1">
                <button
                  className="text-sm text-white font-semibold h-[47px] w-full sm:w-[215px] custom-border"
                  style={{
                    borderRadius: "40px",
                    background: "linear-gradient(265deg, #FF5733 -24.03%, #FF8C00 111.01%)", // Aksiyon rengi
                    boxShadow: "0 0 15px rgba(255, 165, 0, 0.7)", // Parlak etki
                  }}
                >
                  Macerana Başla
                </button>
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );
}
