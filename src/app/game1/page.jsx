"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Head from "next/head"; // Eğer Next.js kullanıyorsanız
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSteam, FaDiscord, FaReddit, FaTwitter, FaStar,FaInstagram,FaShoppingCart,FaTrophy,} from "react-icons/fa";


const GameDetail = () => {
  // State tanımlamaları
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [commentText, setCommentText] = useState("");

  // AOS Animasyonları
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
  const screenshots = [
    imagePath,
    imagePath,
    imagePath,
    imagePath,
    imagePath,
  ];
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
    { name: "Epic Games", icon: null, url: "https://www.epicgames.com" },
  ];

  // İnceleme ve Puanlar
  const reviews = [
    {
      source: "furkan",
      rating: 4.8,
      comment: "Harika bir oyun!",
    },
    {
      source: "tuncay",
      rating: 4.5,
      comment: "Mükemmel bir deneyim.",
    },
    {
      source: "samet",
      rating: 4.9,
      comment: "Mutlaka oynanmalı.",
    },
  ];

  // Canlı Oyuncu Sayısı (Örnek)
  const [livePlayerCount, setLivePlayerCount] = useState(12567);

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
  { name: "Standart Sürüm", icon: FaShoppingCart, price: 19.99 },
  { name: "Deluxe Sürüm", icon: FaStar, price: 29.99 },
  { name: "Collector's Sürüm", icon: FaTrophy, price: 49.99 },
];

const [selectedPrice, setSelectedPrice] = React.useState(null);

function handlePurchase(index) {
  setSelectedPrice(purchaseOptions[index].price);
}

  return (
    <div className=" text-white">
      {/* Sayfa Başlığı ve Meta Etiketleri */}
      <Head>
        <title>{gameData.name} - Oyun Tanıtım Sayfası</title>
        <meta name="description" content={gameData.slogan} />
      </Head>

      <main className="transition-colors duration-500">
        {/* Ana Başlık ve Arkaplan */}
        <section className="relative h-screen flex items-center justify-center">
          <video
            src={videoPath}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="text-center z-10 px-4">
            <h1 className="text-6xl font-extrabold text-white">
              {gameData.name}
            </h1>
            <p className="mt-4 text-2xl text-gray-200">{gameData.slogan}</p>
          </div>
        </section>

      

        {/* Oyun Fragmanı ve Videolar */}
        <section className="container mx-auto px-6 py-12 ">
          <h2 className="text-5xl font-bold text-center" data-aos="fade-up">
            Oyun Fragmanı
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3" data-aos="fade-right">
              <ReactPlayer
                 url="videos/tree.mp4" 
                width="100%"
                height="100%"
              />
            </div>
            <br></br>
            <div data-aos="fade-up">
              <h3 className="text-3xl font-bold">Oynanış Mekanikleri</h3>
              <p className="mt-4">{gameData.gameplayMechanics}</p>
              <h3 className="text-3xl font-bold mt-8">Sıkça Sorulan Sorular</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Soru 1:</strong> Oyun Türkçe dil desteği sunuyor mu?
                  <br />
                  <strong>Cevap:</strong> Evet, Türkçe dil desteği mevcuttur.
                </li>
                <li>
                  <strong>Soru 2:</strong> Crossplay özelliği var mı?
                  <br />
                  <strong>Cevap:</strong> Evet, tüm platformlar arasında
                  oynanabilir.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Oyun Hakkında Genel Bilgiler */}
        <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h2 className="text-5xl font-bold text-orange-500">Oyun Hakkında</h2>
            <p className="mt-4">{gameData.description}</p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Geliştirici:</strong> {gameData.developer}
              </li>
              <li>
                <strong>Yayıncı:</strong> {gameData.publisher}
              </li>
              <li>
                <strong>Çıkış Tarihi:</strong> {gameData.releaseDate}
              </li>
              <li>
                <strong>Tür:</strong> {gameData.genre}
              </li>
              <li>
                <strong>Platformlar:</strong> {gameData.platforms.join(", ")}
              </li>
              <li>
                <strong>Dil Seçenekleri:</strong> {gameData.languages.join(", ")}
              </li>
              <li>
                <strong>Oyun Modları:</strong> {gameData.modes.join(", ")}
              </li>
              <li>
                <strong>Oyun İçi Satın Alımlar:</strong>{" "}
                {gameData.inAppPurchases ? "Var" : "Yok"}
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-4xl font-bold text-orange-500">
              Canlı Oyuncu Sayısı
            </h3>
            <div>
            </div>
            <p className="mt-4 text-3xl font-extrabold text-green-500">
              {livePlayerCount.toLocaleString()} Oyuncu
            </p>
            <Image
              src="/images/register.jpg"
              alt="Game Screenshot 2"
              width={500}
              height={300}
              className="rounded-lg shadow-xl"
               />
          </div>
        </section>

        {/* Oynanış ve Hikaye Özeti */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center text-orange-500" data-aos="fade-up">
            Hikaye Özeti ve Oynanış
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold">Hikaye Özeti</h3>
              <p className="mt-4">{gameData.storySummary}</p>
              <h3 className="text-3xl font-bold mt-8">Ana Karakterler</h3>
              <ul className="mt-4 space-y-2">
                {gameData.mainCharacters.map((character, index) => (
                  <li key={index}>{character}</li>
                ))}
              </ul>
              <h3 className="text-3xl font-bold mt-8">Düşmanlar</h3>
              <ul className="mt-4 space-y-2">
                {gameData.enemies.map((enemy, index) => (
                  <li key={index}>{enemy}</li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold">Oynanış Mekanikleri</h3>
              <p className="mt-4">{gameData.gameplayMechanics}</p>
              <h3 className="text-3xl font-bold mt-8">Sıkça Sorulan Sorular</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Soru 1:</strong> Oyun Türkçe dil desteği sunuyor mu?
                  <br />
                  <strong>Cevap:</strong> Evet, Türkçe dil desteği mevcuttur.
                </li>
                <li>
                  <strong>Soru 2:</strong> Crossplay özelliği var mı?
                  <br />
                  <strong>Cevap:</strong> Evet, tüm platformlar arasında
                  oynanabilir.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Oyun Görselleri & Konsept Çizimler */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center text-orange-500" data-aos="fade-up">
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
          <h2 className="text-5xl font-bold text-center mt-12 text-orange-500" data-aos="fade-up">
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
          <div
            className="mt-8 flex justify-center space-x-6"
            data-aos="fade-up"
          >
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
    Satın Alma Seçenekleri
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
          className="px-3 py-1 bg-gray-800 text-white rounded-full cursor-pointer"
          onClick={() => handlePurchase(index)}
        >
          {option.name}
        </span>
      ))}
    </div>
  </div>
  </section>
        {/* Sistem Gereksinimleri */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center text-orange-500" data-aos="fade-up">
            Sistem Gereksinimleri
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
            data-aos="fade-up"
          >
            {systemRequirements.map((req, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-white">{req.os}</h3>
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

        {/* Kullanıcı Yorumları & Puanlama */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center text-orange-500" data-aos="fade-up">
            Kullanıcı Yorumları
          </h2>
          <div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold">{review.source}</h3>
                <p className="mt-4">{review.comment}</p>
                <p className="mt-2 text-yellow-500 flex items-center">
                  <FaStar className="mr-2" /> {review.rating}
                </p>
              </div>
            ))}
          </div>
          {/* Yorum Yapma Formu */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-orange-500">Yorum Yap</h3>
            <div className="mt-4 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-4xl cursor-pointer ${
                    rating >= star ? "text-yellow-500" : "text-gray-500"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              className="w-full max-w-2xl mx-auto mt-4 p-4 bg-gray-800 text-white rounded-lg"
              placeholder="Yorumunuzu yazın..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={4}
            />
            <button
              className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition duration-300"
              onClick={() => {
                // Yorum gönderme işlemi
                setComments([
                  ...comments,
                  { user: "Kullanıcı Adı", rating, text: commentText },
                ]);
                setRating(0);
                setCommentText("");
              }}
            >
              Gönder
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GameDetail;
