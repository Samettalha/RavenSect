"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperLargeCard from "../cards/swiper-large-card";
import SwiperSmallCard from "../cards/swiper-small-card";

export default function SwiperComponent() {
  return (
    <div className="w-full flex bg-black py-2">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2000 }}
        centeredSlides
        className="aspect-[16/10] sm:aspect-[16/5]"
      >
        {/* Slides */}

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"} reverse>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#F087FF]">ziyaretci sayısı</div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  1.000.000
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full  w-[380px] sm:w-[900px]">
            <SwiperLargeCard imageSrc={"/images/RavenLogo.png"} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"}>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#19FB9B]">15</div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  Farklı oyun 
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard
              imageSrc={"/images/RavenLogo.png"}
              fullImage
            ></SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"} reverse>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#FFEB3B]">40</div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  Farklı etkileşimli kullanıcı
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full  w-[380px] sm:w-[900px] ">
            <SwiperLargeCard imageSrc={"/images/RavenLogo.png"} />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"}>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#00BCD4]">
                  7’den 70’e
                </div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  Hedef Kitlesi
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard
              imageSrc={"/images/RavenLogo.png"}
              fullImage
            ></SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"} reverse>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#F087FF]">12,237</div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  Bugüne kadarki ki ziyaretci sayısı
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full  w-[380px] sm:w-[900px]">
            <SwiperLargeCard imageSrc={"/images/RavenLogo.png"} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"}>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#19FB9B]">8</div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  FARKLI İNTERAKTİF DENEYİM ALANI
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard
              imageSrc={"/images/RavenLogo.png"}
              fullImage
            ></SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"} reverse>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#FFEB3B]">12</div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  FARKLI ETKİLEŞİMLİ OYUN
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full  w-[380px] sm:w-[900px] ">
            <SwiperLargeCard imageSrc={"/images/RavenLogo.png"} />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard imageSrc={"/images/RavenLogo.png"}>
              <div className="text-center flex flex-col gap-2 sm:gap-5  text-white">
                <div className="text-xl md:text-6xl text-[#00BCD4]">
                  7’den 70’e
                </div>
                <div className="text-sm sm:text-base text-[#BABABA]">
                  HEDEF KİTLESİ
                </div>
              </div>
            </SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <div className="h-full w-[200px] sm:w-[480px]">
            <SwiperSmallCard
              imageSrc={"/images/RavenLogo.png"}
              fullImage
            ></SwiperSmallCard>
            ..{" "}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
