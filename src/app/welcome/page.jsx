"use client";

import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <div className="h-screen  w-full bg-gradient-to-r flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-7xl font-bold tracking-wide text-white"
      >
        Welcome to RavenSect
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
          className="px-6 py-3 bg-red-500 text-black rounded-lg shadow-lg hover:bg-red-400 transition-all duration-300"
        >
         aşkoluğun derinliklerine in
        </a>
      </motion.div>

      {["-100vw,-100vh", "100vw,-100vh", "-100vw,100vh", "100vw,100vh"].map((pos, index) => {
        const [x, y] = pos.split(",");

        return (
          <motion.div
            key={index}
            className="absolute w-48 h-48 bg-red-500 rounded-full filter blur-3xl"
            initial={{ x, y, scale: 1 }}
            animate={{
              x: "0%",
              y: "0%",
              scale: [1, 2, 0], // Önce büyü, sonra yok ol!
              opacity: [1, 1, 0], // En son transparan ol!
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.7, 1], // Patlama zamanlaması
            }}
          ></motion.div>
        );
      })}
    </div>
  );
}
