import Image from "next/image"; // Next.js'teki Image bileşenini import eder.

export default function SwiperLargeCard({ imageSrc }) {
  // SwiperLargeCard bileşeni, 'imageSrc' props'unu alır, bu da gösterilecek görselin URL'sini temsil eder.
  return (
    <div className="w-full h-full">
      {/* Ana container, genişliği ve yüksekliği %100 olarak ayarlanır. */}
      <Image
        src={imageSrc} // 'imageSrc' ile gelen görsel URL'si kullanılır.
        alt="Dynamic Swiper Image" // Görselin açıklaması (alt metni) belirlenir.
        layout="fill" // Görselin tüm container'ı kaplaması sağlanır.
        objectFit="cover" // Görselin boyutu container'a göre ayarlanır, ancak kesilmesini engellemek için 'cover' kullanılır.
      />
    </div>
  );
}
