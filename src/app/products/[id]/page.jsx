"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import BackButton from "../../../../components/BackButton";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(params.id));
        setProduct(found);
      });
  }, [params.id]);

  if (!product) return <p className="text-center mt-20 text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 py-24 px-6">
      {/* Back Button */}
      <BackButton />

      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.0}
        transitionSpeed={1000}
        className="max-w-6xl mx-auto glass-card border border-cyan-400 shadow-lg shadow-cyan-500/50 rounded-2xl p-6 h-full flex flex-col justify-between transition-shadow duration-500
            hover:shadow-[0_0_35px_#22d3eeff,0_0_50px_#22d3eeaa]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="md:max-w-4xl mx-auto h-full object-cover rounded-2xl mb-6 shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">{product.name}</h1>
        <p className="text-gray-200 mb-2"><span className="font-semibold">Brand:</span> {product.brand}</p>
        <p className="text-gray-200 mb-2"><span className="font-semibold">Category:</span> {product.category}</p>
        <p className="text-gray-200 mb-2">{product.description}</p>
        <ul className="list-disc list-inside text-gray-200 mb-2">
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <p className="text-cyan-300 font-bold text-lg mb-2">Price: ${product.price}</p>
        <p className="text-yellow-400 font-semibold mb-4">Rating: {product.rating} / 5</p>
        <p className="text-gray-200 mb-4">Stock: {product.stock} available</p>

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-white mb-2">Reviews:</h2>
            {product.reviews.map((rev, i) => (
              <div key={i} className="text-gray-200 mb-2 border-t border-cyan-400/50 pt-2">
                <p className="font-semibold">{rev.user}</p>
                <p className="text-sm">{rev.comment}</p>
                <p className="text-yellow-400 text-sm">Rating: {rev.rating} / 5</p>
              </div>
            ))}
          </div>
        )}
      </Tilt>
    </div>
  );
}
