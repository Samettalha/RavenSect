const Footer = () => {
  return (
    <footer className="bg-[#101015] text-white py-10 px-5">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold">KEŞFET</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="/games" className="text-cyan-400 hover:underline">OYUNLAR</a></li>
            <li><a href="/news" className="text-cyan-400 hover:underline">HABERLER</a></li>
            <li><a href="/community" className="text-cyan-400 hover:underline">TOPLULUK</a></li>
            <li><a href="/support" className="text-cyan-400 hover:underline">DESTEK</a></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold">HAKKIMIZDA</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="/hakkimizda" className="hover:underline">Şirketimiz</a></li>
            <li><a href="/politika" className="hover:underline">Politikalarımız</a></li>
            <li><a href="/press" className="hover:underline">Basın</a></li>
            <li><a href="/iletisim" className="hover:underline">İletişim</a></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold">TOPLULUK</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="/blog" className="hover:underline">Ravensect Forum</a></li>
            <li><a href="/support" className="hover:underline">Destek</a></li>
            <li><a href="/leaderboards" className="hover:underline">Oyuncu Sıralamaları</a></li>
            <li><a href="/support" className="hover:underline">Yardım</a></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold">RAVENSECT ŞİMDİ STEAMDE</h2>
          <p className="text-sm mt-2">Favori oyunlarını hızlı ve güvenli bir şekilde indir, hiçbir gelişmeyi kaçırma!</p>
          <div className="mt-3 flex space-x-2">
            <a href="https://store.steampowered.com/?l=turkish" target="_blank" rel="noopener noreferrer">
              <img src="images/steam.png" alt="Steam" className="w-2 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm">
        Ravensect™, oyuncular için en iyi deneyimi sunar.
      </div>
    </footer>
  );
};

export default Footer;