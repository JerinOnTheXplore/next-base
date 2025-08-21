"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-10 drop-shadow-lg mt-24">
        Our Tech Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {products.map((product) => (
         <Tilt
            key={product.id}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.15}
            transitionSpeed={1000}
            className="rounded-2xl"
          >
            <div className="glass-card border border-cyan-400 shadow-lg shadow-cyan-500/50 rounded-2xl p-6 h-full flex flex-col justify-between transition-shadow duration-500
            hover:shadow-[0_0_35px_#22d3eeff,0_0_50px_#22d3eeaa]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-white">{product.name}</h2>
              <p className="text-gray-200 text-sm my-2">{product.description}</p>
              <p className="text-cyan-300 font-bold mb-4">${product.price}</p>
              <Link href={`/products/${product.id}`}>
  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-md shadow-cyan-400/50 transition-all hover:scale-105">
    View Details
  </button>
</Link>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
