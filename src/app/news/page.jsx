"use client"; 
// pages/content.js
import Link from 'next/link';

export default function Content() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-16">

      {/* Section 1: Ana Sayfa */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Ana Sayfa</h2>

        {/* Manşet Alanı */}
        <div className="relative mb-8">
          <Link href="/manset">
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition duration-500">
              <img
                src="https://via.placeholder.com/1200x500"
                alt="Manşet Görseli"
                className="w-full h-96 object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-4xl text-white font-bold text-center px-4">
                  En Güncel ve Popüler Haberler
                </h3>
              </div>{/*selın kavutcu seamet */}
            </div>
          </Link>
        </div>

        {/* Öne Çıkan Oyun İncelemeleri ve Haberleri */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4">Öne Çıkan Oyun İncelemeleri ve Haberleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kart 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Link href="/incelemeler/1">
                <div className="cursor-pointer">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Oyun İncelemesi 1"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                      Oyun İncelemesi 1
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Grafik, hikâye, oynanış ve ses tasarımı değerlendirmesi.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* Kart 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Link href="/haberler/1">
                <div className="cursor-pointer">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Öne Çıkan Haber 1"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                      Öne Çıkan Haber 1
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Yeni oyun duyuruları ve güncellemeler.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Yeni Çıkacak Oyunların Listesi */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4">Yeni Çıkacak Oyunlar</h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <Link href="/oyunlar/1">
                  <span className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300">
                    Oyun 1
                  </span>
                </Link>
                <span className="text-gray-500">2025-06-15</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <Link href="/oyunlar/2">
                  <span className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300">
                    Oyun 2
                  </span>
                </Link>
                <span className="text-gray-500">2025-07-20</span>
              </li>
              <li className="flex justify-between">
                <Link href="/oyunlar/3">
                  <span className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300">
                    Oyun 3
                  </span>
                </Link>
                <span className="text-gray-500">2025-08-05</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Oyun Dünyasından Son Dakika Gelişmeleri */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">Oyun Dünyasından Son Dakika Gelişmeleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Haber Kart 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Link href="/haberler/dakika-1">
                <div className="cursor-pointer">
                  <img
                    src="https://via.placeholder.com/600x350"
                    alt="Son Dakika Haber 1"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                      Son Dakika Haber 1
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Büyük bir turnuva sonucu açıklandı.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* Haber Kart 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Link href="/haberler/dakika-2">
                <div className="cursor-pointer">
                  <img
                    src="https://via.placeholder.com/600x350"
                    alt="Son Dakika Haber 2"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                      Son Dakika Haber 2
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Yeni oyun çıkışı duyuruldu, detaylar burada.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Haberler Bölümü */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Haberler Bölümü</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Oyun Haberleri */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/haberler/oyun">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x350"
                  alt="Oyun Haberleri"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Oyun Haberleri
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Yeni oyun duyuruları, güncellemeler, etkinlikler.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Donanım Haberleri */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/haberler/donanım">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x350"
                  alt="Donanım Haberleri"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Donanım Haberleri
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Yeni ekran kartları, işlemciler, konsollar.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Esports Haberleri */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/haberler/esports">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x350"
                  alt="Esports Haberleri"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Esports Haberleri
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Turnuva sonuçları, takım duyuruları.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Endüstri Haberleri */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/haberler/endustri">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x350"
                  alt="Endüstri Haberleri"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Endüstri Haberleri
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Oyun stüdyoları ve sektörel gelişmeler.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Oyun İncelemeleri */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Oyun İncelemeleri</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/incelemeler/1">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Oyun İncelemesi 1"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Oyun İncelemesi 1
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Detaylı inceleme, 10 üzerinden puanlama, yıldızlı değerlendirme.
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-sm text-gray-500">(10/10)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/incelemeler/2">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Oyun İncelemesi 2"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Oyun İncelemesi 2
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Kullanıcı yorumları ve detaylı analiz.
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★☆</span>
                    <span className="text-sm text-gray-500">(8.5/10)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/incelemeler/3">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Oyun İncelemesi 3"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Oyun İncelemesi 3
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Grafik, hikâye, oynanış ve ses tasarımı üzerine analiz.
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-500 mr-1">★★★☆☆</span>
                    <span className="text-sm text-gray-500">(7/10)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Rehberler ve İpuçları */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Rehberler ve İpuçları</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="list-disc list-inside space-y-2">
            <li>Oyun içi rehberler ve stratejiler</li>
            <li>Başlangıç kılavuzları ve karakter önerileri</li>
            <li>Hile kodları ve gizli özellikler</li>
          </ul>
        </div>
      </section>

      {/* Section 5: Oyun Kütüphanesi (Veritabanı) */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Oyun Kütüphanesi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/kutuphane/oyun1">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Oyun Kütüphanesi 1"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Oyun 1
                  </h4>
                  <p className="text-gray-600 mt-2">Detaylı bilgi, sistem gereksinimleri; PC, PS5</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/kutuphane/oyun2">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Oyun Kütüphanesi 2"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Oyun 2
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Çok platformlu oyun, detaylar ve sistem gereksinimleri.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* İsteğe bağlı olarak daha fazla kart eklenebilir */}
        </div>
      </section>

      {/* Section 6: Video ve Yayın İçeriği */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Video ve Yayın İçeriği</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/video/fragman-1">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x350"
                  alt="Fragman"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Fragman 1
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Görsel açıdan etkileyici fragman.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/video/canli">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x350"
                  alt="Canlı Yayın"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Canlı Yayın
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Esports ve etkinliklerden canlı yayın duyuruları.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Forum ve Topluluk Alanı */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Forum ve Topluluk Alanı</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Kullanıcıların haberler hakkında yorum yapabileceği ve tartışabileceği alan.
          </p>
          <Link href="/forum">
            <div className="cursor-pointer text-blue-600 font-semibold hover:underline">
              Forum Tartışmalarına Göz Atın →
            </div>
          </Link>
        </div>
      </section>

      {/* Section 8: Blog ve Makaleler */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Blog ve Makaleler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/blog/makale-1">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Blog Makale 1"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Derinlemesine Oyun Analizi
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Editörlerin yazdığı derin analizler ve röportajlar.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <Link href="/blog/makale-2">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Blog Makale 2"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold hover:text-blue-600 transition duration-300">
                    Gelecek Tahminleri
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Oyun sektörüne dair özel yazılar ve gelecek öngörüleri.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Oyun Fırsatları ve Kampanyalar */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Oyun Fırsatları ve Kampanyalar</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <Link href="/kampanyalar/steam">
                <span className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300">
                  Steam İndirimleri
                </span>
              </Link>
              <span className="text-gray-500">%50 İndirim</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <Link href="/kampanyalar/epic">
                <span className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300">
                  Epic Games Ücretsiz Oyunlar
                </span>
              </Link>
              <span className="text-gray-500">Bu Hafta</span>
            </li>
            <li className="flex justify-between">
              <Link href="/kampanyalar/oner-siparis">
                <span className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300">
                  Ön Sipariş Fırsatları
                </span>
              </Link>
              <span className="text-gray-500">Detaylar için tıkla</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 10: Üye Sistemi ve Kişiselleştirme */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Üye Sistemi ve Kişiselleştirme</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Kullanıcı kaydı ve giriş yaparak favori oyunlarınızı seçebilir, haber bildirimleri alabilir,
            kendi incelemelerinizi yazabilir ve puanlayabilirsiniz.
          </p>
          <Link href="/uye">
            <div className="cursor-pointer text-blue-600 font-semibold hover:underline">
              Üye Olun / Giriş Yapın →
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
