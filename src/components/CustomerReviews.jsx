import React, { useState } from "react";

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Priyanka",
      text: "Every time I hug someone they tell me I smell amazing! They all want to get their own now.",
      image: "/images/ai_girl.jpg",
      rating: 5,
    },
    {
      name: "Ananya",
      text: "This perfume is absolutely amazing! I get compliments everywhere I go. Highly recommend!",
      image: "/images/ai_girl_2.jpg",
      rating: 5,
    },
    {
      name: "Riya",
      text: "Best pheromone perfume I've ever tried. The scent lasts all day and feels so elegant!",
      image: "/images/ai_girl.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="my-8">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeReview * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] leading-relaxed text-gray-900">
                  {review.text}
                </p>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-sm font-semibold text-gray-600 italic">
                    {review.name}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-black text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
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
    </div>
  );
};

export default CustomerReviews;
