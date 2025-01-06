"use client";
import Image from "next/image";

export default function ElektrikElektronikTemelleri() {
  return (
    <div className="w-full bg-[#0d0d0d] text-white">
      {/* Header Section */}
      <div className="w-full h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-transparent">
        <h1 className="text-4xl font-bold mb-2">Elektrik ve Elektronik Temelleri</h1>
        <p className="text-lg text-gray-300 text-center max-w-[800px]">
          Elektrik ve elektronik mühendisliğinin temellerini öğrenerek bu büyüleyici
          dünyayı keşfetmeye hazır olun!
        </p>
      </div>

      {/* Main Content */}
      <div className="px-10 py-20">
        {/* Section 1: Elektrik Nedir? */}
        <div className="flex flex-col lg:flex-row items-center mb-16 gap-10">
          <Image
            src="/images/yazılım1.jpeg"
            alt="Elektrik Nedir"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Elektrik Nedir?</h2>
            <p className="text-gray-300 leading-relaxed">
              Elektrik, elektrik yüklerinin akışıdır. Enerji üretmek, iletmek ve
              kullanmak için kullanılan temel bir fenomendir. Günlük hayatımızın
              vazgeçilmez bir parçasıdır.
            </p>
          </div>
        </div>

        {/* Section 2: Elektronik Nedir? */}
        <div className="flex flex-col-reverse lg:flex-row items-center mb-16 gap-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Elektronik Nedir?</h2>
            <p className="text-gray-300 leading-relaxed">
              Elektronik, elektrik enerjisinin sinyallere dönüştürülerek kontrol
              edilmesiyle ilgilenen bir bilim dalıdır. Günlük cihazlardan endüstriyel
              sistemlere kadar birçok alanda kullanılır.
            </p>
          </div>
          <Image
            src="/images/yazılım1.jpeg"
            alt="Elektronik Nedir?"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Section 3: Temel Kavramlar */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Elektrik ve Elektronikte Temel Kavramlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border-2 border-orange-500">
              <h3 className="text-xl font-semibold mb-2">Volt</h3>
              <p className="text-gray-300">
                Elektrik potansiyelini ölçmek için kullanılan bir birimdir. Elektrik
                devrelerinde enerji farkını ifade eder.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border-2 border-orange-500">
              <h3 className="text-xl font-semibold mb-2">Amper</h3>
              <p className="text-gray-300">
                Elektrik akımının ölçü birimidir. Bir iletkenden geçen elektrik yükünün
                miktarını ifade eder.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border-2 border-orange-500">
              <h3 className="text-xl font-semibold mb-2">Ohm</h3>
              <p className="text-gray-300">
                Elektrik direncini ölçmek için kullanılan bir birimdir. Bir devredeki
                akım akışını sınırlar.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border-2 border-orange-500">
              <h3 className="text-xl font-semibold mb-2">Direnç</h3>
              <p className="text-gray-300">
                Elektrik akışını sınırlayan devre elemanıdır. Isı yayabilir veya akımı
                düzenlemek için kullanılabilir.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border-2 border-orange-500">
              <h3 className="text-xl font-semibold mb-2">Kapasitör</h3>
              <p className="text-gray-300">
                Elektrik yüklerini depolayan devre elemanıdır. Geçici enerji
                depolaması ve sinyal filtreleme için kullanılır.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border-2 border-orange-500">
              <h3 className="text-xl font-semibold mb-2">Transistör</h3>
              <p className="text-gray-300">
                Elektrik akımını kontrol etmek için kullanılan yarı iletken bir
                elemandır. Elektronikte anahtar ve amplifikatör olarak görev yapar.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Önemli Bilgiler */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Elektrik ve Elektroniğin Önemi</h2>
            <p className="text-gray-300 leading-relaxed">
              Modern dünyada elektrik ve elektronik olmadan hayat düşünülemez. Enerji
              üretiminden iletişim teknolojilerine, endüstriyel üretimden ev
              cihazlarına kadar her alanda kritik bir rol oynarlar.
            </p>
          </div>
          <Image
            src="/images/yazılım1.jpeg"
            alt="Elektrik ve Elektroniğin Önemi"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
