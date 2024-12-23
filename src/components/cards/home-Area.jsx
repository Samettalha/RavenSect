import Image from "next/image"; // Next.js'teki Image bileşenini import eder.
import Link from "next/link"; // Next.js'teki Link bileşenini import eder.

const Area = ({ imageSrc, iconSrc, buttonTitle, buttonHref, children }) => {
  // Area bileşeni, oyun görseli, ikon, buton başlığı, buton bağlantısı ve içerik (children) gibi props alır.
  return (
    <div className="w-full flex flex-col sm:flex-row sm:h-[590px] rounded-xl bg-black text-white overflow-hidden">
      {/* Ana container. 'sm' medya sorgusu ile mobilde dikey, büyük ekranlarda yatay sıralama yapılır. */}
      
      {/* Oyun görselini tutan sol alan */}
      <div className="w-full min-h-[400px] sm:w-1/2 relative h-full rounded-xl sm:rounded-l-xl sm:rounded-r-none overflow-hidden">
        {/* Game Image */}
        <Image
          src={imageSrc} // Gelen 'imageSrc' ile oyun görseli eklenir.
          layout="fill" // Görsel alanı dolduracak şekilde düzenlenir.
          objectFit="cover" // Görselin tüm alanı kaplaması sağlanır.
          alt="Game Image" // Görsel için alternatif metin.
        />
      </div>

      {/* Oyun ikonunun ve içerik kısmının bulunduğu sağ alan */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center gap-5 p-5 sm:p-10 rounded-xl sm:rounded-r-xl sm:rounded-l-none bg-black">
        {/* Oyun ikonu, sabit boyutlandırılmış kutu */}
        <div className="w-[175px] h-[175px] relative">
          {/* Game Icon */}
          <Image
            src={iconSrc} // Gelen 'iconSrc' ile oyun ikonu eklenir.
            layout="fill" // İkon, alanı dolduracak şekilde düzenlenir.
            objectFit="contain" // İkonun oranını bozmadan içine yerleştirilir.
            alt="Game Icon" // İkon için alternatif metin.
          />
        </div>
        
        {/* Oyun hakkında açıklama veya diğer içerikler (children) */}
        <div className="flex flex-col text-left gap-3">
          {children} {/* Children burada, ebeveyn bileşene aktarılan tüm içeriği gösterir. */}
        </div>

        {/* Buton */}
        <Link href={buttonHref} passHref>
          {/* Link'in içinde buton stili */}
          <div
            className="rounded-[40px] max-w-[200px] px-5 py-3 text-center"
            style={{
              background:
                "linear-gradient(225deg, #FBB040 14.89%, #F15A29 85.85%)", // Buton arka planı
            }}
          >
            <p className="font-semibold text-sm text-white">{buttonTitle}</p> {/* Buton başlığı */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Area; // Bileşen dışa aktarılır.
