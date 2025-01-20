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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
      <div
        className="absolute inset-0 bg-[url('/images/login.jpg')] bg-cover bg-center opacity-40"
        aria-hidden="true"
      ></div>
      <br></br>  <br></br>  <br></br>  <br></br>
      <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm border border-gray-500 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-500">Şifre Yenile</h2>
        {message && <div className="text-green-500 mb-4">{message}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            className="bg-transparent border w-full p-3 mb-4 rounded  text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-black p-3 rounded hover:bg-orange-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Gönderiliyor..." : "Şifre Yenile"}
          </button>
        </form>
        <p className="text-sm text-purple-400 mt-4 text-center">
          Geri dönmek ister misiniz?{" "}
          <span
            className="text-orange-500 cursor-pointer hover:underline"
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
