import Image from "next/image"; // Next.js'teki Image bileşenini import eder.

export default function SwiperSmallCard({
  imageSrc, // Görsel kaynağı
  children, // Kartın içinde gösterilecek içerik
  reverse = false, // Layout düzeni, varsayılan olarak false
  fullImage = false, // Varsayılan olarak false, sadece görselin tüm alanı kaplaması için
}) {
  return (
    <div
      className={`w-full px-1 sm:px-2 flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } items-center justify-center gap-5 h-full`}
    >
      {/* Kartın düzenini belirler. 'reverse' true ise içeriğin ters sıralanması sağlanır. */}
      
      {fullImage ? (
        // fullImage true ise sadece görseli tam ekran gösterir
        <div className="relative w-full h-full">
          <Image
            src={imageSrc} // 'imageSrc' ile gelen görsel URL'si kullanılır
            alt="Dynamic Image" // Görselin alt metni belirlenir
            layout="fill" // Görselin container'ı tamamen kaplaması sağlanır
            objectFit="cover" // Görselin boyutu container'a göre ayarlanır, kesilmesi engellenir
          />
        </div>
      ) : (
        <>
          {/* fullImage false ise normal düzen kullanılır */}
          <div className="relative w-full h-1/2">
            <Image
              src={imageSrc} // Görselin kaynağını belirtir
              alt="Dynamic Image" // Görselin alt açıklamasını verir
              layout="fill" // Görselin container'ı tamamen kaplamasını sağlar
              objectFit="cover" // Görselin boyutunu, container'ı kaplayacak şekilde ayarlar
            />
          </div>

          {/* Görselin altındaki içerik kısmı */}
          <div className="h-1/2 flex items-center rounded-xl bg-[#19161C] w-full justify-center">
            {children} {/* Kartın içeriği (çocuk öğeleri) burada gösterilir */}
          </div>
        </>
      )}
    </div>
  );
}
