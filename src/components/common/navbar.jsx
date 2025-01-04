"use client"; // İstemci tarafında çalıştırılması gereken bileşen.

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { supabase } from "../../lib/supabase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null); // Kullanıcı adı için state

  // Navbar scroll logic
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from("profiles") // Supabase "profiles" tablosundan kullanıcı adını çekiyoruz
          .select("username")
          .eq("id", user.id)
          .single();

        if (data) {
          setUsername(data.username);
        } else {
          setUsername("Kullanıcı"); // Kullanıcı adı yoksa yedek
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => (pathname === path ? "text-orange-500" : "text-white");

  return (
    <nav
      className={`w-full z-50 border-b border-b-[#343434] bg-gradient-to-r from-black via-gray-900 to-gray-800 fixed top-0 transition-transform duration-300 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-5">
        <Link href="/">
          <Image
            src="/images/zainexlogo-.png"
            alt="Zainex Logo"
            width={260} 
            height={50}
            className="cursor-pointer -ml-4" 
          />
        </Link>

        <div className="hidden md:flex gap-12 text-white font-semibold items-center justify-center flex-1"> {/* Yazıları ortaladım */}
          <Link href="/zonelar" className={`${isActive("/zonelar")} hover:text-orange-500`}>Zonelar</Link>
          <Link href="/hakkimizda" className={`${isActive("/hakkimizda")} hover:text-orange-500`}>Hakkımızda</Link>
          <Link href="/Maker" className={`${isActive("/Maker")} hover:text-orange-500`}>Maker</Link>
          <Link href="/blog" className={`${isActive("/blog")} hover:text-orange-500`}>Blog</Link>
          <Link href="/iletisim" className="rounded-[40px] px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-300 text-white hover:scale-105 transition">İletişime Geçin</Link>
        </div>

        {user ? (
          <div className="relative">
            <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2 text-white">
              <Image src="/images/default-avatar.png" alt="Profil" width={30} height={30} className="rounded-full" />
              {username || "Kullanıcı"} {/* Kullanıcı adı gösteriliyor */}
              <FiChevronDown />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg">
                <Link href="/profil " className="block px-4 py-2 hover:bg-gray-700">Profil Ayarları</Link>
                <button onClick={handleLogout} className="block px-4 py-2 text-left hover:bg-gray-700">Çıkış Yap</button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex gap-4">
            <Link href="/register-g" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Kayıt Ol</Link>
            <Link href="/login-g" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Giriş Yap</Link>
          </div>
        )}
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden text-white bg-gray-800 p-5 border-t border-gray-700`}>
        <Link href="/zonelar" className="block py-2 hover:text-orange-500">Zonelar</Link>
        <Link href="/hakkimizda" className="block py-2 hover:text-orange-500">Hakkımızda</Link>
        <Link href="/Maker" className="block py-2 hover:text-orange-500">Maker</Link>
        <Link href="/blog" className="block py-2 hover:text-orange-500">Blog</Link>
        <Link href="/iletisim" className="block py-2 rounded bg-gradient-to-r from-orange-500 to-orange-300 text-center hover:scale-105 transition">İletişime Geçin</Link>
      </div>
    </nav>
  );
}
