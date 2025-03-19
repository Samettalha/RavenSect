export default async function handler(req, res) {
    const { steamid, appid = "730" } = req.query; 
  
    if (!steamid) {
      return res.status(400).json({ error: "steamid parametresi eksik" });
    }
  
    const apiKey = process.env.STEAM_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Steam API anahtarı ayarlanmamış." });
    }
  
    // İlgili endpoint URL'leri
    const ownedGamesUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamid}&include_appinfo=1&include_played_free_games=1`;
    const achievementsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${apiKey}&steamid=${steamid}&appid=${appid}`;
  
    try {
      // İstekleri eş zamanlı olarak gönderiyoruz
      const [ownedGamesRes, achievementsRes] = await Promise.all([
        fetch(ownedGamesUrl),
        fetch(achievementsUrl)
      ]);
  
      if (!ownedGamesRes.ok || !achievementsRes.ok) {
        throw new Error("Steam API'den veri alınırken sorun oluştu.");
      }
  
      const ownedGamesData = await ownedGamesRes.json();
      const achievementsData = await achievementsRes.json();
  
      // Örneğin, ownedGamesData içinden toplam oynama süresini hesaplayalım:
      const toplamOynamaSuresi = ownedGamesData.response.games
        ? ownedGamesData.response.games.reduce((acc, game) => acc + game.playtime_forever, 0)
        : 0;
  
      res.status(200).json({
        ownedGames: ownedGamesData,
        achievements: achievementsData,
        toplamOynamaSuresi
      });
    } catch (error) {
      console.error("Steam API Hatası: ", error);
      res.status(500).json({ error: error.message });
    }
  }
  