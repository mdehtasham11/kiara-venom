import React from "react";
import { Star } from "lucide-react";

const ProductHeader = ({ product }) => {
  return (
    <div
      className="bg-white mb-6"
      style={{ fontFamily: "'Maven Pro', sans-serif" }}
    >
      {/* Header */}
      <div className="mb-3 text-center">
        <h1
          className="text-2xl md:text-3xl font-extrabold mb-1 "
          style={{ fontWeight: 700, letterSpacing: "1.3px" }}
        >
          {product.name}
        </h1>
        {product.subtitle && (
          <p className="text-base md:text-lg text-gray-600">
            {product.subtitle}
          </p>
        )}
      </div>

      {/* Reviews */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="text-yellow-500"
              fill="currentColor"
              size={16}
            />
          ))}
          <div className="relative">
            <Star className="text-gray-300" fill="currentColor" size={16} />
            <Star
              className="text-yellow-500 absolute top-0 left-0"
              fill="currentColor"
              size={16}
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          </div>
        </div>
        <span
          style={{
            color: "#121212E6",
            fontSize: "16px",
            fontFamily: "Poppins, sans-serif",
            margin: "0px 0px 0px 2px",
          }}
        >
          ({product.reviews.count.toLocaleString()}+ Reviews)
        </span>
      </div>
    </div>
  );
};

export default ProductHeader;
