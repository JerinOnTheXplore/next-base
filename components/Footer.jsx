
"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full z-50 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 pt-24">
      <div className=" py-12 glass-card  backdrop-blur-xl border-t border-cyan-400 shadow-lg shadow-cyan-500/50 flex flex-col  items-center justify-between  px-6 text-white">
        {/* Left */}
        <div className="mb-2 md:mb-0">
          <h1 className="text-lg font-bold text-center drop-shadow-md">NextBase</h1>
          <p className="text-sm text-cyan-200 drop-shadow">© 2025 All rights reserved</p>
        </div>

        {/* Right - links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-cyan-100 hover:text-cyan-400 transition drop-shadow hover:scale-110"
          >
            Home
          </a>
          <a
            href="#"
            className="text-cyan-100 hover:text-cyan-400 transition drop-shadow hover:scale-110"
          >
            Products
          </a>
          <a
            href="#"
            className="text-cyan-100 hover:text-cyan-400 transition drop-shadow hover:scale-110"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
