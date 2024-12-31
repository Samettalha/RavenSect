"use client";  // React hook'larını kullanabilmek için bu direktifi eklemelisin

import { useState } from "react";
import { supabase } from "../../lib/supabase";  // Burada göreli yolu kullan
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Kayıt olma işlemi
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Supabase'e kullanıcı kaydetme
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);  // Hata mesajını göster
      } else {
        console.log("Kullanıcı başarıyla kaydedildi:", user);
        // Kullanıcı kaydedildikten sonra yapılacak işlemler
      }
    } catch (error) {
      setError("Kayıt sırasında bir hata oluştu.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            className="border w-full p-2 mb-4 rounded"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border w-full p-2 mb-4 rounded"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
