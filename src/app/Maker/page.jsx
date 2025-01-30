"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";



const Bootstrap = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), {
  ssr: false, // SSR devre dışı bırakılıyor
});

export default function ElectronicsPage() {
  return (
    <div className="relative">
      {/* Sayfa İçeriği */}

{/* Arka Plan Animasyonları */}
<div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-48 h-48 bg-orange-500 rounded-full filter blur-3xl"
          animate={{ x: ["-100%", "100%"], y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute w-72 h-72 bg-gray-600 rounded-full filter blur-3xl"
          animate={{ x: ["100%", "-100%"], y: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        ></motion.div>
      </div>

      <div className="relative text-white min-h-screen overflow-hidden">
        {/* Başlık Bölümü */}
        <br></br> <br></br>
        <div className="py-20 text-center relative z-10 px-6 sm:px-8 lg:px-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-orange-500 animate-bounce">Elektronik Dünyası</h1>
          <p className="text-gray-400 mt-2">
            Elektronik teknolojilerindeki en son yenilikleri keşfedin ve günlük
            yaşamınızı kolaylaştıran çözümler hakkında bilgi edinin.
          </p>
        </div>
        
        <section className="py-10 px-6 sm:px-8 lg:px-12 text-white">
  <h2 className="text-3xl font-bold text-center text-orange-500">Elektrik Elektronik Mühendisliği Nedir?</h2>
  <p className="text-gray-400 mt-4 text-center max-w-4xl mx-auto">
    Elektrik ve elektronik mühendisliği, elektriksel ve elektronik sistemlerin tasarımı, geliştirilmesi ve bakımı ile
    ilgilenen bir mühendislik dalıdır. Elektrik mühendisleri, elektrik enerjisinin üretimi, iletimi, dağıtımı ve
    kullanımı üzerinde çalışırken, elektronik mühendisleri daha çok devreler, yarı iletkenler ve dijital sistemler gibi
    küçük ölçekli sistemlere odaklanır.
  </p>
</section>

        <br></br>
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
            {[ 
              {
                title: "Devre Çizimleri",
                description: "Temel ve gelişmiş devre çizimlerini öğrenin.",
                href: "/electronics/circuit",
                imgSrc: "/images/register.jpg", // Resim kaynağıo zaman s
              },
              {
                title: "Komponent Bilgileri",
                description: "Elektronik komponentlerin işlevlerini keşfedin.",
                href: "/electronics/e-companents",
                imgSrc: "/images/register.jpg", // Resim kaynağı
              },
              {
                title: "Elektrik ve Elektronik Temelleri",
                description: "Ohm Kanunu, Kirchoff Kuralları ve daha fazlası.",
                href: "/electronics/E-basis",
                imgSrc: "/images/register.jpg", // Resim kaynağı
              },
              {
                title: "Yapay Zeka ve Elektronik",
                description: "Yapay zeka uygulamaları ile elektronik birleşimi.",
                href: "/electronics/ai-e",
                imgSrc: "/images/register.jpg", // Resim kaynağı
              },
              {
                title: "Mikrodenetleyiciler",
                description: "Arduino ve Raspberry Pi gibi cihazlar hakkında bilgiler.",
                href: "/electronics/microcontroller",
                imgSrc: "/images/register.jpg", // Resim kaynağı
              },
              {
                title: "Sinyal İşleme",
                description: "Analog ve dijital sinyal işlemenin temelleri.",
                href: "/electronics/signal-processing",
                imgSrc: "/images/register.jpg", // Resim kaynağı
              },
            ].map((resource, index) => (
              <Link key={index} href={resource.href}>
                <div className="block p-6 border border-orange-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-zoom-in hover:bg-orange-500 hover:text-black">
                  {/* Resim Ekleme */}
                  <div className="relative mb-4">
                    <Image 
                      src={resource.imgSrc}
                      alt={resource.title}
                      layout="responsive"
                      width={1000}
                      height={500} // Dikdörtgen oranı
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                  <p className="text-gray-400 mt-2">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <br></br>
        <br></br>
        <br></br>
        

        {/* Elektronik Yenilikler */}
        <section className="py-10 px-6 sm:px-8 lg:px-12 text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl font-semibold text-white animate-slide-up">Elektronik Yenilikler</h2>
          <p className="text-gray-400 mt-4 max-w-4xl mx-auto">
            Elektronik alanındaki gelişmeler sayesinde, daha hızlı işlemciler,
            yapay zeka entegrasyonu, çevre dostu tasarımlar ve daha fazlası
            hayatımıza dahil oluyor. Teknolojinin bu hızlı ilerleyişi, gelecekte
            daha akıllı ve bağlantılı bir dünyayı mümkün kılmaktadır.
          </p>
          <br />
          <br />
          <h2 className=" text-3xl font-semibold text-white animate-slide-up"> Elektronik: Temel Bilgiler ve Uygulama Alanları</h2>
          <p className=" text-gray-400 mt-4 max-w-4xl mx-auto">
          Elektronik, elektrikle ilgili cihazları, devreleri ve sistemleri tasarlama, geliştirme ve kullanma bilimi ve mühendislik dalıdır. Elektronik mühendisliği, modern dünyadaki en önemli disiplinlerden biridir. Her şeyden önce, günümüzde kullandığımız teknolojiler — akıllı telefonlar, bilgisayarlar, televizyonlar ve daha fazlası — elektronik sistemlerin bir sonucudur.
            </p>
            <section className="py-10 px-6 sm:px-8 lg:px-12 relative z-10">
  <h2 className="text-3xl font-bold text-center text-white">Elektronik: Temel Bilgiler ve Uygulama Alanları</h2>
  <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
    Elektronik, elektrikle ilgili cihazları, devreleri ve sistemleri tasarlama, geliştirme ve kullanma bilimi ve mühendislik dalıdır.
    Elektronik mühendisliği, modern dünyadaki en önemli disiplinlerden biridir.
  </p>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-white">Elektronik Mühendisliğinde Temel Kavramlar</h3>
    <ul className="list-disc text-gray-400 mt-4 pl-6">
      <li><strong>Ohm Kanunu:</strong> Elektrik akımı, voltaj ve direnç arasındaki ilişkiyi tanımlar. (V = I × R)</li>
      <li><strong>Devre Elemanları:</strong> Elektronikte kullanılan temel elemanlar: Dirençler, Kondansatörler, Transistörler.</li>
      <li><strong>Yarı İletkenler ve Diyotlar:</strong> Elektronların iletimi ve kontrolü için kullanılan temel malzemeler.</li>
    </ul>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-white">Elektroniğin Günlük Yaşamdaki Uygulamaları</h3>
    <ul className="list-disc text-gray-400 mt-4 pl-6">
      <li><strong>Beyaz Eşyalar:</strong> Elektronik teknolojiler, beyaz eşyaların verimli çalışmasını sağlar. Örnekler: Buzdolapları, Çamaşır makineleri.</li>
      <li><strong>Taşınabilir Elektronik Cihazlar:</strong> Akıllı telefonlar, tabletler ve giyilebilir teknolojiler.</li>
      <li><strong>Sağlık Elektroniği:</strong> EKG cihazları ve insülin pompaları gibi sağlık teknolojileri.</li>
    </ul>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-white">Elektroniğin Geleceği</h3>
    <ul className="list-disc text-gray-400 mt-4 pl-6">
      <li><strong>Yapay Zeka (AI) Entegrasyonu:</strong> Elektronik cihazlar yapay zeka ile daha akıllı hale geliyor.</li>
      <li><strong>İnternet of Things (IoT):</strong> Cihazlar birbirine bağlanarak daha akıllı hale geliyor.</li>
      <li><strong>Gelişmiş Enerji Depolama Teknolojileri:</strong> Yeni nesil bataryalar, daha uzun ömürlü ve verimli.</li>
    </ul>
  </div>
</section>

        </section>

        {/* İndirmeler Bölümü */}
        <section className="py-10 px-6 sm:px-8 lg:px-12 relative z-10 animate-slide-up">
          <h2 className="text-3xl font-bold text-center text-white animate-pulse"> Şematik İndirmeler</h2>
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
              href="/videos/background.mp4"
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
