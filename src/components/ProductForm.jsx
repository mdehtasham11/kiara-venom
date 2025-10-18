import React, { useState } from "react";
import { ShoppingCart, Truck, Package } from "lucide-react";

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

  // Calculate delivery dates dynamically
  const getDeliveryDates = () => {
    const today = new Date();
    const orderReady1 = new Date(today);
    orderReady1.setDate(today.getDate() + 1);
    const orderReady2 = new Date(today);
    orderReady2.setDate(today.getDate() + 2);
    const delivered1 = new Date(today);
    delivered1.setDate(today.getDate() + 3);
    const delivered2 = new Date(today);
    delivered2.setDate(today.getDate() + 5);

    const formatDate = (date) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const suffix =
        day === 1 || day === 21 || day === 31
          ? "st"
          : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
          ? "rd"
          : "th";
      return `${month} ${day}${suffix}`;
    };

    return {
      ordered: formatDate(today),
      orderReady: `${formatDate(orderReady1)} - ${formatDate(orderReady2)}`,
      delivered: `${formatDate(delivered1)} - ${formatDate(delivered2)}`,
    };
  };

  const deliveryDates = getDeliveryDates();

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
        <div className="flex items-center gap-2 mb-1">
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
              className={`relative block border-2 rounded-xl p-2 cursor-pointer transition-all duration-300 ${
                selectedBundle.id === bundle.id
                  ? "border-[#8b4513] bg-[#6000001a] shadow-lg shadow-[#8b4513]/15"
                  : "border-gray-300 bg-[#60000005] hover:border-gray-400 hover:bg-white"
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
      <div className="text-justify text-md text-black-600 mb-2 leading-relaxed">
        Authenticity Guaranteed | Ships only from FadeByKiara.com
      </div>

      {/* Add to Cart Button */}
      <button
        className={`w-full bg-black text-[#ECCECE] text-xl border-none py-3 font-bold text-center rounded-lg cursor-pointer transition-all duration-300 mb-4 tracking-wide hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
          isAdding ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        {isAdding ? "ADDING TO CART..." : "ADD TO CART"}
      </button>

      {/* Delivery Timeline */}
      <div className="py-6 px-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-start">
            {/* Stage 1 - Ordered */}
            <div
              className="flex flex-col items-center"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full text-[#8b4513] mb-2">
                <ShoppingCart size={20} strokeWidth={2} />
              </div>
              <div className="text-center text-xs">
                <div className="font-semibold text-gray-800 whitespace-nowrap">
                  {deliveryDates.ordered}
                </div>
                <div className="text-[#ff69b4] font-medium">Ordered</div>
              </div>
            </div>

            {/* Connecting Line 1 */}
            <div className="flex-1 h-0.5 bg-pink-300 mt-6"></div>

            {/* Stage 2 - Order Ready */}
            <div
              className="flex flex-col items-center"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full text-[#8b4513] mb-2">
                <Truck size={20} strokeWidth={2} />
              </div>
              <div className="text-center text-xs">
                <div className="font-semibold text-gray-800 whitespace-nowrap">
                  {deliveryDates.orderReady}
                </div>
                <div className="text-gray-600 font-medium">Order Ready</div>
              </div>
            </div>

            {/* Connecting Line 2 */}
            <div className="flex-1 h-0.5 bg-pink-300 mt-6"></div>

            {/* Stage 3 - Delivered */}
            <div
              className="flex flex-col items-center"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full text-[#8b4513] mb-2">
                <Package size={20} strokeWidth={2} />
              </div>
              <div className="text-center text-xs">
                <div className="font-semibold text-gray-800 whitespace-nowrap">
                  {deliveryDates.delivered}
                </div>
                <div className="text-gray-600 font-medium">Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
