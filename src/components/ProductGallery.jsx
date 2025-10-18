import React, { useState } from "react";

const ProductGallery = ({
  images,
  productName,
  selectedImage,
  setSelectedImage,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg relative">
        <div
          className={`w-full h-full cursor-zoom-in transition-transform duration-300 relative ${
            isZoomed ? "scale-150 cursor-zoom-out" : ""
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            loading="eager"
            className="w-full h-full object-cover"
          />
          {!isZoomed && (
            <div className="absolute bottom-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center pointer-events-none shadow-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-full aspect-[4/5] border-2 rounded-md overflow-hidden cursor-pointer transition-all bg-gray-100 ${
              selectedImage === index
                ? "border-black"
                : "border-transparent hover:border-gray-300"
            }`}
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
