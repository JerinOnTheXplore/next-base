"use client";
import React, { useState } from "react";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newProduct = Object.fromEntries(formData);

    // convert types
    newProduct.price = parseFloat(newProduct.price);
    newProduct.rating = parseFloat(newProduct.rating);
    newProduct.stock = parseInt(newProduct.stock);
    newProduct.features = newProduct.features.split(",").map((f) => f.trim());
    newProduct.reviews = [];

    console.log("New Product:", newProduct);
    setTimeout(() => {
      setShowModal(true);
      form.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 py-24 px-6">
      <div className="text-center mb-10 space-y-3 mt-24 px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-50">
          Add a New Product
        </h1>
        <p className="text-white max-w-2xl text-xl md:text-2xl mx-auto">
          Enter product details and add them to your tech inventory.
        </p>
      </div>

      <form
        onSubmit={handleAddProduct}
        className="bg-cyan-800 rounded-xl shadow-xl p-6 md:p-10 space-y-6 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="label font-semibold text-stone-50">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., Wireless Mouse"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="label font-semibold text-stone-50">Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="e.g., Logitech"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label font-semibold text-stone-50">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue="" 
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Accessories">Accessories</option>
              <option value="Audio">Audio</option>
              <option value="Storage">Storage</option>
              <option value="Wearable">Wearable</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Features */}
          <div>
            <label className="label font-semibold text-stone-50">
              Features
            </label>
            <input
              type="text"
              name="features"
              placeholder="e.g., Bluetooth, RGB, Waterproof"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="label font-semibold text-stone-50">Price</label>
            <input
              type="number"
              name="price"
              placeholder="e.g., 120"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="label font-semibold text-stone-50">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="0-5"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="label font-semibold text-stone-50">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              placeholder="e.g., 100"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-semibold text-stone-50">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="/products/mouse.jpg"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="label font-semibold text-stone-50">
            Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Write a brief product description..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn mt-6 px-6 py-3 rounded-full bg-white text-cyan-800 font-semibold shadow-md hover:scale-105 transition"
        >
          Add Product
        </button>
      </form>

      {/*  Glass Glow Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/20 backdrop-blur-xl border border-cyan-300 rounded-2xl p-8 shadow-lg shadow-cyan-400/60 max-w-md text-center animate-pulse">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">
               Product Added Successfully!
            </h2>
            <p className="text-cyan-100 mt-2">
              Your product has been saved to the inventory.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md shadow-cyan-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
