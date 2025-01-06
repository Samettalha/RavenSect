"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function YapayZekaVeElektronik() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full  text-orange-500 overflow-hidden">
      {/* Loading Animation */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
          <div className="text-center">
            <div className="loader mb-4"></div>
            <h1 className="text-3xl font-bold text-orange-500">Yükleniyor...</h1>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[450px] flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <Image
          src="/images/yazılım1.jpeg"
          alt="Yapay Zeka ve Elektronik"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute text-center animate-fade-in">
          <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Yapay Zeka ve Elektronik</h1>
          <p className="text-lg text-gray-300 max-w-[700px] mx-auto">
            Elektronik dünyasının geleceği: Yapay zekanın gücünü keşfedin ve bu teknolojinin elektronikle nasıl birleştiğini öğrenin.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-10 py-20">
        {/* Section 1: Yapay Zeka Nedir? */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <Image
            src="/images/yazılım1.jpeg"
            alt="Yapay Zeka Nedir"
            width={400}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Yapay Zeka Nedir?</h2>
            <p className="text-gray-300 leading-relaxed">
              Yapay zeka, makinelerin insan benzeri zekâya sahip olmasını sağlayan bir teknolojidir. Elektronik cihazlardan, sağlık sektörüne ve sanayiye kadar geniş bir kullanım alanına sahiptir.
            </p>
          </div>
        </div>

        {/* Section 2: Elektronik ve Yapay Zeka */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Elektronik ve Yapay Zeka</h2>
            <p className="text-gray-300 leading-relaxed">
              Elektronik cihazlar, yapay zeka ile birleştiğinde daha akıllı hale gelir. Sensörler, mikrodenetleyiciler ve işlemciler bu teknolojilerin temel yapı taşlarıdır.
            </p>
          </div>
          <Image
            src="/images/yazılım1.jpeg"
            alt="Elektronik ve Yapay Zeka"
            width={400}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Section 3: Yapay Zeka Uygulamaları */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Yapay Zeka ile Elektronik Uygulamaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Akıllı Ev Sistemleri</h3>
              <p className="text-gray-300">
                Akıllı termostatlar, güvenlik kameraları ve enerji yönetimi için yapay zeka destekli cihazlar.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Otonom Araçlar</h3>
              <p className="text-gray-300">
                Elektronik sensörler ve yapay zeka algoritmalarıyla çalışan sürücüsüz araçlar.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Endüstriyel Otomasyon</h3>
              <p className="text-gray-300">
                Yapay zeka destekli robotlar ve üretim hatları ile yüksek verimlilik.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Sağlık Teknolojileri</h3>
              <p className="text-gray-300">
                Elektronik cihazlarla hastalık teşhisi ve yapay zeka destekli sağlık izleme sistemleri.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Akıllı Tarım</h3>
              <p className="text-gray-300">
                Toprak ve hava koşullarını analiz eden elektronik sensörler ile yapay zeka tabanlı tarım yönetimi.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Eğitim Teknolojileri</h3>
              <p className="text-gray-300">
                Öğrenme platformları ve kişiselleştirilmiş eğitim çözümleri için yapay zeka desteği.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Gelecek Perspektifleri */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Gelecek Perspektifleri</h2>
            <p className="text-gray-300 leading-relaxed">
              Yapay zeka ve elektronik birleşimi, gelecekte daha akıllı ve verimli bir dünya yaratmamıza yardımcı olacak. Özellikle IoT, 5G ve robotik alanlarında büyük ilerlemeler bekleniyor.
            </p>
          </div>
          <Image
            src="/images/yazılım1.jpeg"
            alt="Gelecek Teknolojileri"
            width={400}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top: 4px solid #ff4500;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1
          }
        }
      `}</style>
    </div>
  );
}
