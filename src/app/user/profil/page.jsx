"use client"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";  // Üç üst klasöre çıkma
import { FaCamera, FaGoogle, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa"; 

const ProfileSettings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const user = supabase.auth.user();
      if (user) {
        setEmail(user.email);
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        if (profile) {
          setUsername(profile.username);
          setAvatarUrl(profile.avatar_url || ""); // Varsayılan avatar
          setPhone(profile.phone);
          setLanguage(profile.language || "en");
          setNotifications(profile.notifications !== undefined ? profile.notifications : true);
        }
      }
    };
    fetchProfile();
  }, []);

  // Profil güncelleme işlemi
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const user = supabase.auth.user();
      if (!user) {
        throw new Error("Kullanıcı bulunamadı.");
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          username: username,
          email: email,
          avatar_url: avatarUrl,
          phone: phone,
          language: language,
          notifications: notifications,
        });

      if (profileError) {
        throw new Error(profileError.message);
      }

      // Şifreyi değiştirme
      if (newPassword) {
        const { error: passwordError } = await supabase.auth.update({
          password: newPassword,
        });
        if (passwordError) {
          throw new Error(passwordError.message);
        }
      }

      setSuccessMessage("Profiliniz başarıyla güncellendi!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Profil fotoğrafını yükleme
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const filePath = `${Math.random()}/${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        setError("Profil fotoğrafı yüklenirken bir hata oluştu.");
        setLoading(false);
        return;
      }

      const { publicURL, error: urlError } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      if (urlError) {
        setError("Profil fotoğrafı URL alınırken bir hata oluştu.");
        setLoading(false);
        return;
      }

      setAvatarUrl(publicURL); // Avatar URL'sini kaydet
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br relative">
      <div className="absolute inset-0 bg-[url('/images/login.jpg')] bg-cover bg-center opacity-40"></div>
      <div className=" bg-opacity-20 backdrop-blur-sm border border-gray-200 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
      <br></br>  <br></br>  <br></br>  <br></br>
        <h2 className="text-3xl font-extrabold mb-6 text-orange-500">Profil Ayarları</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
        
        {/* Profil Fotoğrafı */}
        <div className="flex justify-center mb-4">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-24 h-24 rounded-full border-4 border-gray-300"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-white">
                <FaCamera />
              </div>
            )}
          </label>
        </div>

        <form onSubmit={handleProfileUpdate}>
          <input
            type="text"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Telefon Numarası"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          >
            <option value="en">İngilizce</option>
            <option value="tr">Türkçe</option>
            {/* Diğer dil seçenekleri */}
          </select>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="mr-2"
            />
            <span className="text-white">Bildirimleri Al</span>
          </div>

          <input
            type="password"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Yeni Şifre (isteğe bağlı)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Kaydet"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;