import React from "react";
import Image from "next/image";

const ElectronicComponentsPage = () => {
  const components = [
    {
      name: "Direnç",
      image: "/images/Kurt1.jpeg",
      description:
        "Elektrik akımını sınırlamak veya belirli bir voltaj düşüşü oluşturmak için kullanılır.",
    },
    {
      name: "Kondansatör",
      image: "/images/Kurt1.jpeg",
      description:
        "Elektrik yükünü depolayan ve gerektiğinde boşaltan bir elektronik bileşendir.",
    },
    {
      name: "Transistör",
      image: "/images/Kurt1.jpeg",
      description:
        "Elektrik sinyallerini güçlendirmek veya anahtarlamak için kullanılan bir yarı iletken cihazdır.",
    },
    {
      name: "Diyot",
      image: "/images/Kurt1.jpeg",
      description:
        "Elektrik akımını sadece bir yönde ileten ve ters yöndeki akımı engelleyen bir bileşendir.",
    },
    {
      name: "LED",
      image: "/images/Kurt1.jpeg",
      description:
        "Işık yayan diyot, elektrik enerjisini ışık enerjisine dönüştürür.",
    },
    {
      name: "Bobin (Endüktör)",
      image: "/images/Kurt1.jpeg",
      description:
        "Manyetik alan oluşturmak veya elektrik akımını geçici olarak depolamak için kullanılır.",
    },
    {
      name: "Anahtar (Switch)",
      image: "/images/Kurt1.jpeg",
      description: "Elektrik devresini açıp kapatmak için kullanılan bir bileşendir.",
    },
    {
      name: "Potansiyometre",
      image: "/images/Kurt1.jpeg",
      description:
        "Değişken direnç olarak kullanılır ve devredeki akımı veya voltajı ayarlamak için kullanılır.",
    },
    {
      name: "Kristal Osilatör",
      image:"/images/Kurt1.jpeg",
      description:
        "Sabit bir frekansta elektrik sinyalleri üretmek için kullanılır.",
    },
    {
      name: "Buton",
      image: "/images/Kurt1.jpeg",
      description:
        "Kullanıcı etkileşimi için kullanılan, elektrik devresini geçici olarak açan bir anahtar.",
    },
    {
      name: "Röle",
      image: "/images/Kurt1.jpeg",
      description:
        "Bir elektrik devresini bir elektromıknatıs yardımıyla açıp kapatan bir anahtar.",
    },
    {
      name: "Termistör",
      image: "/images/Kurt1.jpeg",
      description:
        "Isı ile direnci değişen ve sıcaklık algılama uygulamalarında kullanılan bir bileşendir.",
    },
    {
      name: "Fotodiyot",
      image: "/images/Kurt1.jpeg",
      description:
        "Işık algılamak için kullanılan ve ışık enerjisini elektrik enerjisine dönüştüren bir diyot.",
    },
    {
      name: "Sesli Buzzer",
      image:"/images/Kurt1.jpeg",
      description: "Sesli uyarılar için kullanılan bir elektronik bileşendir.",
    },
    {
      name: "Hoparlör",
      image: "/images/Kurt1.jpeg",
      description: "Elektrik sinyallerini ses dalgalarına dönüştürür.",
    },
    {
      name: "Mikrofon",
      image: "/images/Kurt1.jpeg",
      description:
        "Ses dalgalarını elektrik sinyallerine dönüştüren bir giriş cihazıdır.",
    },
    {
      name: "Motor",
      image: "/images/Kurt1.jpeg",
      description:
        "Elektrik enerjisini mekanik enerjiye dönüştürmek için kullanılır.",
    },
    {
      name: "LDR (Işığa Duyarlı Direnç)",
      image: "/images/Kurt1.jpeg",
      description:
        "Işık yoğunluğuna bağlı olarak direnci değişen bir elektronik bileşendir.",
    },
    {
      name: "Piezoelektrik Sensör",
      image: "/images/Kurt1.jpeg",
      description:
        "Basınç ve titreşimleri algılayan bir sensördür.",
    },
    {
      name: "Şönt Direnç",
      image: "/images/Kurt1.jpeg",
      description:
        "Akımı ölçmek için kullanılan özel bir dirençtir.",
    },
    {
      name: "Akü",
      image: "/images/Kurt1.jpeg",
      description: "Elektrik enerjisini depolayan ve sağlayan bir enerji kaynağıdır.",
    },
    {
      name: "Regülatör",
      image: "/images/Kurt1.jpeg",
      description:
        "Sabit bir voltaj çıkışı sağlamak için kullanılan bir devre elemanıdır.",
    },
    {
      name: "Amplifikatör",
      image: "/images/Kurt1.jpeg",
      description: "Elektrik sinyallerini güçlendirmek için kullanılan bir cihazdır.",
    },
    {
      name: "Sensör Modülü",
      image: "/images/Kurt1.jpeg",
      description:
        "Ortam değişikliklerini algılayıp elektrik sinyaline dönüştüren bir modüldür.",
    },
    {
      name: "MOSFET",
      image: "/images/Kurt1.jpeg",
      description:
        "Elektrik sinyallerini kontrol etmek ve amplifiye etmek için kullanılan bir transistör türüdür.",
    },
    {
        name: "Regülatör",
        image: "/images/Kurt1.jpeg",
        description:
          "Sabit bir voltaj çıkışı sağlamak için kullanılan bir devre elemanıdır.",
      },
      {
        name: "Regülatör",
        image: "/images/Kurt1.jpeg",
        description:
          "Sabit bir voltaj çıkışı sağlamak için kullanılan bir devre elemanıdır.",
      },
      {
        name: "Regülatör",
        image: "/images/Kurt1.jpeg",
        description:
          "Sabit bir voltaj çıkışı sağlamak için kullanılan bir devre elemanıdır.",
      },
      {
        name: "Regülatör",
        image: "/images/Kurt1.jpeg",
        description:
          "Sabit bir voltaj çıkışı sağlamak için kullanılan bir devre elemanıdır.",
      },
      {
        name: "Regülatör",
        image: "/images/Kurt1.jpeg",
        description:
          "Sabit bir voltaj çıkışı sağlamak için kullanılan bir devre elemanıdır.",
      },
  ];

  return (
    <div className=" text-white font-sans">
      <header className="text-center py-10 ">
      <br></br><br></br><br></br>
        <h1 className="text-4xl font-semibold text-orange-500">
          Elektronik Komponentler
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Elektronik devrelerde kullanılan en önemli komponentler!
        </p>
      </header>

      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg text-center shadow-lg"
            >
              <Image
                src={component.image}
                alt={component.name}
                width={170}
                height={170}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold text-orange-400 mt-4">
                {component.name}
              </h2>
              <p className="text-gray-300 mt-2">{component.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ElectronicComponentsPage;
