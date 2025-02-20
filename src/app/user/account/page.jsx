"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zhdxjrqckdcgqhmxjlts.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZHhqcnFja2RjZ3FobXhqbHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNTg1MjQsImV4cCI6MjA1NDkzNDUyNH0.RFrDMHk_GJi7-Oh00CAv_nsPKz-Jl6IBTE12EDnSM9g"
);
function AccountSettings() {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`public/${file.name}`, file, {
          cacheControl: "3600",
          upsert: true,
        });
      setLoading(false);
      if (error) {
        setMessage("Profil resmi yüklenirken hata oluştu!");
        console.error(error);
      } else {
        setProfilePic(URL.createObjectURL(file));
        setMessage("Profil resmi başarıyla yüklendi!");
      }
    }
  };
  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("users")
      .upsert({
        username,
        email,
        phone,
        password, // is2FAEnabled kaldırıldı
      });
  
    setLoading(false);
    if (error) {
      setMessage("Kullanıcı bilgileri kaydedilemedi! Hata: " + error.message);
      console.error(error);
    } else {
      setMessage("Kullanıcı bilgileri başarıyla kaydedildi!");
    }
  };
  
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Hesap Ayarları</h1>

      {message && (
        <div className="mb-4 p-2 text-center bg-green-500 text-white rounded">
          {message}
        </div>
      )}

      <div className="flex items-center flex-col sm:flex-row mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white font-bold">P</div>
          )}
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
        />
      </div>

      <div className="mb-2">
        <label className="block text-orange-600 font-medium mb-2">Kullanıcı Adı</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          placeholder="Kullanıcı adınızı girin"
        />
      </div>

      <div className="mb-6">
        <label className="block text-orange-600 font-medium mb-2">E-posta</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          placeholder="E-posta adresinizi girin"
        />
      </div>

      <div className="mb-6">
        <label className="block text-orange-600 font-medium mb-2">Telefon Numarası</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          placeholder="Telefon numaranızı girin"
        />
      </div>

      <div className="mb-6">
        <label className="block text-orange-600 font-medium mb-2">Şifre</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          placeholder="Yeni şifrenizi girin"
        />
      </div>

      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          checked={is2FAEnabled}
          onChange={() => setIs2FAEnabled(!is2FAEnabled)}
          className="mr-2"
        />
        <label className="text-orange-600">İki Adımlı Doğrulama (2FA) Aktif Et</label>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={loading}
          className={`text-white px-6 py-2 rounded transition duration-300 ${loading ? "bg-gray-500" : "hover:bg-orange-700"}`}
          style={{
            borderRadius: "40px",
            background:
              loading
                ? "gray"
                : "linear-gradient(265deg,rgb(189, 15, 15) -24.03%,rgb(14, 8, 7) 111.01%)",
          }}
        >
          {loading ? "Kaydediliyor..." : "Kaydet"}
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
