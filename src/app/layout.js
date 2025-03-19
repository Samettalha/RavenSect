"use client"; // Burayı ekledik!
import Footer from "@/components/common/footer";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <html lang="en" className={theme}>
      <body
        className={`${theme === "dark" ? "bg-[#101010] text-white" : "bg-[#a9a9a9] text-black"}`}
      >
        {/* Tema değiştirme butonu */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-5 right-5 z-50 bg-gray-800 text-white p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-600"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
