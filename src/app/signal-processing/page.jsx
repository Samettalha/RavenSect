"use client";
import Image from "next/image";

export default function SinyalIsleme() {
  return (
    <div className="w-full text-orange-500 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <Image
          src="/images/yazılım1.jpeg"
          alt="Sinyal İşleme"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute text-center">
          <h1 className="text-5xl font-extrabold text-orange-500 mb-4 tracking-wide">Sinyal İşleme</h1>
          <p className="text-lg text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            Analog ve dijital dünyaların buluştuğu yerde sinyal işleme teknolojilerini keşfedin.
            Geleceğin teknolojileriyle bugünden tanışın.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-10 py-20">
        {/* Section 1: Sinyal İşleme Nedir? */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <Image
            src="/images/yazılım1.jpeg"
            alt="Sinyal İşleme Nedir"
            width={450}
            height={350}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Sinyal İşleme Nedir?</h2>
            <p className="text-gray-300 leading-relaxed">
              Sinyal işleme, analog veya dijital sinyallerin analiz edilmesi ve
dönüştürülmesi sürecidir. Ses, görüntü ve sensör verileri gibi
              farklı alanlarda uygulanır. Bu teknoloji, modern hayatın vazgeçilmez bir parçasıdır.
            </p>
          </div>
        </div>

        {/* Section 2: Analog ve Dijital Sinyaller */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Analog ve Dijital Sinyaller</h2>
            <p className="text-gray-300 leading-relaxed">
              Analog sinyaller sürekli veri taşırken, dijital sinyaller ayrık veri taşır. Bu
iki sinyal türü arasında dönüşüm, modern elektronik sistemlerde
              kritik bir rol oynar. Dijital dönüşüm ile daha hızlı ve güvenilir sistemler elde edilir.
            </p>
          </div>
          <Image
            src="/images/yazılım1.jpeg"
            alt="Analog ve Dijital Sinyaller"
            width={450}
            height={350}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Section 3: Uygulama Alanları */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Sinyal İşlemenin Uygulama Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Ses İşleme</h3>
              <p className="text-gray-300">
                Mikrofon ve hoparlör sistemlerinde kullanılan ses filtreleme ve geliştirme. Ses
kaynaklarından kaliteli ve net bir çıktı sağlanır.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Görüntü İşleme</h3>
              <p className="text-gray-300">
                Kamera sistemlerinde görüntü iyileştirme ve nesne tanıma teknolojileri. Otomatik
akıllı sistemlerin temelini oluşturur.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Tıbbi Sistemler</h3>
              <p className="text-gray-300">
                MR, CT taramaları gibi cihazlarda sinyal analizi ve işleme. Sağlık teknolojilerinde güvenilir teşhis sağlar.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Telekomünikasyon</h3>
              <p className="text-gray-300">
                Veri transferinde kullanılan modülasyon ve hata düzeltme yöntemleri. Modern iletişim ağlarının merkezinde yer alır.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Radar ve Lidar Sistemleri</h3>
              <p className="text-gray-300">
                Nesne algılama ve konum belirleme teknolojilerinde sinyal işleme. Otonom araç teknolojilerinde kritik bir bileşen.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Endüstriyel Otomasyon</h3>
              <p className="text-gray-300">
                Fabrika ve üretim hatlarında sensör verilerinin analizi. Verimlilik artışı sağlayan çözümler sunar.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Gelecek ve Sinyal İşleme */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Gelecek ve Sinyal İşleme</h2>
            <p className="text-gray-300 leading-relaxed">
              Sinyal işleme, 5G teknolojileri, yapay zeka algoritmaları ve nesnelerin
interneti gibi gelecekteki inovasyonların temelini oluşturuyor. Bu teknolojiler,
endüstri standartlarını yeniden tanımlıyor.
            </p>
          </div>
          <Image
            src="/images/yazılım1.jpeg"
            alt="Gelecek ve Sinyal İşleme"
            width={450}
            height={350}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
