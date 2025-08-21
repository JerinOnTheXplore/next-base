"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  // Scroll effect for top navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 ${
        scrolled
          ? "bg-[#0f172a]/60 shadow-md border-b border-cyan-500/10 backdrop-blur-lg"
          : "bg-transparent"
      } transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-5 ">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-stone-50">
            NextBase
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-500 transition">Products</Link>

            {session ? (
              <>
                <Link href="/dashboard/add-product" className="hover:text-blue-500 transition">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn("google", { callbackUrl: "/products" })}
                className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
              >
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                Login with Google
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white z-50">
            <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="transition-transform duration-300"
          >
            {isOpen ? '⛌' : '☷'}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-t border-white/20 dark:border-gray-700/20 transition-colors">
          <Link href="/" className="block hover:text-blue-500 transition">Home</Link>
          <Link href="/products" className="block hover:text-blue-500 transition">Products</Link>

          {session ? (
            <>
              <Link href="/dashboard/add-product" className="block hover:text-blue-500 transition">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="block w-full text-left text-red-500 hover:text-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google", { callbackUrl: "/products" })}
              className="block w-full text-left text-blue-500 hover:text-blue-600 transition flex items-center gap-2"
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Login with Google
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
