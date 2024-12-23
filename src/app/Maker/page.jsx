import Image from "next/image";

export default function ElectronicsPage() {
  return (
    <div className="relative">
      {/* Sayfa İçeriği */}

      <div className="relative text-white min-h-screen overflow-hidden">
        {/* Başlık Bölümü */}
        <br></br>   <br></br>
        <div className="py-20 text-center relative z-10 px-6 sm:px-8 lg:px-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-orange-500 animate-bounce">Elektronik Dünyası</h1>
          <p className="text-gray-400 mt-2">
            Elektronik teknolojilerindeki en son yenilikleri keşfedin ve günlük
            yaşamınızı kolaylaştıran çözümler hakkında bilgi edinin.
          </p>
        </div>

        {/* Elektronik Cihaz Kartları */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8 lg:px-12 pb-10 relative z-10">
          {[{
            src: "/images/elektronik3.jpeg",
            alt: "Telefon",
            title: "Telefon",
            description: "Yüksek performanslı ve yenilikçi akıllı telefon.",
            href: "/products/telefon"
          }, {
            src: "/images/elektronik3.jpeg",
            alt: "Laptop",
            title: "Laptop",
            description: "Yüksek performanslı dizüstü bilgisayar.",
            href: "/products/laptop"
          }, {
            src: "/images/elektronik3.jpeg",
            alt: "Tablet",
            title: "Tablet",
            description: "İnteraktif ve taşınabilir tablet cihaz.",
            href: "/products/tablet"
          }, {
            src: "/images/elektronik3.jpeg",
            alt: "Akıllı Saat",
            title: "Akıllı Saat",
            description: "Sağlık takibi ve bildirimler için şık bir akıllı saat.",
            href: "/products/akilli-saat"
          }, {
            src: "/images/elektronik3.jpeg",
            alt: "Kulaklık",
            title: "Kulaklık",
            description: "Mükemmel ses kalitesi ile kablosuz kulaklık.",
            href: "/products/kulaklik"
          }, {
            src: "/images/elektronik3.jpeg",
            alt: "Kamera",
            title: "Kamera",
            description: "Yüksek çözünürlükte fotoğraf çekimleri için profesyonel kamera.",
            href: "/products/kamera"
          }].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-lg shadow-lg overflow-hidden border border-orange-500 transition-transform duration-300 transform hover:scale-105 animate-slide-up"
            >
              <div className="relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover group-hover:opacity-100 opacity-80 transition-all duration-300 filter group-hover:filter-none group-hover:blur-0 blur-sm"
                />
              </div>
              <div className="p-4 relative z-10">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
              {/* Buton Sağ Alt Köşede, Alt Kenara Değmeyecek */}
              <a
                href={item.href}
                className="absolute bottom-2 right-2 px-4 py-2 bg-gradient-to-r from-orange-700 to-orange-400 text-black rounded-lg text-sm hover:bg-gradient-to-r hover:from-orange-800 hover:to-orange-500"
              >
                İncele
              </a>
            </div>
          ))}
        </section>

       <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <br></br>

        {/* Teknik Bilgi ve Kaynaklar */}
        <section className="py-10 px-6 sm:px-8 lg:px-12 relative z-10 ">
          <h2 className="text-3xl font-bold text-center text-white ">
            Teknik Bilgiler ve Kaynaklar
          </h2>
          <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
            Elektronik mühendisliği alanında bilgi edinmek veya projeleriniz için kaynaklara ulaşmak için aşağıdaki bağlantıları inceleyebilirsiniz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[{
              title: "Devre Çizimleri",
              description: "Temel ve gelişmiş devre çizimlerini öğrenin.",
              href: "/circuit"
            }, {
              title: "Komponent Bilgileri",
              description: "Elektronik komponentlerin işlevlerini keşfedin.",
              href: "/E-companents"
            }, {
              title: "Elektrik ve Elektronik Temelleri",
              description: "Ohm Kanunu, Kirchoff Kuralları ve daha fazlası.",
              href: "/E-basis"
            }, {
              title: "Yapay Zeka ve Elektronik",
              description: "Yapay zeka uygulamaları ile elektronik birleşimi.",
              href: "/ai-e"
            }, {
              title: "Mikrodenetleyiciler",
              description: "Arduino ve Raspberry Pi gibi cihazlar hakkında bilgiler.",
              href: "/microcontroller"
            }, {
              title: "Sinyal İşleme",
              description: "Analog ve dijital sinyal işlemenin temelleri.",
              href: "/signal-processing"
            }].map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                className="block p-6 border border-orange-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-zoom-in hover:bg-orange-500 hover:text-black"
              >
                <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                <p className="text-gray-400 mt-2">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>
         <br></br>      <br></br>     <br></br>
        {/* Elektronik Yenilikler */}
        <section className="py-10 px-6 sm:px-8 lg:px-12 text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl font-semibold text-white animate-slide-up">Elektronik Yenilikler</h2>
          <p className="text-gray-400 mt-4 max-w-4xl mx-auto">
            Elektronik alanındaki gelişmeler sayesinde, daha hızlı işlemciler,
            yapay zeka entegrasyonu, çevre dostu tasarımlar ve daha fazlası
            hayatımıza dahil oluyor. Teknolojinin bu hızlı ilerleyişi, gelecekte
            daha akıllı ve bağlantılı bir dünyayı mümkün kılmaktadır.
          </p>
        </section>
        
        {/* İndirmeler Bölümü */}
        <section className="py-10 px-6 sm:px-8 lg:px-12 relative z-10 animate-slide-up">
          <h2 className="text-3xl font-bold text-center text-white animate-pulse">İndirmeler</h2>
          <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
            Faydalı dokümanları indirin ve elektronik dünyası hakkında daha derin bilgi sahibi olun.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 px-6 sm:px-8 lg:px-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <a
                key={index}
                href={`/images/arkaplan.jpg-${index + 1}.jpg`}
                className="block px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600"
                download
              >
                Dosya {index + 1} - İndir
              </a>
            ))}
            <a
              href="/images/arkaplan.jpg"
              className="block px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600"
              download
            >
              Bu Buton Çalışıyo :D
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
