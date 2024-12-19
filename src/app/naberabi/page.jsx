import Image from "next/image";

export default function ElectronicsPage() {
  return (
    <div className=" text-white min-h-screen">
      {/* Başlık Bölümü */}
      <br></br> <br></br> <br></br>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold text-orange-500">Elektronik Dünyası</h1>
        <p className="text-gray-400 mt-2">
          Elektronik teknolojilerindeki en son yenilikleri keşfedin.
        </p>
      </div>

      {/* Grid Bölümü */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-10">
        {/* Elektronik Cihazlar İçin Kartlar */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
          <Image
            src="/images/electronic-1.jpg"
            alt="Telefon"
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-orange-400">Telefon</h2>
            <p className="text-gray-400 mt-2">
              Yüksek performanslı ve yenilikçi akıllı telefon.
            </p>
          </div>
          <a
            href="#"
            className="absolute bottom-2 right-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
          >
            İncele
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
          <Image
            src="/images/electronic-2.jpg"
            alt="Laptop"
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-orange-400">Laptop</h2>
            <p className="text-gray-400 mt-2">
              Yüksek performanslı ve taşınabilir dizüstü bilgisayar.
            </p>
          </div>
          <a
            href="#"
            className="absolute bottom-2 right-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
          >
            İncele
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
          <Image
            src="/images/electronic-3.jpg"
            alt="Tablet"
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-orange-400">Tablet</h2>
            <p className="text-gray-400 mt-2">
              İnteraktif ve taşınabilir tablet cihaz.
            </p>
          </div>
          <a
            href="#"
            className="absolute bottom-2 right-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
          >
            İncele
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
          <Image
            src="/images/electronic-4.jpg"
            alt="Akıllı Saat"
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-orange-400">Akıllı Saat</h2>
            <p className="text-gray-400 mt-2">
              Sağlık takibi ve bildirimler için şık bir akıllı saat.
            </p>
          </div>
          <a
            href="#"
            className="absolute bottom-2 right-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
          >
            İncele
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
          <Image
            src="/images/electronic-5.jpg"
            alt="Kulaklık"
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-orange-400">Kulaklık</h2>
            <p className="text-gray-400 mt-2">
              Mükemmel ses kalitesi ile kablosuz kulaklık.
            </p>
          </div>
          <a
            href="#"
            className="absolute bottom-2 right-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
          >
            İncele
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
          <Image
            src="/images/electronic-6.jpg"
            alt="Kamera"
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-orange-400">Kamera</h2>
            <p className="text-gray-400 mt-2">
              Yüksek çözünürlükte fotoğraf çekimleri için profesyonel kamera.
            </p>
          </div>
          <a
            href="#"
            className="absolute bottom-2 right-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
          >
            İncele
          </a>
        </div>
      </div>

      {/* İndirmeler Bölümü */}
      <div className=" py-10">
        <h2 className="text-3xl font-bold text-center text-orange-500">
          İndirmeler
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6 px-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <a
              key={index}
              href={`/downloads/file-${index + 1}.pdf`}
              className="block px-6 py-3 bg-gray-800 text-gray-200 rounded-lg shadow-lg hover:bg-gray-700"
              download
            >
              Dosya {index + 1} - İndir
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
