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
      <div className="md:mr-6 rounded-lg overflow-hidden">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          width="100%"
          height={mapHeight} // Dynamic height based on screen width
          mode="place"
          q="Ankara gardaşş,Turkey"
        />
      </div>
      <div className="w-full flex justify-end">
        <div className="h-[300px] w-full md:w-[400px] flex flex-col p-5 text-white bg-black rounded-2xl md:-mt-52 z-10 relative">
          <div className="flex flex-col gap-7 p-5">
            <div className="flex gap-3">
              <Image width={24} height={24} src={"/svg/phone.svg"} />
              <div>yakında gelir</div>
            </div>
            <div className="flex gap-3">
              <Image width={24} height={24} src={"/svg/mail.svg"} />
              <div>kavutcusamettalha@gmail.com</div>
            </div>
            <div className="flex items-start gap-3">
              <Image width={24} height={24} src={"/svg/address.svg"} />
              <div>keciören/Ankara</div>
            </div>
          </div>

          <div className="flex gap-5 px-3">
            <Link
              href={"https://www.instagram.com/s.t_kavutcu/"}
              target="blank"
            >
              <Image width={40} height={40} src={"/svg/twitter.svg"} />
            </Link>
            <Link
              href={
                "https://www.instagram.com/s.t_kavutcu/"
              }
              target="blank"
            >
              <Image width={40} height={40} src={"/svg/instagram.svg"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
