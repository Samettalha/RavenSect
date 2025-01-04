"use client";

import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <div className="h-screen w-full bg-gradient-to-r   flex flex-col justify-center items-center text-white">
      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-7xl font-bold tracking-wide text-orange-500"
      >
        Welcome to Zainex
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="mt-4 text-lg md:text-xl text-gray-400"
      >
        Discover the Future of Technology
      </motion.p>

      {/* Animated Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="mt-8"
      >
        <a
          href="/"
          className="px-6 py-3 bg-orange-500 text-black rounded-lg shadow-lg hover:bg-orange-400 transition-all duration-300"
        >
          Explore Now
        </a>
      </motion.div>

      {/* Background Animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-48 h-48 bg-orange-500 rounded-full filter blur-3xl"
          animate={{ x: ["-100%", "100%"], y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute w-72 h-72 bg-gray-600 rounded-full filter blur-3xl"
          animate={{ x: ["100%", "-100%"], y: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        ></motion.div>
      </div>
    </div>
  );
}
