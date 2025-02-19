"use client";

import { useState } from "react";

const personnel = [
  { id: 1, name: "Dr. Malphas", role: "Baş Araştırmacı", img: "/images/malphas.jpg" },      
  { id: 2, name: "Prof. Lilith", role: "Psikoloji Uzmanı", img: "/images/lilith.jpg" },      
  { id: 3, name: "H. Crowley", role: "Paranormal Dedektif", img: "/images/crowley.jpg" },      
  { id: 4, name: "D. Valac", role: "Veri Analisti", img: "/images/valac.jpg" },      
  { id: 5, name: "A. Azazel", role: "Gizli Operasyon Lideri", img: "/images/azazel.jpg" }      
];

export default function AboutUsNews() {
  return (
    <div className="flex flex-col items-center justify-center sm:py-32 bg-black text-red-600">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center px-8 gap-10">
        
        {/* Başlık */}
        <div className="text-center max-w-[700px] text-red-500">
          <h2 className="text-[42px] leading-[56px] font-haunted">
            Karanlık Gerçeklerle Yüzleşme Zamanı
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Her yaştan farklı ilgi alanlarına sahip mühendisler için hazırlanmış, korku dolu bir yolculuğa çıkmaya hazır olun.
          </p>
        </div>

        {/* Personel Kartları */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full">
          {personnel.map((person) => (
            <div key={person.id} className="bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-600
              flex flex-col items-center text-center border border-red-700">
              
              <img src={person.img} alt={person.name} className="w-40 h-40 mx-auto rounded-full border-4 border-red-600 shadow-lg" />
              <h3 className="mt-6 text-2xl font-bold text-white">{person.name}</h3>
              <p className="text-lg text-gray-400 mt-2">{person.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
