"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { FaGoogle, FaGithub, FaFacebook, FaXing } from "react-icons/fa"; // React Icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Normal giriş işlemi
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
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Giriş bilgileri yanlış. Lütfen tekrar deneyin.");
        }
        throw new Error(error.message);
      }

      const { user } = data;

      if (!user) {
        throw new Error("Kullanıcı bulunamadı. Hesap oluşturmanız gerekebilir.");
      }

      console.log("Giriş başarılı:", user);
      router.push("/welcome");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Sosyal medya ile giriş yapma
  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider, // Hangi sağlayıcıyı kullanıyorsa
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      setError(err.message); // Hata varsa, kullanıcıya göster
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br relative">
      <div
        className="absolute inset-0 bg-[url('/images/register.jpg')] bg-cover bg-center opacity-100"
        style={{ filter: "blur(8px)" }}
        aria-hidden="true"
      ></div>
      <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
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

        {/* Sosyal medya butonları */}
        <div className="mt-6 flex justify-around">
          <button
            onClick={() => handleSocialLogin('google')}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
            aria-label="Google ile Kayıt Ol"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handleSocialLogin('github')}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition flex items-center justify-center"
            aria-label="GitHub ile Kayıt Ol"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => handleSocialLogin('facebook')}
            className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition flex items-center justify-center"
            aria-label="Facebook ile Kayıt Ol"
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => handleSocialLogin('X')}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center"
            aria-label="X ile Kayıt Ol"
          >
            <FaXing />
          </button>
        </div>
        <p className="text-sm text-purple-400 mt-4 text-center">
           Şifrenizi mi unuttunuz?{" "}
         <span
          className="text-orange-500 cursor-pointer hover:underline"
          onClick={() => router.push("/forgotpassword")}
           >
           Şifre Yenile
           </span>
        </p>
        <p className="text-sm text-white mt-4 text-center">
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
