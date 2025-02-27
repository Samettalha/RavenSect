import Image from "next/image";

export default function AboutUsImages() {
  return (
    <div className="flex flex-col gap-10 sm:gap-40 items-center justify-center mt-5 sm:mt-20 px-5 text-yellow-400">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 w-full max-w-[1500px] ">
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[520px] text-yellow-300">
          <div className="w-full flex justify-center sm:justify-start mt-10 mb-5">
          </div>

          <p className="text-[32px] leading-[56px] lg:pr-20 font-bold">
            Macerayı Keşfet, <span className="font-semibold text-yellow-600">Kahramanlık Dolu Bir Dünya Yarat!</span>
          </p>
          <p className="text-gray-300">
            Ziyaretçiler, cesur kahramanlar gibi macera dolu dünyalarda heyecan verici görevler üstlenirken, çeşitli savaşlar ve keşiflerle destanlarını yazabilirler.
          </p>
        </div>
        <div className="w-full flex items-start lg:w-[40%] relative min-h-[400px] sm:min-h-[600px]">
          <Image
            src="/images/adventure-image-1.jpg" // Aksiyon temalı bir görsel
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
            src="/images/adventure-image-2.jpg" // Aksiyon temalı başka bir görsel
            alt="About Us Image"
            objectFit="cover"
            layout="fill"
            quality={100}
            className="opacity-80"
          />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-[520px] text-yellow-300">
          <p className="text-[32px] leading-[56px] font-bold">
            Güçlü Takımlar, <span className="font-semibold text-yellow-600">Büyük Zaferler!</span>
          </p>
          <p className="text-gray-300">
            Ekip çalışması ve strateji gerektiren büyük maceralarda, kahramanlar bir araya gelip zorlukları aşar. Cesaretin varsa, sen de aramıza katıl!
          </p>
        </div>
      </div>
    </div>
  );
}
