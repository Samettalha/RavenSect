"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const blur = 10; // Blur seviyesini kod üzerinden ayarlamak
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

  const handleOAuthLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw new Error(error.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br relative">
      <div
        className="absolute inset-0 bg-[url('/images/login.jpg')] bg-cover bg-center opacity-100"
        style={{ filter: `blur(${blur}px)` }}
        aria-hidden="true"
      ></div>
      <div className="bg-gray-900 bg-opacity-10 backdrop-blur-sm border border-gray-500 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-500">Giriş Yap</h2>
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
        <div className="flex justify-around mt-6">
          <button
            onClick={() => handleOAuthLogin("google")}
            className="bg-white text-black p-2 rounded-full shadow hover:shadow-lg"
          >
            Google
          </button>
          <button
            onClick={() => handleOAuthLogin("github")}
            className="bg-black text-white p-2 rounded-full shadow hover:shadow-lg"
          >
            GitHub
          </button>
          <button
            onClick={() => handleOAuthLogin("facebook")}
            className="bg-blue-600 text-white p-2 rounded-full shadow hover:shadow-lg"
          >
            Facebook
          </button>
          <button
            onClick={() => handleOAuthLogin("twitter")}
            className="bg-blue-400 text-white p-2 rounded-full shadow hover:shadow-lg"
          >
            Twitter
          </button>
        </div>
        <p className="text-sm text-purple-400 mt-4 text-center">
          Hesabın yok mu? 
          <span 
            className="text-orange-500 cursor-pointer hover:underline"
            onClick={() => router.push('/register-g')}
          > Kayıt Ol</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
