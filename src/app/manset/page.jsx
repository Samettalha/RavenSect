"use client"; 
import Head from "next/head";
import Link from "next/link";

export default function OyunDetay() {
  return (
    <>
      <Head>
        <title>Tower Defence: Savaşın Zirvesi - Oyun Detayları</title>
        <meta
          name="description"
          content="Tower Defence oyunu; aksiyon, macera ve stratejinin harmanlandığı eşsiz deneyim. Kule savunmanızı kurun, düşman dalgalarına meydan okuyun!"
        />
      </Head>
      <div className="relative min-h-screen  text-white overflow-hidden">
        {/* Arka plan video (veya resim) */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/video/background.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
          {/* Eğer video yoksa aşağıdaki img etiketini kullanabilirsiniz */}
          {/*
          <img
            src="/images/bg-oyun.jpg"
            alt="Oyun Arka Planı"
            className="w-full h-full object-cover opacity-40"
          />
          */}
        </div>

        {/* İçerik */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Başlık Bölümü */}
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
              Tower Defence: Savaşın Zirvesi
            </h1>
            <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
              Aksiyonun, maceranın ve stratejinin buluştuğu bu oyunda, savunmanızı
              stratejik olarak inşa edin, her dalgada yenilmez olun. Her hamle, sizi
              zaferin daha da yakına taşıyor.
            </p>
          </header>

          {/* Oyuna Genel Bakış ve Özellikler */}
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Genel Bakış */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Oyuna Genel Bakış</h2>
              <p>
                Bu oyun, klasik tower defence mekaniklerini modern aksiyon sahneleri
                ve macera dolu hikaye anlatımı ile harmanlıyor. Stratejik düşünme,
                takım oluşturma ve hızlı refleksler her an ön plana çıkıyor.
              </p>
              <p>
                Farklı kule tipleri ve savunma stratejileriyle düşman dalgalarına karşı
                dayanıklı bir savunma hattı oluşturun. Her seviyede değişen zorluklar,
                yeni düşman türleri ve özel beceriler sizi bekliyor.
              </p>
              <Link
                href="/oyuna-basla"
                className="inline-block bg-green-600 text-white font-semibold rounded-full px-8 py-3 shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                Oyuna Başla
              </Link>
            </div>

            {/* Öne Çıkan Özellikler */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Öne Çıkan Özellikler</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gerçek zamanlı stratejik savaşlar</li>
                <li>Kapsamlı kule savunma sistemi ve upgrades</li>
                <li>Etkileyici aksiyon sahneleri</li>
                <li>Büyüleyici macera hikayesi</li>
                <li>Dinamik ortam ve sahne geçişleri</li>
                <li>Özel güçler ve yetenek kombinasyonları</li>
              </ul>
              <h2 className="text-3xl font-semibold mt-8">
                Neden Bu Oyunu Seçmelisiniz?
              </h2>
              <p>
                Her seviye, yenilmez bir strateji deneyimi sunarak oyuncunun zekasını
                ve reaksiyon hızını test ediyor. Gerçek bir kahraman olma yolunda,
                planlı hamleleriniz ve anlık kararlarınızla düşmanlarınızı alt edin.
              </p>
            </div>
          </section>

          {/* Galeri Bölümü */}
          <section className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-8">Galeri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/images/galeri-1.jpg"
                alt="Oyun Görseli 1"
                className="rounded-md object-cover"
              />
              <img
                src="/images/galeri-2.jpg"
                alt="Oyun Görseli 2"
                className="rounded-md object-cover"
              />
              <img
                src="/images/galeri-3.jpg"
                alt="Oyun Görseli 3"
                className="rounded-md object-cover"
              />
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-gray-800 py-4 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Oyununuz. Tüm hakları saklıdır.
        </footer>
      </div>
    </>
  );
}
