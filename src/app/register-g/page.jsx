"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { FaGoogle, FaGithub, FaFacebook, FaXing } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      const { user } = data;

      if (!user.email_confirmed_at) {
        throw new Error("E-posta adresiniz henüz doğrulanmamış. Lütfen e-postanızı kontrol edin.");
      }

      console.log("Giriş başarılı:", user);
      router.push("/welcome");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider, // Hangi sağlayıcıyı kullanıyorsanız burada göndereceksiniz
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('Başarılı giriş sağlandı!');
    } catch (err) {
      console.error('Giriş hatası:', err.message); // Hata mesajını konsola yazdırıyoruz
      setError(err.message); // Hata mesajını kullanıcıya gösteriyoruz
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br relative">
      <div
        className="absolute inset-0 bg-[url('/images/register.jpg')] bg-cover bg-center opacity-100"
        style={{ filter: "blur(0px)" }}
        aria-hidden="true"
      ></div>
      <div className="bg-gray-900 bg-opacity-10 backdrop-blur-sm border border-gray-500 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-500">Kayıt Ol</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
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
            {loading ? "Yükleniyor..." : "Giriş Yap"}
          </button>
        </form>

        {/* Sosyal medya butonları */}
        <div className="mt-6 flex justify-around">
          <button
            onClick={() => handleSocialLogin('google')}
            className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition flex items-center justify-center"
            aria-label="Google ile Giriş Yap"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handleSocialLogin('github')}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition flex items-center justify-center"
            aria-label="GitHub ile Giriş Yap"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => handleSocialLogin('facebook')}
            className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition flex items-center justify-center"
            aria-label="Facebook ile Giriş Yap"
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => handleSocialLogin('twitter')}
            className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition flex items-center justify-center"
            aria-label="Twitter ile Giriş Yap"
          >
            <FaXing />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
