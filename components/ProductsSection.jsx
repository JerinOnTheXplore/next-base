"use client"; 

import Image from "next/image";
import products from "../data/products.json";
import Tilt from "react-parallax-tilt";

export default function ProductsSection() {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900">
      <h2 className="text-4xl font-bold text-center mb-8">Product Highlights</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {products.map((product) => (
          <Tilt
            key={product.id}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.15}
            transitionSpeed={2500}
            className="rounded-2xl"
          >
            <div className="glass-card border border-cyan-400 shadow-lg shadow-cyan-500/50 rounded-2xl p-6 h-full flex flex-col justify-between transition-shadow duration-500
            hover:shadow-[0_0_35px_#22d3eeff,0_0_50px_#22d3eeaa]">
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-300 mt-2">{product.description}</p>
              <p className="text-cyan-400 font-bold mt-3">${product.price}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
