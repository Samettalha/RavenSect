"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub, FaFacebook, FaXing } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

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
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      console.log("Giriş başarılı.");
      router.push("/welcome");
    } catch (err) {
      setError("Bir hata oluştu: " + err.message);
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br  relative">
      <div
        className="absolute inset-0 bg-[url('/images/register.jpg')] bg-cover bg-center opacity-60"
        style={{ filter: "blur(2px)" }}
        aria-hidden="true"
      ></div>
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur text-white border border-yellow-500 p-8 rounded-lg shadow-2xl max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-yellow-500">Giriş Yap</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="bg-transparent border w-full p-3 mb-4 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="bg-transparent border w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-3 rounded hover:bg-pink-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Giriş Yap"}
          </button>
        </form>

        {/* Sosyal medya butonları */}
        <div className="mt-6 flex justify-around">
          <button
            onClick={() => handleSocialLogin('google')}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
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
            onClick={() => handleSocialLogin('xing')}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center"
            aria-label="Xing ile Giriş Yap"
          >
            <FaXing />
          </button>
        </div>

        <p className="text-sm text-white mt-4 text-center">
          Şifrenizi mi unuttunuz?{" "}
          <Link href="/account-transactions/forgotpassword" className="text-red-500 cursor-pointer hover:underline">
            Şifre Yenile
          </Link>
        </p>

        <p className="text-sm text-white mt-4 text-center">
          Hesabın yok mu?{" "}
          <Link href="/account-transactions/register" className="text-red-500 cursor-pointer hover:underline">
            Kayıt Ol
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
