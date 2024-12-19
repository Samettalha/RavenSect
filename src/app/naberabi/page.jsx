import Image from "next/image";

export default function ElectronicsPage() {
  return (
    <div className="text-white min-h-screen">
      {/* Başlık Bölümü */}
      <br></br> <br></br> <br></br>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold text-orange-500">Elektronik Dünyası</h1>
        <p className="text-gray-400 mt-2">
          Elektronik teknolojilerindeki en son yenilikleri keşfedin ve günlük
          yaşamınızı kolaylaştıran çözümler hakkında bilgi edinin.
        </p>
      </div>

      {/* Elektronik Bilgi Bölümü */}
      <div className="py-10 px-5 text-center">
        <h2 className="text-3xl font-semibold text-orange-500">
          Elektronik Hakkında Daha Fazla Bilgi
        </h2>
        <p className="text-gray-400 mt-4 max-w-4xl mx-auto">
          Elektronik, modern dünyada iletişim, eğlence, sağlık, üretim ve daha
          birçok alanda devrim yaratmıştır. Günümüzde elektronik cihazlar
          sayesinde daha hızlı iletişim kuruyor, verimli çalışıyor ve hayatı daha
          keyifli hale getiriyoruz. İster bir akıllı telefon, ister gelişmiş bir
          kamera olsun, her cihaz arkasında karmaşık teknolojiler barındırır.
        </p>
      </div>

      {/* Grid Bölümü */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-10">
        {/* Elektronik Cihazlar İçin Kartlar */}
        {[
          {
            src: "/images/electronic-1.jpg",
            alt: "Telefon",
            title: "Telefon",
            description: "Yüksek performanslı ve yenilikçi akıllı telefon.",
            href: "/products/telefon"
          },
          {
            src: "/images/electronic-2.jpg",
            alt: "Laptop",
            title: "Laptop",
            description: "Yüksek performanslı ve taşınabilir dizüstü bilgisayar.",
            href: "/products/laptop"
          },
          {
            src: "/images/electronic-3.jpg",
            alt: "Tablet",
            title: "Tablet",
            description: "İnteraktif ve taşınabilir tablet cihaz.",
            href: "/products/tablet"
          },
          {
            src: "/images/electronic-4.jpg",
            alt: "Akıllı Saat",
            title: "Akıllı Saat",
            description: "Sağlık takibi ve bildirimler için şık bir akıllı saat.",
            href: "/products/akilli-saat"
          },
          {
            src: "/images/electronic-5.jpg",
            alt: "Kulaklık",
            title: "Kulaklık",
            description: "Mükemmel ses kalitesi ile kablosuz kulaklık.",
            href: "/products/kulaklik"
          },
          {
            src: "/images/electronic-6.jpg",
            alt: "Kamera",
            title: "Kamera",
            description: "Yüksek çözünürlükte fotoğraf çekimleri için profesyonel kamera.",
            href: "/products/kamera"
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-orange-500"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
            <a
              href={item.href}
              className="absolute bottom-2 right-2 px-3 py-1 bg-white text-black rounded-lg text-sm hover:bg-gray-200"
            >
              İncele
            </a>
          </div>
        ))}
      </div>

      {/* İndirmeler Bölümü */}
      <div className="py-10">
        <h2 className="text-3xl font-bold text-center text-white">
          İndirmeler
        </h2>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          Faydalı dokümanları indirin ve elektronik dünyası hakkında daha derin bilgi sahibi olun.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 px-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <a
              key={index}
              href={`/downloads/file-${index + 1}.pdf`}
              className="block px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600"
              download
            >
              Dosya {index + 1} - İndir
            </a>
          ))}
        </div>
      </div>

      {/* Elektronik Yenilikler Bölümü */}
      <div className="py-10 px-5 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Elektronik Yenilikler
        </h2>
        <p className="text-gray-400 mt-4 max-w-4xl mx-auto">
          Elektronik alanındaki gelişmeler sayesinde, daha hızlı işlemciler,
          yapay zeka entegrasyonu, çevre dostu tasarımlar ve daha fazlası
          hayatımıza dahil oluyor. Teknolojinin bu hızlı ilerleyişi, gelecekte
          daha akıllı ve bağlantılı bir dünyayı mümkün kılmaktadır.
        </p>
      </div>

      {/* Teknik Bilgi ve Kaynaklar Bölümü */}
      <div className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center text-white">
          Teknik Bilgiler ve Kaynaklar
        </h2>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          Elektronik mühendisliği alanında bilgi edinmek veya projeleriniz için kaynaklara ulaşmak için aşağıdaki bağlantıları inceleyebilirsiniz.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Devre Çizimleri",
              description: "Temel ve gelişmiş devre çizimlerini öğrenin.",
              href: "/resources/devre-cizimleri"
            },
            {
              title: "Komponent Bilgileri",
              description: "Elektronik komponentlerin işlevlerini keşfedin.",
              href: "/resources/komponent-bilgileri"
            },
            {
              title: "Elektrik ve Elektronik Temelleri",
              description: "Ohm Kanunu, Kirchoff Kuralları ve daha fazlası.",
              href: "/resources/temeller"
            },
            {
              title: "Yapay Zeka ve Elektronik",
              description: "Yapay zeka uygulamaları ile elektronik birleşimi.",
              href: "/resources/ai-ve-elektronik"
            },
            {
              title: "Mikrodenetleyiciler",
              description: "Arduino ve Raspberry Pi gibi cihazlar hakkında bilgiler.",
              href: "/resources/mikrodenetleyiciler"
            },
            {
              title: "Sinyal İşleme",
              description: "Analog ve dijital sinyal işlemenin temelleri.",
              href: "/resources/sinyal-isleme"
            }
          ].map((resource, index) => (
            <a
              key={index}
              href={resource.href}
              className="block p-6 border border-orange-500 text-white rounded-lg shadow-lg hover:bg-gray-200 hover:text-black"
            >
              <h3 className="text-lg font-semibold text-white">
                {resource.title}
              </h3>
              <p className="text-gray-400 mt-2">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
