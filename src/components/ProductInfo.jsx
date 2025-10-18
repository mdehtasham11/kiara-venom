import React, { useState } from "react";

const ProductInfo = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderReviewDistribution = () => {
    const total = product.reviews.count;
    return (
      <div className="flex flex-col gap-3">
        {[5, 4, 3, 2, 1].map((rating) => {
          const count = product.reviews.distribution[rating];
          const percentage = (count / total) * 100;
          return (
            <div key={rating} className="flex items-center gap-3">
              <span className="w-10 text-sm font-semibold">{rating} ★</span>
              <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-full bg-yellow-500 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-600">
                {count}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-15 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="flex border-b-2 border-gray-200 bg-gray-50">
        <button
          className={`flex-1 py-4 px-6 text-base font-semibold text-center border-b-[3px] transition-all ${
            activeTab === "description"
              ? "border-black bg-white"
              : "border-transparent hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`flex-1 py-4 px-6 text-base font-semibold text-center border-b-[3px] transition-all ${
            activeTab === "reviews"
              ? "border-black bg-white"
              : "border-transparent hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({product.reviews.count})
        </button>
        <button
          className={`flex-1 py-4 px-6 text-base font-semibold text-center border-b-[3px] transition-all ${
            activeTab === "features"
              ? "border-black bg-white"
              : "border-transparent hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
      </div>

      <div className="p-8">
        {activeTab === "description" && (
          <div className="animate-[fadeIn_0.4s_ease]">
            <div className="prose max-w-none">
              {product.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="my-8 p-6 bg-gray-50 border-l-4 border-black rounded">
              <h3 className="m-0 mb-4 text-xl">Why Choose Kiara's Venom?</h3>
              <ul className="list-none p-0 m-0">
                <li className="py-2 text-base leading-relaxed">
                  ✨ Scientifically formulated pheromone technology
                </li>
                <li className="py-2 text-base leading-relaxed">
                  💎 Premium, long-lasting fragrance
                </li>
                <li className="py-2 text-base leading-relaxed">
                  🌿 Safe for all skin types
                </li>
                <li className="py-2 text-base leading-relaxed">
                  🎁 Elegant, gift-ready packaging
                </li>
                <li className="py-2 text-base leading-relaxed">
                  🇮🇳 Made with love in India
                </li>
              </ul>
            </div>

            <div className="flex gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="h-15 flex items-center">
                <img
                  src="/images/Vogue-Logo.png"
                  alt="As Featured in Vogue"
                  className="h-full w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <div className="h-15 flex items-center">
                <img
                  src="/images/Cosmopolitan-Emblem.png"
                  alt="As Featured in Cosmopolitan"
                  className="h-full w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 mb-10 pb-8 border-b-2 border-gray-200">
              <div className="text-center">
                <div className="text-[56px] font-bold mb-2">
                  {product.reviews.average}
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < Math.floor(product.reviews.average)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Based on {product.reviews.count} reviews
                </div>
              </div>

              <div>{renderReviewDistribution()}</div>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Priya S.",
                  rating: 5,
                  date: "2 days ago",
                  text: "Absolutely love this perfume! The scent is divine and lasts all day. I've received so many compliments since I started using it. Highly recommend!",
                },
                {
                  name: "Ananya M.",
                  rating: 5,
                  date: "1 week ago",
                  text: "Best purchase ever! The packaging is beautiful and the fragrance is exactly what I was looking for. It's elegant yet seductive. 5 stars!",
                },
                {
                  name: "Riya K.",
                  rating: 4,
                  date: "2 weeks ago",
                  text: "Great perfume! The scent is lovely and it does last quite long. Only giving 4 stars because I wish it came in a bigger bottle.",
                },
              ].map((review, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-col gap-1">
                      <strong className="text-base">{review.name}</strong>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < review.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-[13px] text-gray-400">
                      {review.date}
                    </span>
                  </div>
                  <p className="m-0 leading-relaxed text-gray-700">
                    {review.text}
                  </p>
                </div>
              ))}

              <button className="inline-block px-8 py-4 text-base font-semibold text-center transition-all bg-transparent text-[#121212] border-2 border-[#121212] hover:bg-[#121212] hover:text-white">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg text-center transition-all hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center bg-white rounded-full border-2 border-gray-200">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg m-0 mb-2">{feature.title}</h3>
                  <p className="m-0 text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}

              <div className="p-6 bg-gray-50 rounded-lg text-center transition-all hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center bg-white rounded-full border-2 border-gray-200">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-lg m-0 mb-2">Cruelty-Free</h3>
                <p className="m-0 text-gray-600 text-sm">
                  Not tested on animals
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg text-center transition-all hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center bg-white rounded-full border-2 border-gray-200">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-lg m-0 mb-2">Money-Back Guarantee</h3>
                <p className="m-0 text-gray-600 text-sm">
                  30-day satisfaction guarantee
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg text-center transition-all hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center bg-white rounded-full border-2 border-gray-200">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg m-0 mb-2">Authentic Product</h3>
                <p className="m-0 text-gray-600 text-sm">
                  100% original and certified
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="m-0 mb-5 text-xl">Product Specifications</h3>
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    ["Volume", "50ml"],
                    ["Fragrance Type", "Eau de Parfum"],
                    ["Top Notes", "Bergamot, Pink Pepper"],
                    ["Heart Notes", "Rose, Jasmine, Ylang-Ylang"],
                    ["Base Notes", "Vanilla, Musk, Amber"],
                    ["Longevity", "8-10 hours"],
                  ].map(([label, value], idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <td className="py-3 font-semibold w-2/5">{label}</td>
                      <td className="py-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
