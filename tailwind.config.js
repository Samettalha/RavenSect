/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spartan", "sans-serif"], // Özel font ekledik
      },
      colors: {
        // Korku temalı renkler
        bloodRed: "#9B0000", 
        darkGray: "#0A0A0A", 
        eerieBlack: "#121212", 
        ghostWhite: "#F8F8FF",
      },
      animation: {
        flicker: "flicker 5.5s infinite", // Titreme animasyonu
        glow: "glow 2s infinite", // Parlama animasyonu
      },
      keyframes: {
        flicker: {
          "0%": { opacity: 0.9 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0.9 },
        },
        glow: {
          "0%": { textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000" },
          "50%": { textShadow: "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff" },
          "100%": { textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000" },
        },
      },
    },
  },
  plugins: [],
};
