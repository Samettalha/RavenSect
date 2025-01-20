"use client";
import React, { useState } from "react";

function AccountSettings() {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handleFileChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    console.log("Kullanıcı bilgileri kaydedildi.");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Hesap Ayarları</h1>

      {/* Profil Fotoğrafı ve Yükleme Butonu */}
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

      {/* Kullanıcı Bilgileri */}
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

      {/* Güvenlik Ayarları */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          checked={is2FAEnabled}
          onChange={() => setIs2FAEnabled(!is2FAEnabled)}
          className="mr-2"
        />
        <label className="text-orange-600">İki Adımlı Doğrulama (2FA) Aktif Et</label>
      </div>

      {/* Dil ve Tema Seçenekleri */}
      <div className="mb-6">
        <label className="block text-orange-600 font-medium mb-2">Dil Tercihi</label>
        <select
          className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        >
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-orange-600 font-medium mb-2">Tema</label>
        <select
          className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        >
          <option value="dark">Koyu</option>
          <option value="light">Açık</option>
        </select>
      </div>

      {/* Kaydet Butonu */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className=" text-white px-6 py-2 rounded hover:bg-orange-700 transition duration-300"
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(265deg, #F6EE59 -24.03%, #FF3000 111.01%)",
             }}
          >
          Kaydet
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
