import React from "react"; // React'i import eder.
import Image from "next/image"; // Next.js'teki Image bileşenini import eder.

export default function HomeFeatureCard({ imageUrl, title, description }) {
  // HomeFeatureCard bileşeni, bir görsel URL'si, başlık ve açıklama alır.
  return (
    <div className="flex gap-x-5 text-left max-w-[400px] h-[150px]">
      {/* Ana container. 'flex' kullanılarak içeriğin yatayda sıralanması sağlanır */}
      
      <div>
        {/* Görsel kısmı */}
        <Image src={imageUrl} alt={title} width={56} height={56} />
        {/* 'imageUrl' ile gelen görsel, 'title' ile açıklanan alt metni kullanarak yüklenir. */}
      </div>

      <div className="flex max-w-[300px] gap-2 w-full flex-col mt-2">
        {/* Başlık ve açıklamanın bulunduğu bölüm */}
        <div>
          <p className="text-[20px] font-semibold">{title}</p>
          {/* Başlık kısmı */}
        </div>
        <div>{description}</div>
        {/* Açıklama kısmı */}
      </div>
    </div>
  );
}
