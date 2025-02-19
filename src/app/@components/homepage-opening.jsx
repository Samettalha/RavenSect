import VideoBackground from "@/components/backgrounds/video-background";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-black">
      <VideoBackground videoSrc={"videos/backgraund.mp4"}> {/* Korkutucu bir video arka planı ekle */}
        <div className="w-full h-full flex justify-center md:justify-start p-5 items-end">
          <div className="flex flex-col gap-5 md:ml-[20%] md:mb-[8%] max-w-[600px]">
            <p className="font-bold text-red-600 text-2xl md:text-4xl animate-flicker">
              <span
                className="font-bold text-[48px] md:text-[64px] md:leading-[70px] text-white animate-flicker"
                style={{
                  background:
                    "linear-gradient(183deg, #FF0000 6.68%, #7A0000 40.92%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0px 0px 5px rgba(255, 0, 0, 0.6), 0px 0px 10px rgba(255, 0, 0, 0.5)", // Daha az parlama
                  userSelect: "none",
                }}
              >
                KORKUNUN
              </span>{" "}
              GÖLGESİNDE
            </p>

            <p className="text-base text-white opacity-80">
              Gerçekten test edilmek istenenler için... Karanlıkta kaybolan her şey, tekrar dönmeyecek.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/hakkimizda">
                <button
                  className="text-sm text-white font-semibold h-[47px] w-full sm:w-[215px] custom-border"
                  style={{
                    borderRadius: "40px",
                    background:
                      "linear-gradient(265deg, #D40000 -24.03%, #5C0000 111.01%)",
                    boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)", // Azaltılmış parlama
                  }}
                >
                  Daha Fazla Öğren
                </button>
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );
}
