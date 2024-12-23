import Image from "next/image"; // Next.js'teki Image bileşenini import eder.

export default function ZoneCard({
  bgImage,      // Arka plan görseli
  iconSrc,      // Kartın simgesi
  title,        // Başlık
  description,  // Açıklama
  playerCount,  // Oyuncu sayısı
  sessionTime,  // Oturum süresi
  price,        // Fiyat
  videoSrc,     // Video kaynağı
  isRight,      // Sağ tarafa yerleştirme durumu (opsiyonel)
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-0 p-5">
      {/* Kartın ana container'ı, tüm öğeleri yerleştirir. Genişlik %100 olarak ayarlanır. */}
      
      <div
        className={`w-full flex flex-col md:flex-row ${
          isRight ? "md:flex-row-reverse" : "md:flex-row"
        } min-h-[770px] text-white`}
      >
        {/* İki sütunlu düzen (mobilde dikey, masaüstünde yatay) */}
        
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className={`relative w-full h-auto aspect-[16/9] ${
              isRight ? "items-end md:items-start" : ""
            }`}
          >
            <Image
              src={bgImage} // 'bgImage' ile gelen arka plan görseli kullanılır
              alt="Dynamic Image" // Görselin alt açıklaması
              layout="responsive" // Görselin responsif (uyumlu) şekilde yerleşmesini sağlar
              width={893} // Görselin genişliği
              height={769} // Görselin yüksekliği
              objectFit="contain" // Görselin tam yerleştirilmesi sağlanır
              quality={100} // Görselin kalite oranı
            />
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 max-w-[650px] flex flex-col justify-center text-justify gap-5 ${
            isRight ? "items-end md:items-start" : ""
          }`}
        >
          <Image src={iconSrc} width={120} height={120} quality={100} /> 
          {/* Kartın simgesi (ikon) */}
          
          <div className="font-bold text-2xl mt-4">{title}</div>
          {/* Başlık kısmı */}

          <p className="mt-2 text-sm">{description}</p>
          {/* Açıklama kısmı */}

          <div className="flex gap-6">
            {/* Kartın içeriği alt kısma yerleştirilir */}
            
            <div className="flex flex-col items-center gap-2 justify-center">
              <Image
                quality={100}
                width={37}
                height={37}
                src="/images/user-count.png"
                alt="Player Count"
              />
              <p>
                <b>{playerCount}</b> Oyuncu
              </p>
            </div>
            {/* Oyuncu sayısı kısmı */}

            <div className="flex flex-col items-center gap-2 justify-center">
              <Image
                quality={100}
                width={37}
                height={37}
                src="/images/session-time.png"
                alt="Session Time"
              />
              <p>
                <b>{sessionTime}</b> Dk
              </p>
            </div>
            {/* Oturum süresi kısmı */}

            <div className="flex flex-col items-center gap-2 justify-center">
              <Image
                quality={100}
                width={37}
                height={37}
                src="/images/price.png"
                alt="Price"
              />
              <p>
                <b>{price}</b> Puan/Kişi
              </p>
            </div>
            {/* Fiyat kısmı */}
          </div>
        </div>
      </div>

      {/* Video kısmı */}
      <div className="w-full max-w-[1286px] relative overflow-hidden rounded-xl aspect-[16/9] md:-mt-32">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Video kaynağını belirtir */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
