"use client";
import { useEffect, useState } from "react";

export default function PlayerScoutPage() {
  const [steamData, setSteamData] = useState(null);

  useEffect(() => {
    // Örneğin, belirli bir steamid için veri çekiyoruz.
    const steamid = "76561198000000000"; // Örnek steamid
    fetch(`/api/steam-user?steamid=${steamid}&appid=730`)
      .then((res) => res.json())
      .then((data) => setSteamData(data))
      .catch((err) => console.error("Veri çekilirken hata: ", err));
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Oyuncu Scout Sayfası</h1>
      {steamData ? (
        <div className="bg-white p-4 rounded shadow">
          <p><strong>Toplam Oynama Süresi: </strong>{steamData.toplamOynamaSuresi} dakika</p>
          {/* steamData.ownedGames ve steamData.achievements detaylarını burada işleyebilirsiniz */}
        </div>
      ) : (
        <p className="text-center">Veriler çekiliyor...</p>
      )}
    </div>
  );
}
