import React, { useState } from "react";
import {
  Zap,
  Clock,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import WaveDivider from "./WaveDivider";

const ProductInfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      "/images/preview_images/273d255a595a4cb5987cc3683a9025e9.thumbnail.0000000000.jpg",
      "/images/preview_images/6186387d55c94956a6de1a5501db73c1.thumbnail.0000000000.jpg",
    ],
    [
      "/images/preview_images/76af0b4deccf4060bcc859459c2c76f4.thumbnail.0000000000.jpg",
      "/images/preview_images/de1b1d314aa04506b2bc99d24738149e.thumbnail.0000000000.jpg",
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-2xl px-2">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
          Get their Attention, Make them Attract
        </h1>

        <p className="text-md text-center mb-4 text-gray-800 leading-relaxed">
          A pheromone-infused perfume crafted exclusively for{" "}
          <strong>women who know their worth.</strong>
        </p>

        <p className="text-md text-center mb-4 text-gray-600 leading-relaxed">
          This enchanting fragrance blends science with elegance, designed to
          boost your confidence and make heads turn wherever you go.
        </p>

        <p className="text-md text-center mb-10 text-gray-600 leading-relaxed">
          With each spray, you'll radiate irresistible charm, commanding
          attention and admiration effortlessly.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <img
              src="/crisis-alert.webp"
              alt="Increased Aura"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-bold text-black">Increased Aura</h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          Phero Particles when mixed with Female sweat create a perfume
          sensitive to male smell sense that the male perfume sense
          biologically.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <Zap className="w-6 h-6 text-black-500" />
          </div>
          <h3 className="text-lg font-bold text-black">Fires Spark</h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          Rekindle the excitement in your relationship with a scent that
          enhances intimacy.
          <br />
          Perfect for date nights or special occasions, adding a touch of
          irresistible allure to your presence.
        </p>
      </div>
      <div className="mt-8 w-90 mb-8 h-120 rounded-xl">
        <img
          src="/images/VENOM_LOVE_MAGNET.jpg"
          alt="Venom Love Magnet"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-black-500" />
          </div>
          <h3 className="text-lg font-bold text-black">Conversation Starter</h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          Turn every head and collect compliments like never before. Glances
          turn into double takes, and your scent becomes the reason they can’t
          stop thinking about you. It’s more than attention — it’s connection.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <Clock className="w-6 h-6 text-black-500" />
          </div>
          <h3 className="text-lg font-bold text-black">
            Lasts longer than him
          </h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          A venomous-attraction fragrance that lasts all day, keeping you fresh
          and magnetic. Stay potent from morning glances to midnight whispers,
          keeping you irresistibly fresh, magnetic, and impossible to forget.
        </p>
      </div>
      <div className="-mx-7">
        <WaveDivider flip={true} topColor="#ffffff" bottomColor="#fecaca" />
      </div>
      <div className="mb-8 bg-[#fecaca] -mx-7 px-4 -mt-4">
        <h2 className="text-3xl md:text-3xl mt-3 font-bold text-center px-6 mb-6 text-black">
          Kiara's Venom in Action..
        </h2>

        <div className="relative mb-8">
          {/* Carousel Images */}
          <div className="flex gap-4 justify-center mb-6">
            {slides[currentSlide].map((image, idx) => (
              <div
                key={idx}
                className="w-1/2  h-90 aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Action ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === idx ? "bg-black" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mb-2">
          <img
            src="/images/venom_gif.gif"
            alt="Venom Love Magnet Product"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
