"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { supabase } from "../../lib/supabase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobil menü için
  const [showDropdown, setShowDropdown] = useState(false); // Genel menü dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // Profil dropdown (içinde admin paneli linki)
  const [isVisible, setIsVisible] = useState(true); // Navbar görünürlüğü
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("username, role")
          .eq("id", user.id)
          .single();
        if (error) {
          console.error("Profil verisi alınırken hata:", error);
        }
        if (data) {
          setUsername(data.username);
          // Eğer kullanıcı rolü "admin" veya mail adresi "samet@example.com" ise admin olarak tanımla.
          setIsAdmin(data.role === "admin" || user.email === "kavutcusamettalha@gmail.com");
          console.log("User role from profiles:", data.role);
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
    router.push("/account-transactions/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowDropdown(false);
  };

  const toggleMenuDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowProfileDropdown(false);
  };

  const isActive = (path) =>
    pathname === path ? "text-red-500" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-[#343434] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-7">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/RavenSectlogo.png"
              alt="RavenSect Logo"
              width={310}
              height={70}
              className="cursor-pointer -ml-4"
            />
          </Link>
        </div>
        {/* Mobil Menü Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-white" />
        </div>
        {/* Desktop Menü */}
        <div className="hidden md:flex gap-12 text-white font-semibold items-center justify-center flex-1">
          <Link
            href="/hakkimizda"
            className={`${isActive("/hakkimizda")} hover:text-red-500`}
          >
            Hakkımızda
          </Link>
          
          <div className="relative">
            <button
              onClick={toggleMenuDropdown}
              className="flex items-center text-white hover:text-red-500"
            >
              Menü <FiChevronDown />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg">
                <Link
                  href="/games"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  games
                </Link>
                <Link
                  href="/game1"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  empty
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/iletisim"
            className="hidden md:block rounded-[40px] px-3 py-2 bg-gradient-to-r hover:text-red-500 text-white hover:scale-105 transition"
          >
            İletişime Geçin
          </Link>
        </div>
        {/* Profil / Login */}
        {user ? (
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center gap-2 text-white"
            >
              <Image
                src="/images/avatar.jpeg"
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
                <Link
                  href="/user/profil"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Profil Ayarları
                </Link>
                <Link
                  href="/user/account"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Hesap Ayarları
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Admin Paneli
                  </Link>
                )}
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
              href="/account-transactions/register"
              className="bg-[#b30000] text-white px-4 py-2 rounded hover:bg-red-100"
            >
              Kayıt Ol
            </Link>
            <Link
              href="/account-transactions/login"
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
        <Link href="/zonelar" className="block py-2 hover:text-red-500">
          Zonelar
        </Link>
        <Link href="/hakkimizda" className="block py-2 hover:text-red-500">
          Hakkımızda
        </Link>
        <Link href="/blog" className="block py-2 hover:text-red-500">
          Blog
        </Link>
        <div className="relative">
          <button
            onClick={toggleMenuDropdown}
            className="w-full text-left py-2 text-white hover:text-red-500 flex items-center justify-between"
          >
            Menü <FiChevronDown />
          </button>
          {showDropdown && (
            <div className="absolute bg-gray-800 text-white rounded shadow-lg mt-2">
              <Link
                href="/Maker"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                empty
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/iletisim"
          className="block py-2 rounded bg-gradient-to-r from-red-600 to-red-900 text-center hover:scale-105 transition"
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
            <Link
              href="/profil"
              className="block mt-2 px-4 py-2 hover:bg-gray-700"
            >
              Profil Ayarları
            </Link>
            <Link
              href="/account-settings"
              className="block mt-2 px-4 py-2 hover:bg-gray-700"
            >
              Hesap Ayarları
            </Link>
            {isAdmin && (
              <Link
                href="/management/panel"
                className="block mt-2 px-4 py-2 hover:bg-gray-700"
              >
                Admin Paneli
              </Link>
            )}
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
