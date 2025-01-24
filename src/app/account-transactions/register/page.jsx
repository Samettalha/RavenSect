"use client"; // React hook'larını kullanabilmek için bu direktifi eklemelisin

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter hook'unu ekle
import { supabase } from "../../../lib/supabase"; // Burada göreli yolu kullan
import { FaGoogle, FaGithub, FaFacebook, FaXing } from "react-icons/fa"; // İkon kütüphanesi eklendi

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Kullanıcı adı için state eklendi
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
      const { data, error } = await supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          redirectTo: `${window.location.origin}/account transactions/register`, // Doğrulama sonrası yönlendirme
        }
      );

      if (error) {
        setError(error.message); // Hata mesajını göster
      } else {
        // Kullanıcı bilgilerini profillere ekle
        const { error: profileError } = await supabase
          .from("profiles") // Supabase'de "profiles" adında bir tablo olduğunu varsayıyoruz
          .insert([{ id: data.user.id, username, email }]);

        if (profileError) {
          setError("Profil oluşturulurken bir hata oluştu.");
        } else {
          console.log("Kullanıcı başarıyla kaydedildi:", data.user);
          setEmailSent(true); // Doğrulama e-postası gönderildiğini belirt
        }
      }
    } catch (error) {
      setError("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }

    setLoading(false);
  };

  // Sosyal medya ile kayıt olma işlemleri
  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError("Sosyal medya ile giriş sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-black relative">
      {/* Arka plan */}
      <div
        className="absolute inset-0 bg-[url('/images/register.jpg')] bg-cover bg-center opacity-100"
        style={{ filter: "blur(3px)" }}
        aria-hidden="true"
      ></div>
      {/* Kayıt kutusu */}
      <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm border text-white border-gray-500 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-500">Kayıt Ol</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {emailSent && (
          <div className="text-green-500 mb-4">
            Doğrulama e-postası gönderildi! Lütfen e-postanızı kontrol edin.
          </div>
        )}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
        {/* Sosyal medya butonları */}
        <div className="mt-6 flex justify-around">
          <button
            onClick={() => handleSocialLogin("google")}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
            aria-label="Google ile Kayıt Ol"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition flex items-center justify-center"
            aria-label="GitHub ile Kayıt Ol"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition flex items-center justify-center"
            aria-label="Facebook ile Kayıt Ol"
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => handleSocialLogin("twitter")}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center"
            aria-label="X ile Kayıt Ol"
          >
            <FaXing />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
