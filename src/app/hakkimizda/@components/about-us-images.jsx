import GlowingButton from "@/components/buttons/glowing-button";
import Image from "next/image";

export default function AboutUsImages() {
  return (
    <div className="flex flex-col gap-10 sm:gap-40 items-center justify-center mt-5 sm:mt-20  px-5">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 w-full max-w-[1500px] ">
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[520px] text-white">
          <div className="w-full  flex justify-center sm:justify-start mt-10 mb-5">
            <GlowingButton title={"Paylaşım"} />
          </div>

          <p className="text-[32px] leading-[56px] lg:pr-20">
            Takım Ruhunu Keşfet,{" "}
            <span className="font-semibold">Anılarını Paylaş</span>
          </p>
          <p>
            Ziyaretçiler, sosyal medya entegrasyonuyla anlık paylaşımlar
            yaparken, çoklu duyusal deneyimlerle de unutulmaz anlar
            biriktirebilir. Ayrıca, gruplar için özel olarak tasarlanmış
            interaktif bölümlerle takım ruhunu ve sosyal etkileşimi güçlendirme
            fırsatı bulabilirler.
          </p>
        </div>
        <div className="w-full flex items-start lg:w-[40%] relative min-h-[400px] sm:min-h-[600px]">
          <Image
            src={"/images/"}
            alt="About Us Image"
            objectFit="contain"
            layout="fill"
            quality={100}
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full  max-w-[1500px] ">
        <div className="w-full lg:w-[45%] flex  relative min-h-[280px] sm:min-h-[500px]">
          <Image
            src={"/images/"}
            alt="About Us Image"
            objectFit="contain"
            layout="fill"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[520px] text-white">
          <p className="text-[32px] leading-[56px]">
            Mühendsliğin{" "}
            <span className="font-semibold">Sınırları Sen Belirle!</span>
          </p>
          <p>
            yepyeni bir sistem ile mühendislik ie eğlenceyi bir araya getirerek yenpeyi bir kuluruluşa imza atıyoruz,sende yerini al!
          </p>
        </div>
      </div>
    </div>
  );
}
