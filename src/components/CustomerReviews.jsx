import React, { useState } from "react";

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Priyanka",
      text: "I have had compliments on my perfume. Every time I hug someone they tell me I smell amazing! They all want to get their own now.",
      image: "/images/ai_girls_3.png",
      rating: 5,
    },
    {
      name: "Ananya",
      text: "I am a very introvert person but this perfume has made so many conversation starter from other end. Makes me feel more confident while socializing for sure.",
      image: "/images/ai_girl_2.jpg",
      rating: 5,
    },
    {
      name: "Riya",
      text: "Kaafi acha product hai yeh, really loved the quality from Kiara. Been a repeat buyer 4 times now.",
      image: "/images/ai_girl.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="my-8 w-full">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeReview * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="flex flex-row items-start gap-3 w-full">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-[15px] leading-[1.6] text-gray-900">
                    {review.text}
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600 italic">
                      {review.name}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-[#800000] text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() =>
            setActiveReview((prev) =>
              prev > 0 ? prev - 1 : reviews.length - 1
            )
          }
          className="w-8 h-8 flex items-center justify-center  hover:bg-gray-300 transition-colors cursor-pointer border-none"
          aria-label="Previous review"
        >
          <span className="text-gray-700 text-lg">‹</span>
        </button>

        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                activeReview === index
                  ? "bg-black w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              onClick={() => setActiveReview(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setActiveReview((prev) =>
              prev < reviews.length - 1 ? prev + 1 : 0
            )
          }
          className="w-8 h-8 flex items-center justify-center  hover:bg-gray-300 transition-colors cursor-pointer border-none"
          aria-label="Next review"
        >
          <span className="text-gray-700 text-lg">›</span>
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
