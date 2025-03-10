"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaSteam,
  FaDiscord,
  FaReddit,
  FaTwitter,
  FaStar,
  FaInstagram,
  FaShoppingCart,
  FaTrophy,
} from "react-icons/fa";


const GameDetail = () => {
  // State tanımlamaları
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [livePlayerCount, setLivePlayerCount] = useState(12567);
  
  const sortedComments = comments.sort((a, b) => b.likes - a.likes);

  //Beğeni Ekleme Fonksiyonu
  function handleLikeComment(index) {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  }

  function handleAddComment() {
    const newComment = {
      name: "Kullanıcı",
      date: new Date().toLocaleDateString(),
      rating: rating,
      text: commentText,
      likes: 0,
    };
    setComments([...comments, newComment]);
    setCommentText("");
    setRating(0);
  }
  
  
  // AOS Animasyonları
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        // Tarayıcıya özgü kodlar burada çalışır
    }
}, []);

  // Temel Oyun Bilgileri
  const gameData = {
    name: "Efsane Oyun",
    slogan: "Kaderini Yaz!",
    releaseDate: "15 temmuz 2025",
    genre: "aksiyon strateji",
    developer: "RavenSect Studios",
    publisher: "RavenSect",
    platforms: ["PC"],
    languages: ["Türkçe", "İngilizce"],
    modes: ["Tek Oyunculu"],
    inAppPurchases: true,
    description:
      "Bu oyun, insanlığın son umutlarını taşıyan bir kahramanın destansı yolculuğunu anlatıyor.",
    storySummary:
      "Karanlık güçlere karşı savaşan bir kahramanın destansı hikayesi...",
    gameplayMechanics:
      "Açık dünya keşfi, görev tabanlı ilerleme, özelleştirilebilir karakterler...",
    mainCharacters: ["Kahraman", "Düşman Lideri", "Yardımcı Karakter"],
    enemies: ["Goblinler", "Ejderhalar", "Karanlık Büyücüler"],
    price: 59.99,
    discount: 20,
    editions: ["Standart", "Deluxe", "Ultimate"],
  };

  // Videolar ve Görseller
  const videoPath = "/videos/background.mp4";
  const imagePath = "/images/register.jpg";
  const screenshots = [imagePath, imagePath, imagePath, imagePath, imagePath];
  const conceptArts = [imagePath, imagePath, imagePath];

  // Sistem Gereksinimleri
  const systemRequirements = [
    {
      os: "Windows",
      minimum: [
        "OS: Windows 10",
        "İşlemci: Intel i5",
        "RAM: 8GB",
        "GPU: GTX 1050",
        "Depolama: 50GB",
      ],
      recommended: [
        "OS: Windows 11",
        "İşlemci: Intel i7",
        "RAM: 16GB",
        "GPU: RTX 3060",
        "Depolama: 100GB",
      ],
    },
    {
      os: "macOS",
      minimum: [
        "OS: macOS 10.15",
        "İşlemci: Intel i5",
        "RAM: 8GB",
        "GPU: AMD Radeon",
        "Depolama: 50GB",
      ],
      recommended: [
        "OS: macOS 11",
        "İşlemci: Intel i7",
        "RAM: 16GB",
        "GPU: AMD Radeon Pro",
        "Depolama: 100GB",
      ],
    },
    {
      os: "Linux",
      minimum: [
        "OS: Ubuntu 18.04",
        "İşlemci: Intel i5",
        "RAM: 8GB",
        "GPU: GTX 1050",
        "Depolama: 50GB",
      ],
      recommended: [
        "OS: Ubuntu 20.04",
        "İşlemci: Intel i7",
        "RAM: 16GB",
        "GPU: RTX 3060",
        "Depolama: 100GB",
      ],
    },
  ];

  // Topluluk Linkleri
  const communityLinks = [
    { name: "Discord", icon: FaDiscord, url: "https://discord.gg/link" },
    { name: "Reddit", icon: FaReddit, url: "https://reddit.com/link" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/link" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/link" },
  ];

  // Satın Alma Linkleri
  const purchaseLinks = [
    { name: "Steam", icon: FaSteam, url: "https://store.steampowered.com" },
  ];

  // İnceleme ve Puanlar
  const reviews = [
    { source: "furkan", rating: 4.8, comment: "Harika bir oyun!" },
    { source: "tuncay", rating: 4.5, comment: "Mükemmel bir deneyim." },
    { source: "samet", rating: 4.9, comment: "Mutlaka oynanmalı." },
  ];

  // Ortalama yorum puanı hesaplama
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Slider Ayarları
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // İndirimli Fiyat Hesaplama
  const discountedPrice = gameData.discount
    ? (gameData.price - gameData.price * (gameData.discount / 100)).toFixed(2)
    : gameData.price.toFixed(2);

  // Paketler ve fiyatlandırma seçenekleri
  const purchaseOptions = [
    { name: "Standart Sürüm", icon: FaShoppingCart, price: 2.50 },
    { name: "Deluxe Sürüm", icon: FaStar, price: 29.99 },
    { name: "Collector's Sürüm", icon: FaTrophy, price: 49.99 },
  ];

  // Örnek oyun haberleri/güncellemeleri
  const newsItems = [
    {
      id: 1,
      title: "Büyük Güncelleme Geldi!",
      description: "Yeni özellikler ve iyileştirmelerle dolu dev güncelleme oyuna eklendi.",
      image: imagePath,
    },
    {
      id: 2,
      title: "Yeni DLC Onaylandı",
      description: "Özel içerikler ve yeni hikayeler DLC ile oyunculara sunulacak.",
      image: imagePath,
    },
    {
      id: 3,
      title: "Etkinlik Zamanı!",
      description:
        "Ön sipariş kullanıcıları için özel etkinlikler düzenleniyor.",
      image: imagePath,
    },
  ];

  function handlePurchase(index) {
    setSelectedPrice(purchaseOptions[index].price);
  }

  return (
    <div className="text-white ">

      <main className="transition-colors duration-500">
        {/* Ana Başlık ve Arkaplan (Hero) */}
        <section className="relative h-screen flex items-center justify-center">
          <video
            src={'videos/tree.mp4'}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="text-center z-10 px-4" data-aos="fade-up">
            <h1 className="text-6xl font-extrabold">{gameData.name}</h1>
            <p className="mt-4 text-2xl text-gray-200">
              {gameData.slogan}
            </p>
          </div>
        </section>

        {/* Oyun Fragmanı ve Oynanış Mekanikleri */}
        <section className="container mx-auto px-10 py-20">
          <h2
            className="text-5xl font-bold text-center text-orange-500"
            data-aos="fade-up"
          >
            Oyun Fragmanı
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3" data-aos="fade-right">
              <ReactPlayer url="videos/tree.mp4" width="100%" height="100%" />
            </div>
            <div className="mt-8 md:mt-0 md:pl-8" data-aos="fade-up">
              <h3 className="text-3xl font-bold text-orange-500">
                Oynanış Mekanikleri
              </h3>
              <p className="mt-4 text-white">
                {gameData.gameplayMechanics}
              </p>
            </div>
          </div>
        </section>

        {/* Hikaye Özeti ve Oynanış */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6"
              >
                Hikaye Özeti ve Oynanış
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-lg text-white"
              >
                Oyunun dünyasına hoş geldiniz. İşte ne bekleyeceğinizin kısa
                bir özeti.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Hikaye Özeti Kartı */}
              <div
                data-aos="fade-right"
                className="p-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-yellow-500"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-500">
                  Hikaye Özeti
                </h3>
                <p className="mt-4 text-white leading-relaxed">
                  {gameData.storySummary}
                </p>
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-orange-500">
                    Ana Karakterler
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {gameData.mainCharacters.map((character, index) => (
                      <li
                        key={index}
                        className="flex items-center"
                      >
                        <svg
                          className="w-5 h-5 text-yellow-500 animate-pulse mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">
                          {character}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-orange-500">
                    Düşmanlar
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {gameData.enemies.map((enemy, index) => (
                      <li
                        key={index}
                        className="flex items-center"
                      >
                        <svg
                          className="w-5 h-5 text-yellow-500 animate-pulse mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 8v4m0 4h.01" />
                        </svg>
                        <span className="text-white">
                          {enemy}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Oynanış Mekanikleri Kartı */}
              <div
                data-aos="fade-left"
                className="p-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-yellow-500"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-500">
                  Oynanış Mekanikleri
                </h3>
                <p className="mt-4 text-white leading-relaxed">
                  {gameData.gameplayMechanics}
                </p>
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-orange-500">
                    Sıkça Sorulan Sorular
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="p-4 rounded-lg border border-transparent hover:border-yellow-500">
                      <p>
                        <strong className="text-orange-500">
                          Soru 1:
                        </strong>{" "}
                        Oyun Türkçe dil desteği sunuyor mu?
                      </p>
                      <p className="mt-2">
                        <strong className="text-orange-500">
                          Cevap:
                        </strong>{" "}
                        Evet, Türkçe dil desteği mevcuttur.
                      </p>
                    </li>
                    <li className="p-4 rounded-lg border border-transparent hover:border-yellow-500">
                      <p>
                        <strong className="text-orange-500">
                          Soru 2:
                        </strong>{" "}
                        Crossplay özelliği var mı?
                      </p>
                      <p className="mt-2">
                        <strong className="text-orange-500">
                          Cevap:
                        </strong>{" "}
                        Evet, tüm platformlar arasında oynanabilir.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oyun Görselleri & Konsept Çizimler */}
        <section className="container mx-auto px-6 py-12">
          <h2
            className="text-5xl font-bold text-center text-orange-500"
            data-aos="fade-up"
          >
            Oyun Görselleri
          </h2>
          <div className="mt-8" data-aos="fade-up">
            <Slider {...sliderSettings}>
              {screenshots.map((screenshot, index) => (
                <div key={index}>
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    width={800}
                    height={450}
                    className="mx-auto rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <h2
            className="text-5xl font-bold text-center mt-12 text-orange-500"
            data-aos="fade-up"
          >
            Konsept Çizimler
          </h2>
          <div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            data-aos="fade-up"
          >
            {conceptArts.map((art, index) => (
              <Image
                key={index}
                src={art}
                alt={`Concept Art ${index + 1}`}
                width={800}
                height={450}
                className="mx-auto rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* Topluluk ve Sosyal Medya */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-5xl font-bold" data-aos="fade-up">
            Topluluk ve Sosyal Medya
          </h2>
          <div className="mt-8 flex justify-center space-x-6" data-aos="fade-up">
            {communityLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition duration-300"
              >
                <link.icon className="text-2xl mr-2" />
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Satın Alma Seçenekleri ve Fiyatlandırma */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center" data-aos="fade-up">
            Ön Sipariş / Satın Alma
          </h2>
          <div className="mt-8 text-center" data-aos="fade-up">
            <h3 className="text-4xl font-bold">Fiyatlandırma</h3>
            <p className="mt-4 text-3xl font-extrabold text-green-500">
              {selectedPrice ? (
                <>
                  <span className="line-through text-red-500">
                    ${gameData.price.toFixed(2)}
                  </span>{" "}
                  ${selectedPrice} (-{gameData.discount}%)
                </>
              ) : (
                <>${gameData.price.toFixed(2)}</>
              )}
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              {purchaseOptions.map((option, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                  onClick={() => handlePurchase(index)}
                >
                  {option.name}
                </span>
              ))}
            </div>
          </div>
          {/* Satın Alma Linkleri */}
          <div className="mt-8 flex justify-center space-x-6" data-aos="fade-up">
            {purchaseLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-orange-400 hover:bg-pink-700 text-white rounded-full transition duration-300"
              >
                {link.icon && <link.icon className="text-2xl mr-2" />}
                {link.name}
              </a>
            ))}
          </div>
          {/* Ön Sipariş Avantajları */}
          <div className="mt-12" data-aos="fade-up">
            <h3 className="text-4xl font-bold text-orange-500 text-center">
              Ön Sipariş Avantajları
            </h3>
            <ul className="mt-4 text-lg text-white max-w-xl mx-auto list-disc list-inside">
              <li>Bonus içerikler ve özel kostümler</li>
              <li>Erken erişim fırsatları</li>
              <li>Özel etkinliklere katılım</li>
            </ul>
          </div>
        </section>

        {/* Sistem Gereksinimleri */}
        <section className="container mx-auto px-6 py-12">
          <h2
            className="text-5xl font-bold text-center text-orange-500"
            data-aos="fade-right"
          >
            Sistem Gereksinimleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6" data-aos="fade-left">
            {systemRequirements.map((req, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-white">
                  {req.os}
                </h3>
                <h4 className="mt-2 text-xl font-semibold text-orange-500">
                  Minimum
                </h4>
                <ul className="mt-2 text-gray-300">
                  {req.minimum.map((item, idx) => (
                    <li key={idx}>- {item}</li>
                  ))}
                </ul>
                <h4 className="mt-4 text-xl font-semibold text-orange-500">
                  Önerilen
                </h4>
                <ul className="mt-2 text-gray-300">
                  {req.recommended.map((item, idx) => (
                    <li key={idx}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      
        {/* Dinamik Oyun Haberleri ve Güncellemeler */}
        <section className="container mx-auto px-6 py-12">
          <h2
            className="text-5xl font-bold text-center text-orange-500"
            data-aos="fade-up"
          >
            Oyun Haberleri ve Güncellemeler
          </h2>
          <div className="mt-8" data-aos="fade-up">
            <Slider {...sliderSettings}>
              {newsItems.map((news) => (
                <div key={news.id} className="p-4">
                  <div className="relative">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={800}
                      height={450}
                      className="mx-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg">
                      <h3 className="text-2xl font-bold text-orange-400">
                        {news.title}
                      </h3>
                      <p className="text-white">{news.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
  <h2 className="text-4xl font-bold text-center text-orange-500" data-aos="fade-up">
    Kullanıcı Yorumları
  </h2>
  <div className="mt-8" data-aos="fade-up">
    {comments.map((comment, index) => (
      <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-orange-500 text-lg font-bold">{comment.name}</h4>
            <p className="text-gray-400 text-sm">{comment.date}</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">{Array(comment.rating).fill('⭐').join('')}</span>
          </div>
        </div>
        <p className="text-white mt-2">{comment.text}</p>
      </div>
    ))}
    <div className="mt-4">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full p-4 text-white bg-gray-700 rounded-lg"
        placeholder="Yorumunuzu buraya yazın..."
      />
      <div className="mt-4">
        <label className="text-white">Yıldızlı Puan:</label>
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
              onClick={() => setRating(star)}
            >
              ⭐
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddComment}
        className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Yorum Yap
      </button>
    </div>
  </div>
</section>


      </main>
    </div>
  );
};

export default GameDetail;
