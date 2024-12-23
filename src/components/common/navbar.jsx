"use client";  // "use client" ifadesi, bu bileşenin yalnızca istemci tarafında çalışacağını belirtir. Next.js, bazı bileşenlerin yalnızca istemci tarafında çalışmasını sağlar.

import { useState, useEffect, useRef } from "react";  // React kütüphanesinden state, effect ve referansları import eder.
import { usePathname } from "next/navigation";  // Next.js'in yönlendirme kütüphanesinden, mevcut yol bilgisini almak için kullanılır.
import Image from "next/image";  // Next.js'in optimized image bileşeni, görsellerin daha verimli yüklenmesini sağlar.
import Link from "next/link";  // Next.js'in yönlendirme bileşeni, sayfalar arası gezinti sağlar.
import { FiMenu, FiX } from "react-icons/fi";  // React Icons kütüphanesinden menü ve kapama ikonlarını import eder.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  // Menü açık mı değil mi kontrol etmek için state
  const pathname = usePathname();  // Şu anki URL yolunu almak için

  // Navbar'ın görünürlüğünü yönetmek için state
  const [showNavbar, setShowNavbar] = useState(true);

  // Önceki scroll pozisyonunu saklamak için ref
  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );

  useEffect(() => {
    // Sayfa kaydırıldığında navbar'ın gizlenip gizlenmeyeceğini kontrol eder.
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos.current > currentScrollPos) {
        // Kullanıcı yukarı kaydırıyorsa navbar'ı göster
        setShowNavbar(true);
      } else {
        // Kullanıcı aşağı kaydırıyorsa navbar'ı gizle
        setShowNavbar(false);
      }

      prevScrollPos.current = currentScrollPos;  // Önceki scroll pozisyonunu güncelle
    };

    window.addEventListener("scroll", handleScroll);  // Sayfa kaydırma olayına dinleyici ekler

    // Cleanup (temizleme) işlevi: Sayfa bileşeni unmont edilmeden önce scroll dinleyicisini kaldırır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menü açma ve kapama işlevi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Geçerli yolu kontrol edip aktif yolu belirlemek için yardımcı işlev
  const isActive = (path) => {
    return pathname === path ? "text-orange-500" : "text-white";
  };

  return (
    <nav
      className={`w-full z-50 border-b border-b-[#343434] transition-transform duration-300 ${
        showNavbar ? "fixed top-0 translate-y-0" : "absolute -translate-y-full"
      }`}
      style={{ backgroundColor: "hsla(0, 0%, 9%, 0.4)" }}
    >
      {/* Navbar'ın içerik bölümü */}
      <div className="container mx-auto flex justify-between items-center h-20 px-5">
        {/* Logo, ana sayfaya yönlendirir */}
        <Link href="/">
          <Image
            src={"/images/sametalasın.png"}
            alt="XPZone Logo"  // Logo resmi
            width={90}
            height={31}
            className="cursor-pointer"
          />
        </Link>

        {/* Küçük ekranlarda menü ikonunu gösterir (Hamburger Menu) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-white w-8 h-8" />
            ) : (
              <FiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        {/* Büyük ekranlar için navigasyon linkleri */}
        <div className="hidden md:flex justify-around text-white gap-12 font-semibold text-sm">
          {/* Zonelar Link */}
          <div className="min-w-[100px] text-center">
            <Link
              href="/zonelar"
              className={`transition-all duration-300 ease-in-out hover:text-orange-500 ${isActive(
                "/zonelar"
              )}`}
            >
              Zonelar
            </Link>
          </div>
          {/* Hakkımızda Link */}
          <div className="min-w-[100px] text-center">
            <Link
              href="/hakkimizda"
              className={`transition-all duration-300 ease-in-out hover:text-orange-500 ${isActive(
                "/hakkimizda"
              )}`}
            >
              Hakkımızda
            </Link>
          </div>

          {/* Naber Abi Link */}
          <div className="min-w-[100px] text-center">
            <Link
              href="/Maker"
              className={`transition-all duration-300 ease-in-out hover:text-orange-500 ${isActive(
                "/Maker"
              )}`}
            >
              Maker
            </Link>
          </div>
        </div>

        {/* İletişim Linki - Büyük ekranlarda "İletişime Geçin" butonu */}
        <Link
          href="/iletisim"
          className="hidden md:flex rounded-[40px] px-5 py-3 text-center transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            background:
              "linear-gradient(225deg, #FBB040 14.89%, #F15A29 85.85%)",
          }}
        >
          <p className="font-semibold text-sm text-white">İletişime Geçin</p>
        </Link>
      </div>

      {/* Mobile Menu (Mobil ekranlarda açılan menü) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden text-white border-t-2 border-t-[#323232]`}
        style={{ backgroundColor: "hsla(0, 0%, 9%, 0.4)" }}
      >
        <div className="flex flex-col items-center gap-5 py-5">
          {/* Mobile menüde Zonelar, Hakkımızda ve naber abi linkleri */}
          <Link
            href="/zonelar"
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-orange-500 ${isActive(
              "/zonelar"
            )}`}
          >
            Zonelar
          </Link>
          <Link
            href="/hakkimizda"
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-orange-500 ${isActive(
              "/hakkimizda"
            )}`}
          >
            Hakkımızda
          </Link>
          <div className="min-w-[100px] text-center">
            <Link
              href="/Maker"
              className={`transition-all duration-300 ease-in-out hover:text-orange-500 ${isActive(
                "/Maker"
              )}`}
            >
              Maker
            </Link>
          </div>
          {/* İletişim linki mobilde */}
          <Link
            href="/iletisim"
            className="rounded-[40px] px-5 py-3 text-center"
            style={{
              background:
                "linear-gradient(225deg, #FBB040 14.89%, #F15A29 85.85%)",
            }}
          >
            <p className="font-semibold text-sm text-white">İletişime Geçin</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
