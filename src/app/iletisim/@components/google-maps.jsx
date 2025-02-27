"use client";
import { useState, useEffect } from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

export default function GoogleMapsProvider() {
  const [mapHeight, setMapHeight] = useState("700px");

  useEffect(() => {
    // Function to update the height based on screen width
    const updateMapHeight = () => {
      if (window.innerWidth < 768) {
        setMapHeight("400px"); // Mobile screen
      } else {
        setMapHeight("700px"); // Larger screens
      }
    };

    // Set the initial height
    updateMapHeight();

    // Update height on window resize
    window.addEventListener("resize", updateMapHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMapHeight);
    };
  }, []);

  return (
    <div className="w-full lg:w-1/2 px-5 sm:px-0">
      <div className="md:mr-6 rounded-lg overflow-hidden border-4 border-orange-700 shadow-[0_0_20px_orange] relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          width="100%"
          height={mapHeight} // Dynamic height based on screen width
          mode="place"
          q="Fortnite Battle Royale Island, USA" // Chosen game-related location
        />
      </div>
      <div className="w-full flex justify-end">
        <div className="h-[300px] w-full md:w-[400px] flex flex-col p-5 text-orange-500 bg-black rounded-2xl md:-mt-52 z-10 relative shadow-lg shadow-orange-900 border border-orange-700">
          <div className="flex flex-col gap-7 p-5">
            <div className="flex gap-3 animate-fade-in">
              <Image width={24} height={24} src={"/svg/phone.svg"} className="animate-pulse" />
              <div className="text-gray-400">Tactical Call</div>
            </div>
            <div className="flex gap-3 animate-fade-in delay-500">
              <Image width={24} height={24} src={"/svg/mail.svg"} className="animate-bounce" />
              <div className="text-gray-400">missions@gameworld.com</div>
            </div>
            <div className="flex items-start gap-3 animate-fade-in delay-1000">
              <Image width={24} height={24} src={"/svg/address.svg"} className="animate-spin" />
              <div className="text-gray-400">Victory Island</div>
            </div>
          </div>

          <div className="flex gap-5 px-3 animate-flicker">
            <Link href="https://twitter.com" target="_blank">
              <Image width={40} height={40} src={"/svg/twitter.svg"} className="hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image width={40} height={40} src={"/svg/instagram.svg"} className="hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
