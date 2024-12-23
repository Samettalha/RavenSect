"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MicrocontrollersPage = () => {
  return (
    <div className="font-sans  text-white p-5">
        <br></br><br></br><br></br><br></br>
      <motion.h1 
        className="text-center text-orange-500 text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mikrodenetleyiciler ve Teknolojileri
      </motion.h1>

      {/* Ana Görsel ve Tanıtım */}
      <section className="mb-10 relative">
        <motion.img 
          src="/images/yazılım1.jpeg" 
          alt="Mikrodenetleyici Banner" 
          className="w-full rounded-lg shadow-xl" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white bg-gray-900 bg-opacity-50 p-5 rounded-lg"
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-bold">Modern Mikrodenetleyicilere Bir Bakış</h2>
          <p className="mt-2 text-lg">Mikrodenetleyiciler, modern teknolojinin kalbidir. Hayatımızın her alanında kullanılıyor!</p>
        </motion.div>
      </section>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/* Tarihçesi */}
      <section className="mb-10">
        <h2 className="text-orange-500 text-3xl font-semibold mb-4">Tarihçesi</h2>
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/yazılım1.jpeg"
            alt="Mikrodenetleyici Tarihçesi"
            className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <p className="text-lg leading-relaxed">
              Mikrodenetleyiciler ilk olarak 1970'lerde ortaya çıktı. Intel'in 4004 modeli, bu teknolojinin öncüsü olarak kabul edilir. Daha sonra, 8051, AVR ve ARM gibi farklı mikrodenetleyici platformları gelişerek elektronik ve mühendislik projelerinde temel taşları haline geldi.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Öne Çıkan Mikrodenetleyiciler */}
      <section className="mb-10">
        <h2 className="text-orange-500 text-3xl font-semibold mb-4">Öne Çıkan Mikrodenetleyiciler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Arduino Uno", description: "Kolay kullanımı ve geniş topluluk desteği ile en popüler mikrodenetleyicilerden biri.", img: "/images/yazılım1.jpeg" },
            { title: "Raspberry Pi", description: "Mini bilgisayar olarak da kullanılabilen güçlü bir platform.", img: "/images/yazılım1.jpeg" },
            { title: "ESP32", description: "WiFi ve Bluetooth özellikleriyle IoT projelerinde sıkça tercih edilir.", img: "/images/yazılım1.jpeg" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={item.title} className="h-40 mx-auto mb-4 rounded-md" />
              <h3 className="text-orange-500 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="mb-10">
        <h2 className="text-orange-500 text-3xl font-semibold mb-4">Kullanım Alanları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Otomotiv", description: "Araç kontrol sistemleri, motor optimizasyonu ve güvenlik uygulamaları.", img: "/images/yazılım1.jpeg" },
            { title: "IoT", description: "Akıllı ev sistemleri, sensör ağları ve otomasyon projelerinde vazgeçilmezdir.", img: "/images/yazılım1.jpeg" },
            { title: "Robotik", description: "Robot kolları, insansız araçlar ve yapay zeka tabanlı projeler.", img: "/images/yazılım1.jpeg" },
            { title: "Tıp", description: "Kalp monitörleri, tıbbi görüntüleme cihazları ve daha fazlası.", img: "/images/yazılım1.jpeg" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={item.title} className="h-40 mx-auto mb-4 rounded-md" />
              <h3 className="text-orange-500 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* İleri Düzey Kullanımlar */}
      <section className="mb-10">
        <h2 className="text-orange-500 text-3xl font-semibold mb-4">İleri Düzey Projeler</h2>
        <p className="text-gray-300 mb-4">
          Mikrodenetleyiciler, sadece temel uygulamalar için değil, aynı zamanda ileri düzey mühendislik projeleri için de kullanılır. Örnekler:
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Otonom araç sistemleri</li>
          <li>Görsel tanıma ve işlem uygulamaları</li>
          <li>Uzay teknolojileri ve uydu iletişimi</li>
        </ul>
      </section>
    </div>
  );
};

export default MicrocontrollersPage;
