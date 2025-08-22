"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Dashboard link */}
      <button
        onClick={() => setOpen(true)}
        className="hover:text-blue-400 transition font-semibold"
      >
        Dashboard
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-20">
          <div className="bg-white/10 backdrop-blur-lg border border-cyan-400 rounded-2xl shadow-lg shadow-cyan-500/40 p-8 max-w-lg text-center relative animate-fade-in">
            
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white hover:text-cyan-400 text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Tech Dashboard
            </h2>
            <p className="text-gray-200 mb-6">
              Manage your tech products. Add cutting-edge gadgets, accessories,
              and more to your store!
            </p>

            <button
              onClick={() => {
                setOpen(false);
                router.push("/dashboard/add-product");
              }}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-md shadow-cyan-400/50 transition"
            >
              ➕ Add Product
            </button>
          </div>
        </div>
      )}
    </>
  );
}
