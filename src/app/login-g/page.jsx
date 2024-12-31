"use client";  // React hook'larını kullanabilmek için bu direktifi eklemelisin

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";  // Dinamik import için ekledik
import { supabase } from "../../lib/supabase"; // Supabase bağlantısını import et

// next/dynamic ile useRouter'ı dinamik olarak import ediyoruz
const Router = dynamic(() => import('next/router'), { ssr: false });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [router, setRouter] = useState(null);  // Router'ı useState ile kontrol edelim

  useEffect(() => {
    // Dinamik olarak Router'ı yükle
    setRouter(Router);
  }, []);

  // Giriş yapma işlemi
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        if (user && !user.email_confirmed_at) {
          setError("E-posta adresiniz doğrulanmamış. Lütfen e-postanızı doğrulayın.");
        } else {
          setSuccess(true);
          console.log("Giriş başarılı:", user);

          // Giriş başarılıysa, anasayfaya yönlendir
          if (router) {
            router.push("/");  // Anasayfaya yönlendir
          }
        }
      }
    } catch (error) {
      setError("Giriş sırasında bir hata oluştu.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(images/register.jpg)' }}>
      {/* Blurlu ve transparan arka plan */}
      <div className="absolute inset-0 opacity-10 backdrop-blur-md"></div>
      
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-xl p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Giriş Yap</h2>
            <p className="text-gray-500 text-sm">Hesabınıza giriş yapın ve hemen başlamak için kaydolun!</p>
          </div>
          
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          {success && <div className="text-green-500 mb-4 text-center">Giriş başarılı! Hesabınız doğrulandı.</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-transparent text-white"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-transparent text-white"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-bold hover:bg-gradient-to-l transition duration-300"
              disabled={loading}
            >
              {loading ? "Yükleniyor..." : "Giriş Yap"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">Hesabınız yok mu? <a href="/register-g" className="text-orange-500 hover:underline">Kaydolun</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
