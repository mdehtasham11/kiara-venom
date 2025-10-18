import React, { useState } from "react";

const ProductGallery = ({
  images,
  productName,
  selectedImage,
  setSelectedImage,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isTwoFinger, setIsTwoFinger] = useState(false);

  // Touch handlers for swipe functionality (supports single and two finger)
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setIsTwoFinger(e.targetTouches.length === 2);

    // Use the first touch point for single finger, or average for two fingers
    if (e.targetTouches.length === 1) {
      setTouchStart(e.targetTouches[0].clientX);
    } else if (e.targetTouches.length === 2) {
      // Average the two touch points for two-finger gesture
      const avgX =
        (e.targetTouches[0].clientX + e.targetTouches[1].clientX) / 2;
      setTouchStart(avgX);
    }
  };

  const handleTouchMove = (e) => {
    // Prevent default scrolling behavior for two-finger gestures
    if (e.targetTouches.length === 2) {
      e.preventDefault();
    }

    // Use the first touch point for single finger, or average for two fingers
    if (e.targetTouches.length === 1) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else if (e.targetTouches.length === 2) {
      // Average the two touch points for two-finger gesture
      const avgX =
        (e.targetTouches[0].clientX + e.targetTouches[1].clientX) / 2;
      setTouchEnd(avgX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    // Adjust threshold based on gesture type
    const threshold = isTwoFinger ? 20 : 30;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else if (isRightSwipe && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }

    // Reset states
    setIsTwoFinger(false);
  };

  // Mouse handlers for desktop
  const handleMouseDown = (e) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!mouseStart || !mouseEnd) return;

    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else if (isRightSwipe && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="w-full aspect-[4/5] overflow-hidden bg-gray-100 rounded-xl relative cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        <div className="w-full h-full relative">
          <img
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            loading="eager"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {/* Navigation arrows */}
        {selectedImage > 0 && (
          <button
            onClick={() => setSelectedImage(selectedImage - 1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {selectedImage < images.length - 1 && (
          <button
            onClick={() => setSelectedImage(selectedImage + 1)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Image counter */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-17 md:w-16 aspect-square border rounded-2xl overflow-hidden cursor-pointer transition-all bg-gray-100 ${
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
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
