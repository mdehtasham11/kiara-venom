import React, { useState } from "react";

const Review = () => {
  const reviews = [
    {
      name: "Rishita",
      title: "9/10",
      review:
        "LIFE-CHANGING! I absolutely adored Kiara's Venom out of all the scents i own. And I’m not the only one who thinks it’s the best that… strangers.. and most importantly, MY man! Y’all better get on this QUICK.",
    },
    {
      name: "Supriya",
      title: "He WONT leave you alone....",
      review:
        "I must admit I was a bit sceptical at first, thought is was just a gimmick to buy your product, but I was surprised at the way my companion noticed basically couldn't keep his hands off me!  I now have 3 different options to choose from, THANK YOU 😊",
    },
    {
      name: "Pragiti",
      title: "Head Turner",
      review:
        "I used this perfume on my first day at work and god oh god. The Boss and everyone around me complimented about how good i smell. It definitely is attention-grabber hit!",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const DELAY = 400; // ms

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, DELAY);
  };
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, DELAY);
  };

  const review = reviews[current];

  return (
    <div className="bg-white py-8 px-4 md:py-12 lg:py-16">
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
        {/* Review Card */}
        <div className="bg-pink-50 rounded-2xl p-6 md:p-8 lg:p-10 mb-6">
          {/* Stars and Quote Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#600000] rounded-full flex items-center justify-center">
              <svg
                className="text-[#ECCECEE6] w-[24px] h-[24px]"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M119.472 66.59C53.489 66.59 0 120.094 0 186.1c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.135 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.829-6.389c82.925-90.7 115.385-197.448 115.385-251.8C238.989 120.094 185.501 66.59 119.472 66.59z"
                ></path>
                <path
                  fill="currentColor"
                  d="M392.482 66.59c-65.983 0-119.472 53.505-119.472 119.51c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.136 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.828-6.389C479.539 347.2 512 240.452 512 186.1C512 120.094 458.511 66.59 392.482 66.59z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Review Content */}
          <h3 className="font-bold text-black ml-[35px] md:ml-[40px] lg:ml-[45px] text-lg md:text-xl lg:text-2xl mb-3">
            {review.title}
          </h3>
          <p className="text-[17px] md:text-[18px] lg:text-[19px] font-[Poppins] text-[#121212E6] leading-relaxed mb-4">
            {review.review}
          </p>

          {/* Separator */}
          <div className="border-b border-gray-300 mb-4"></div>

          {/* Reviewer Name */}
          <p className="text-black text-center font-bold italic text-lg md:text-xl">
            {review.name}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className={`text-black text-lg md:text-xl lg:text-2xl hover:opacity-70 transition-opacity ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <div className="flex space-x-2 md:space-x-3">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  i === current ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className={`text-black text-lg md:text-xl lg:text-2xl hover:opacity-70 transition-opacity ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
