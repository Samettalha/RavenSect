"use client";
import React, { useState } from "react";

const FaqCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full bg-black py-12 sm:px-10 overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "border-orange-500 shadow-lg" : "border-gray-900"
      } border`}
    >
      <div
        className="flex justify-between gap-5 items-center p-4 cursor-pointer bg-black"
        onClick={toggleOpen}
      >
        <h3 className="text-white text-lg">{title}</h3>
        <button
          className={`relative w-10 h-10 flex justify-center items-center transform transition-transform duration-300 ${
            isOpen
              ? "bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 text-white transition-transform duration-300 transform ${
              isOpen ? "rotate-180" : ""
            }`} // Flipped the logic
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`transition-max-height pr-[20%] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        {isOpen && <div className="text-white">{content}</div>}
      </div>
    </div>
  );
};

export default FaqCard;
