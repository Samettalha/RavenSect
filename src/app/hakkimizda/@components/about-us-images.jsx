import Image from "next/image";

export default function AboutUsImages() {
  return (
    <div className="flex flex-col gap-10 sm:gap-40 items-center justify-center mt-5 sm:mt-20 px-5 bg-black text-red-600">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 w-full max-w-[1500px] ">
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[520px] text-red-500">
          <div className="w-full flex justify-center sm:justify-start mt-10 mb-5">
          </div>

          <p className="text-[32px] leading-[56px] lg:pr-20 font-haunted">
            Korkuyu Hisset, <span className="font-semibold text-red-700">Anılarını Kanla Yaz!</span>
          </p>
          <p className="text-gray-300">
            Ziyaretçiler, sosyal medya entegrasyonuyla ürkütücü paylaşımlar yaparken,
            çoklu duyusal deneyimlerle korku dolu anlar yaşayabilir. Ayrıca, gruplar için özel
            olarak tasarlanmış interaktif bölümlerle gerilimi ve korkuyu iliklerine kadar hissedebilirler.
          </p>
        </div>
        <div className="w-full flex items-start lg:w-[40%] relative min-h-[400px] sm:min-h-[600px]">
          <Image
            src="/images/grup 2.jpg"
            alt="About Us Image"
            objectFit="cover"
            layout="fill"
            quality={100}
            className="opacity-80"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full max-w-[1500px] ">
        <div className="w-full lg:w-[45%] flex relative min-h-[280px] sm:min-h-[500px]">
          <Image
            src="/images/grup1.jpg"
            alt="About Us Image"
            objectFit="cover"
            layout="fill"
            quality={100}
            className="opacity-80"
          />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[520px] text-red-500">
          <p className="text-[32px] leading-[56px] font-haunted">
            ....... <span className="font-semibold text-red-700">.............</span>
          </p>
          <p className="text-gray-300">
            vahşet vekorkuyu bir araya getirerek
            dehşet verici bir kuruluş oluşturuyoruz. Cesaretin varsa, aramıza katıl!
          </p>
        </div>
      </div>
    </div>
  );
}
