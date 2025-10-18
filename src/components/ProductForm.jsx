import React, { useState } from "react";

const ProductForm = ({ product, addToCart }) => {
  const bundles = [
    {
      id: 1,
      title: "BUY 1 GET 1 FREE",
      subtitle: "Each for Rs. 499",
      price: 999,
      originalPrice: 2798,
      upiDiscount: 100,
    },
    {
      id: 2,
      title: "BUY 2 GET 2 FREE",
      subtitle: "Each for Rs. 349",
      price: 1399,
      originalPrice: 5596,
      upiDiscount: 100,
    },
    {
      id: 3,
      title: "BUY 3 GET 3 FREE",
      subtitle: "Each for Rs. 266",
      price: 1699,
      originalPrice: 8394,
      upiDiscount: 120,
    },
  ];

  const [selectedBundle, setSelectedBundle] = useState(bundles[1]);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    const cartProduct = {
      id: product.id,
      name: product.name,
      price: selectedBundle.price,
      image: product.images[0],
      selectedVariant: selectedBundle.title,
    };

    addToCart(cartProduct, 1);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* Features */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center gap-2.5">
          <span className="text-lg w-5 flex-shrink-0">✨ </span>
          <span className="text-[14px] text-[#121212E6] font-bold font-body">
            Command Attention
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-lg w-5 flex-shrink-0 text-pink-600">💕</span>
          <span className="text-[14px] text-[#121212E6] font-bold font-body">
            Increase Compliments
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-lg w-5 flex-shrink-0 text-red-700">🧲</span>
          <span className="text-[14px] text-[#121212E6] font-bold font-body">
            Pheromone Power
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-lg w-5 flex-shrink-0 text-red-700">💃 </span>
          <span className="text-[14px] text-[#121212E6] font-bold font-body">
            Empower Your Feminine Energy:
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-lg w-5 flex-shrink-0 text-pink-600">🌸 </span>
          <span className="text-[14px] text-[#121212E6] font-bold font-body">
            Long-Lasting Scent
          </span>
        </div>
      </div>

      {/* Bundle Section */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex-1 h-px bg-[#800000]"></span>
          <span className="text-sm font-bold text-[black] tracking-wider">
            BUNDLE & SAVE
          </span>
          <span className="flex-1 h-px bg-[#800000]"></span>
        </div>

        <div className="flex flex-col gap-3">
          {bundles.map((bundle) => (
            <label
              key={bundle.id}
              className={`relative block border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                selectedBundle.id === bundle.id
                  ? "border-[#8b4513] bg-white shadow-lg shadow-[#8b4513]/15"
                  : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-white"
              }`}
            >
              <input
                type="radio"
                name="bundle"
                checked={selectedBundle.id === bundle.id}
                onChange={() => setSelectedBundle(bundle)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer accent-[#8b4513]"
              />
              <div className="pl-8">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-base font-bold text-black">
                      {bundle.title}
                    </strong>
                    <span className="text-[13px] text-gray-600">
                      {bundle.subtitle}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-lg font-bold text-black">
                      Rs. {bundle.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      Rs. {bundle.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <span className="absolute -top-2 -right-2 bg-[#600000] text-white px-4 rounded-sm text-[15px] font-extrabold whitespace-nowrap transform rotate-2 shadow-md">
                  + ₹{bundle.upiDiscount} UPI Discount
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Authenticity */}
      <div className="text-center text-xs text-gray-600 mb-4 leading-relaxed">
        Authenticity Guaranteed | Ships only from FadeByKiara.com
      </div>

      {/* Add to Cart Button */}
      <button
        className={`w-full bg-black text-white border-none py-4 text-base font-bold text-center rounded-lg cursor-pointer transition-all duration-300 mb-4 tracking-wide hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
          isAdding ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        {isAdding ? "ADDING TO CART..." : "ADD TO CART"}
      </button>

      {/* Delivery Icons */}
      <div className="flex justify-center gap-6 py-4">
        <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full text-[#8b4513]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full text-[#8b4513]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full text-[#8b4513]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
