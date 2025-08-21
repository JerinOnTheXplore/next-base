"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 overflow-hidden">
      {/* Glass Card */}
      <div className="relative z-10 max-w-2xl p-8 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Discover Our Tech Accessories
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Upgrade your everyday setup with stylish and useful gadgets.
        </p>
        <button className="mt-6 px-6 py-3 rounded-full bg-white text-purple-600 font-semibold shadow-md hover:scale-105 transition">
          Shop Now
        </button>
      </div>

      {/* Floating Product Images */}
      <motion.img
        src="/images/product1.png"
        alt="Product 1"
        className="absolute w-40 md:w-56 top-20 right-20 drop-shadow-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src="/images/product2.png"
        alt="Product 2"
        className="absolute w-32 md:w-48 bottom-28 left-16 drop-shadow-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src="/images/product3.png"
        alt="Product 3"
        className="absolute w-28 md:w-40 top-36 left-1/2 drop-shadow-xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Overlay gradient for smooth look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
    </section>
  );
}
