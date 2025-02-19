"use client"; 
import { useState } from "react";
import { supabase } from "../../../lib/supabase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) throw error;

      setMessage("Şifre yenileme e-postası gönderildi. Lütfen e-postanızı kontrol edin.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-800 relative">
      <div
        className="absolute inset-0 bg-[url('/images/horror-bg.jpg')] bg-cover bg-center opacity-60"
        style={{ filter: "blur(4px)" }}
        aria-hidden="true"
      ></div>
      <br></br>  <br></br>  <br></br>  <br></br>
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur text-white border border-red-500 p-8 rounded-lg shadow-2xl max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-red-500">Şifre Yenile</h2>
        {message && <div className="text-green-500 mb-4">{message}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            className="bg-transparent border w-full p-3 mb-4 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-black p-3 rounded hover:bg-red-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Gönderiliyor..." : "Şifre Yenile"}
          </button>
        </form>
        <p className="text-sm text-red-400 mt-4 text-center">
          Geri dönmek ister misiniz?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => router.push("/account-transactions/login")}
          >
            Giriş Yap
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
