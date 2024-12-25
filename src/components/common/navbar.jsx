"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // State to manage navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);

  // Ref to store previous scroll position
  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos.current > currentScrollPos) {
        // User is scrolling up
        setShowNavbar(true);
      } else {
        // User is scrolling down
        setShowNavbar(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="container mx-auto flex justify-between items-center h-20 px-5">
        {/* Logo that links to the home page */}
        <Link href="/">
          <Image
            src={"/images/sametalasın.png"}
            alt="logo"
            width={80}
            height={20}
            className="cursor-pointer"
          />
        </Link>

        {/* Hamburger Menu Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-white w-8 h-8" />
            ) : (
              <FiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex justify-around text-white gap-12 font-semibold text-sm">
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

          <div className="min-w-[100px] text-center">
            <Link
              href="/naberabi"
              className={`transition-all duration-300 ease-in-out hover:text-orange-500 ${isActive(
                "/naberabi"
              )}`}
            >
              Naber Abi
            </Link>
          </div>
        </div>
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

      {/* Mobile Menu (Visible when open) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden text-white border-t-2 border-t-[#323232]`}
        style={{ backgroundColor: "hsla(0, 0%, 9%, 0.4)" }}
      >
        <div className="flex flex-col items-center gap-5 py-5">
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
          <div className="min-w-[100px] text-center">
            <Link
              href="/naberabi"
              className={`transition-all duration-300 ease-in-out hover:text-orange-500 ${isActive(
                "/naberabi"
              )}`}
            >
              Naber Abi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}