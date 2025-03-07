import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangleIcon, 
  HomeIcon, 
  RefreshCwIcon 
} from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <AlertTriangleIcon 
            size={100} 
            className="text-yellow-400 animate-pulse"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          404
        </h1>
        <h2 className="text-2xl text-white mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-white/70 mb-6">
          Aradığınız sayfa şu anda mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            <HomeIcon className="mr-2" /> Ana Sayfa
          </Link>
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            <RefreshCwIcon className="mr-2" /> Yenile
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;