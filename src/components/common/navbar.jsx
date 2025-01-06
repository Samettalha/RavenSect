"use client"; // İstemci tarafında çalıştırılması gereken bileşen.

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { supabase } from "../../lib/supabase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // Profil dropdown state
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null); // Kullanıcı adı için state

  // Opaklık için sayısal değer
  const opacity = 0.8; // Geliştirici kodda ayarlanabilir, şu an %80 opaklık

  // Kullanıcı verilerini al
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", user.id)
          .single();

        if (data) {
          setUsername(data.username);
        } else {
          setUsername("Kullanıcı");
        }
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login-g");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowDropdown(false); // Menü dropdown kapalı kalmalı
  };

  const toggleMenuDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowProfileDropdown(false); // Profil dropdown kapalı kalmalı
  };

  const isActive = (path) =>
    pathname === path ? "text-orange-500" : "text-white";

  return (
    <nav
      className={`w-full z-50 border-b border-b-[#343434] bg-black fixed top-0 transition-transform duration-300`}
      style={{
        background: `rgba(0, 0, 0, 0.3)`, // Opaklık seviyesi 0.5
      }}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-7">
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <Link href="/">
            <Image
              src="/images/zainexlogo-.png"
              alt="Zainex Logo"
              width={260}
              height={50}
              className="cursor-pointer -ml-4"
            />
          </Link>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-white" />
        </div>
        {/* Desktop Menü */}
        <div className="hidden md:flex gap-12 text-white font-semibold items-center justify-center flex-1">
          <Link href="/zonelar" className={`${isActive("/zonelar")} hover:text-orange-500`}>
            Zonelar
          </Link>
          <Link href="/hakkimizda" className={`${isActive("/hakkimizda")} hover:text-orange-500`}>
            Hakkımızda
          </Link>
          <Link href="/blog" className={`${isActive("/blog")} hover:text-orange-500`}>
            Blog
          </Link>
          <div className="relative">
            <button
              onClick={toggleMenuDropdown}
              className="flex items-center text-white hover:text-orange-500"
            >
              Menü
              <FiChevronDown />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg">
                <Link href="/Maker" className="block px-4 py-2 hover:bg-gray-700">
                   Maker
                </Link>
                <Link href="/menu-item2" className="block px-4 py-2 hover:bg-gray-700">
                  Menü Item 2
                </Link>
                <Link href="/menu-item3" className="block px-4 py-2 hover:bg-gray-700">
                  Menü Item 3
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/iletisim"
            className="hidden md:block rounded-[40px] px-5 py-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:scale-105 transition"
          >
            İletişime Geçin
          </Link>
        </div>

        {user ? (
          <div className="relative">
            <button onClick={toggleProfileDropdown} className="flex items-center gap-2 text-white">
              <Image
                src="/images/.png"
                alt="Profil"
                width={30}
                height={30}
                className="rounded-full"
              />
              {username || "Kullanıcı"}
              <FiChevronDown />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg">
                <Link href="/user/profil" className="block px-4 py-2 hover:bg-gray-700">
                  Profil Ayarları
                </Link>
                <Link href="/user/account" className="block px-4 py-2 hover:bg-gray-700">
                  Hesap Ayarları
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-left hover:bg-gray-700"
                >
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex gap-4">
            <Link
              href="/register-g"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Kayıt Ol
            </Link>
            <Link
              href="/login-g"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Giriş Yap
            </Link>
          </div>
        )}
      </div>

      {/* Mobil Menü */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden text-white bg-gray-800 p-5 border-t border-gray-700`}
      >
        <Link href="/zonelar" className="block py-2 hover:text-orange-500">
          Zonelar
        </Link>
        <Link href="/hakkimizda" className="block py-2 hover:text-orange-500">
          Hakkımızda
        </Link>
        <Link href="/blog" className="block py-2 hover:text-orange-500">
          Blog
        </Link>
        <div className="relative">
          <button
            onClick={toggleMenuDropdown}
            className="w-full text-left py-2 text-white hover:text-orange-500 flex items-center justify-between"
          >
            Menü
            <FiChevronDown />
          </button>
          {showDropdown && (
            <div className="absolute bg-gray-800 text-white rounded shadow-lg mt-2">
              <Link href="/Maker" className="block px-4 py-2 hover:bg-gray-700">
                Maker
              </Link>
              <Link href="/menu-item2" className="block px-4 py-2 hover:bg-gray-700">
                Menü Item 2
              </Link>
              <Link href="/menu-item3" className="block px-4 py-2 hover:bg-gray-700">
                Menü Item 3
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/iletisim"
          className="block py-2 rounded bg-gradient-to-r from-orange-500 to-orange-300 text-center hover:scale-105 transition"
        >
          İletişime Geçin
        </Link>
        {user && (
          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="flex items-center gap-2 text-white">
              <Image
                src="/images/default-avatar.png"
                alt="Profil"
                width={30}
                height={30}
                className="rounded-full"
              />
              {username || "Kullanıcı"}
            </div>
            <Link href="/profil" className="block mt-2 px-4 py-2 hover:bg-gray-700">
              Profil Ayarları
            </Link>
            <Link href="/account-settings" className="block mt-2 px-4 py-2 hover:bg-gray-700">
              Hesap Ayarları
            </Link>
            <button
              onClick={handleLogout}
              className="block mt-2 px-4 py-2 text-left hover:bg-gray-700"
            >
              Çıkış Yap 
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
