"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/products")} 
      className="mt-16 mb-16 px-4 py-2   text-white font-semibold transition"
    >
      ← Back
    </button>
  );
}
