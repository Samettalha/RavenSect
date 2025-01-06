import React from "react";
import Image from "next/image"; // Next.js görsel optimizasyonu için kullanılır
import Link from "next/link";

const CircuitPage = () => {
  return (
    <div className=" text-white font-sans">
        <br></br><br></br>
      <header className="text-center py-10 ">
        <h1 className="text-4xl font-semibold text-orange-500">Devre Çizimleri</h1>
        <p className="mt-2 text-lg text-gray-400">
          Elektronik devreler hakkında her şey!
        </p>
      </header>

      <main className="container mx-auto px-5 py-10">
        {/* Devre Nedir? Bölümü */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500">Devre Nedir?</h2>
          <div className="bg-gray-800 p-6 mt-4 rounded-lg">
            <p className="text-lg">
              Devre, elektrik akımının bir yolu boyunca ilerlemesini sağlayan,
              birbirine bağlanmış bileşenlerin düzenidir. Bu bileşenler
              dirençler, kapasitörler, transistörler, diyotlar gibi
              elektriksel elemanları içerir. Elektronik devreler, cihazların
              çalışmasını sağlayan temel yapı taşlarıdır.
            </p>
          </div>
        </section>

        {/* Neden Çizilir? Bölümü */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500">Devre Neden Çizilir?</h2>
          <div className="bg-gray-800 p-6 mt-4 rounded-lg">
            <p className="text-lg">
              Devrelerin çizilmesinin birkaç önemli nedeni vardır:
            </p>
            <ul className="list-disc ml-8 mt-4">
              <li>
                <strong>Planlama ve Tasarım:</strong> Devre elemanlarının
                nasıl bağlanacağını ve işlevlerini anlamanızı sağlar.
              </li>
              <li>
                <strong>İletişim:</strong> Elektronik mühendisleri, devre
                çizimlerini kullanarak fikirlerini başkalarına aktarabilir.
              </li>
              <li>
                <strong>Arıza Tespiti:</strong> Devreyi çizmek, sorunları daha
                kolay tespit etmenize yardımcı olur.
              </li>
            </ul>
          </div>
        </section>

        {/* Devre Çizim Adımları Bölümü */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500">Devre Nasıl Çizilir?</h2>
          <div className="bg-gray-800 p-6 mt-4 rounded-lg">
            <p className="text-lg">
              Devre çizimi yapmak için şu adımları izleyebilirsiniz:
            </p>
            <ol className="list-decimal ml-8 mt-4">
              <li>
                <strong>Devre Elemanlarını Belirleyin:</strong> Devrenizde
                kullanacağınız bileşenlerin türünü ve sayısını belirleyin.
              </li>
              <li>
                <strong>Devreyi Planlayın:</strong> Elektriksel bağlantıları
                nasıl yapacağınızı planlayın.
              </li>
              <li>
                <strong>Çizim Yapmaya Başlayın:</strong> Çizim yaparken,
                her bileşenin sembollerini ve bağlantıları kullanarak
                devrenizi çizin.
              </li>
              <li>
                <strong>Kontrol Edin:</strong> Devreyi kontrol ederek
                hataları düzeltin.
              </li>
            </ol>
          </div>
        </section>

        {/* Devre Çizim Örnekleri */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500">Devre Çizim Örnekleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Devre Çizimi 1 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Image
                src="/images/yazılım1.jpeg"
                alt="Devre Çizimi 1"
                width={300}
                height={200}
                className="mx-auto"
              />
              <p className="mt-4 text-lg">Temel Devre Çizimi</p>
            </div>
            {/* Devre Çizimi 2 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Image
                src="/images/yazılım1.jpeg"
                alt="Devre Çizimi 2"
                width={300}
                height={200}
                className="mx-auto"
              />
              <p className="mt-4 text-lg">Seri Bağlantı Devresi</p>
            </div>
          </div>
        </section>

        {/* Devre Çizim Araçları Bölümü */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500">Devre Çizim Araçları</h2>
          <div className="bg-gray-800 p-6 mt-4 rounded-lg">
            <p className="text-lg">
              Devre çizimlerini yapmak için kullanabileceğiniz bazı popüler
              araçlar:
            </p>
            <ul className="list-disc ml-8 mt-4">
              <li>
                <strong>Fritzing:</strong> Elektronik devre tasarımı ve
                prototip oluşturma aracı.
              </li>
              <li>
                <strong>EasyEDA:</strong> Web tabanlı bir devre tasarım
                platformu.
              </li>
              <li>
                <strong>KiCad:</strong> Açık kaynaklı bir PCB tasarım yazılımı.
              </li>
            </ul>
          </div>
        </section>

        {/* Sonuç ve Özet */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500">Sonuç</h2>
          <div className="bg-gray-800 p-6 mt-4 rounded-lg">
            <p className="text-lg">
              Devre çizimleri, elektronik tasarımın ve mühendisliğinin temel
              bir parçasıdır. Doğru çizim teknikleri, hem tasarım hem de
              üretim aşamalarında size büyük kolaylık sağlar. Devre çizmeyi
              öğrenmek, elektronik projelerinizde başarılı olmanın ilk adımıdır.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CircuitPage;
