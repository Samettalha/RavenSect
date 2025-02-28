import Image from "next/image";
import Link from "next/link";

export default function GamePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10 p-5  text-white">
      <h1 className="text-4xl font-bold text-orange-500">Oyunun Tanıtımı</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Bu oyun, heyecan verici bir macera, güçlü görseller ve epik hikayelerle dolu. 
        Kendinizi tamamen farklı bir dünyada bulacaksınız!
      </p>
      
      {/* Görseller */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div>
          <Image
            src="/images/game-screenshot1.jpg"
            alt="Game Screenshot 1"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <Image
            src="/images/game-screenshot2.jpg"
            alt="Game Screenshot 2"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <Image
            src="/images/game-screenshot3.jpg"
            alt="Game Screenshot 3"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Oyun Açıklaması */}
      <section className="mt-10 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-orange-500">Oyun Özellikleri</h2>
        <p className="mt-4 text-gray-300">
          Oyun, sürükleyici bir hikaye, aksiyon dolu dövüş sahneleri ve keşfedilecek geniş bir dünya sunuyor. 
          Oyun içi dinamikler, farklı görevler ve karakterlerle derinlemesine etkileşimler sunuyor.
        </p>
      </section>

      {/* Satın Alma Linkleri */}
      <div className="mt-10 flex gap-5">
        <Link href="https://platform1.com">
          <button className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">
            Steam'den Satın Al
          </button>
        </Link>
        <Link href="https://platform2.com">
          <button className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">
            Epic Games'den Satın Al
          </button>
        </Link>
      </div>

      {/* Oyunlar Listesi */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold text-orange-500">Tüm Oyunlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-xl text-orange-500 font-semibold">Oyun 1</h3>
            <p className="mt-2 text-gray-300">Kısa bir açıklama hakkında Oyun 1</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-xl text-orange-500 font-semibold">Oyun 2</h3>
            <p className="mt-2 text-gray-300">Kısa bir açıklama hakkında Oyun 2</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-xl text-orange-500 font-semibold">Oyun 3</h3>
            <p className="mt-2 text-gray-300">Kısa bir açıklama hakkında Oyun 3</p>
          </div>
        </div>
      </section>

      {/* Filtreleme ve Arama */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-orange-500 text-center">Oyunları Filtrele</h2>
        <div className="flex gap-5 justify-center mt-5">
          <input
            type="text"
            placeholder="Oyun Ara"
            className="bg-gray-800 text-white py-2 px-5 rounded-lg"
          />
          <select className="bg-gray-800 text-white py-2 px-5 rounded-lg">
            <option value="">Tür Seç</option>
            <option value="action">Aksiyon</option>
            <option value="adventure">Macera</option>
            <option value="strategy">Strateji</option>
          </select>
        </div>
      </section>

      {/* Öne Çıkan Oyunlar */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-orange-500 text-center">Öne Çıkan Oyunlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-xl text-orange-500 font-semibold">Öne Çıkan Oyun 1</h3>
            <p className="mt-2 text-gray-300">Öne çıkan 1. oyun hakkında kısa açıklama.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-xl text-orange-500 font-semibold">Öne Çıkan Oyun 2</h3>
            <p className="mt-2 text-gray-300">Öne çıkan 2. oyun hakkında kısa açıklama.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg text-center">
            <h3 className="text-xl text-orange-500 font-semibold">Öne Çıkan Oyun 3</h3>
            <p className="mt-2 text-gray-300">Öne çıkan 3. oyun hakkında kısa açıklama.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
