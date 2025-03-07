"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayIcon, 
  StarIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  XIcon
} from 'lucide-react';

export default function GamePage() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const games = [
    {
      id: 1,
      title: "Cyber Pulse",
      description: "Gelecekçi bir aksiyon macerası!",
      genre: "action",
      images: [
        "images/register.jpg",
        "images/register.jpg",
        "images/register.jpg"
      ],
      color: "from-pink-500 to-purple-500",
      rating: 4.7
    },
    {
      id: 2,
      title: "Strategic Horizon",
      description: "Zekâ sınırlarını zorlayan strateji oyunu!",
      genre: "strategy",
      images: [
        "images/register.jpg",
        "images/register.jpg",
        "images/register.jpg"
      ],
      color: "from-green-500 to-blue-500",
      rating: 4.5
    },
    {
      id: 3,
      title: "Mystic Realms",
      description: "Büyülü bir dünyada keşif yolculuğu!",
      genre: "adventure",
      images: [
        "images/register.jpg",
        "images/register.jpg",
        "images/register.jpg"
      ],
      color: "from-yellow-500 to-red-500",
      rating: 4.6
    }
  ];

  const nextImage = () => {
    if (selectedGame) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedGame.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedGame) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGame.images.length - 1 : prev - 1
      );
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon 
        key={index} 
        size={20} 
        className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="min-h-screen text-white p-6">
      {/* Oyun Kartları */}
      <br></br>      <br></br>
      <br></br>      <br></br>


      <div className="grid md:grid-cols-3 gap-8">
        {games.map(game => (
          <div 
            key={game.id}
            onClick={() => {
              setSelectedGame(game);
              setCurrentImageIndex(0);
            }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <div className={`h-48 bg-gradient-to-r ${game.color} relative`}>
              <div className="absolute bottom-2 right-2 bg-black/40 px-3 py-1 rounded-full flex items-center">
                {renderStars(game.rating)}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                {game.title}
              </h3>
              <p className="text-white/70 mb-4">{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Oyun Detay Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-[90%] max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden"
            >
              {/* Resim Slider */}
              <div className="relative w-full h-[500px] overflow-hidden">
                <img 
                  src={selectedGame.images[currentImageIndex]} 
                  alt={selectedGame.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Sol Ok Butonu */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                >
                  <ChevronLeftIcon className="text-white" />
                </button>
                
                {/* Sağ Ok Butonu */}
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                >
                  <ChevronRightIcon className="text-white" />
                </button>

                {/* Resim Sayısı */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {selectedGame.images.length}
                </div>

                {/* Kapat Butonu */}
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
                >
                  <XIcon className="text-white" />
                </button>
              </div>

              {/* Oyun Bilgileri */}
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  {selectedGame.title}
                </h2>
                <p className="text-white/70 mb-4">{selectedGame.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex">{renderStars(selectedGame.rating)}</div>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {selectedGame.genre.charAt(0).toUpperCase() + selectedGame.genre.slice(1)}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-400 to-pink-500 px-6 py-3 rounded-full">
                    Şimdi Satın Al
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}