"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 overflow-hidden">
      {/* Glass Card */}
      <div className="relative z-10 max-w-2xl glass-card border border-cyan-400 shadow-lg shadow-cyan-500/50 rounded-2xl p-6 h-full flex flex-col justify-between transition-shadow duration-500
            hover:shadow-[0_0_35px_#22d3eeff,0_0_50px_#22d3eeaa] text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Discover Our Tech Accessories
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Upgrade your everyday setup with stylish and useful gadgets.
        </p>
        <Link href="/products" className="mt-6 px-6 py-3 rounded-full bg-white text-cyan-800 font-semibold shadow-md hover:scale-105 transition">
          Shop Now
        </Link>
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
        src="/images/product5.png"
        alt="Product 5"
        className="absolute w-28 md:w-40 top-36 left-1/2 drop-shadow-xl"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {/* New Floating Images */}
      <motion.img
        src="/images/product4.png"
        alt="Product 4"
        className="absolute w-28 md:w-40 bottom-16 right-32 drop-shadow-xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5.5, repeat: Infinity }}
      />
      <motion.img
        src="/images/product3.png"
        alt="Product 3"
        className="absolute w-32 md:w-48 top-28 left-32 drop-shadow-xl"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 6.5, repeat: Infinity }}
      />

      {/* Overlay gradient for smooth look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
    </section>
  );
}
