"use client"; // React hook'larını kullanabilmek için bu direktifi eklemelisin

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter hook'unu ekle
import { supabase } from "../../lib/supabase"; // Burada göreli yolu kullan

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter(); // useRouter'ı başlat

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
      }, {
        redirectTo: "http://localhost:3000/register-g", // Doğrulama sonrası yönlendirme
      });

      if (error) {
        setError(error.message); // Hata mesajını göster
      } else {
        console.log("Kullanıcı başarıyla kaydedildi:", user);
        setEmailSent(true); // Doğrulama e-postası gönderildiğini belirt
      }
    } catch (error) {
      setError("Kayıt sırasında bir hata oluştu.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-black relative">
      {/* Arka plan */}
      <div
       className="absolute inset-0 bg-[url('/images/register.jpg')] bg-cover bg-center opacity-100"
       style={{ filter: 'blur(0px)' }}
       aria-hidden="true">
       </div>
      {/* Kayıt kutusu */}
      <div className="bg-transparent backdrop-blur-lg border border-gray-700 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-500">Kayıt Ol</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {emailSent && <div className="text-green-500 mb-4">Doğrulama e-postası gönderildi! Lütfen e-postanızı kontrol edin.</div>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition disabled:opacity-50"
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
