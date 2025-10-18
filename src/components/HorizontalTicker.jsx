import React from "react";

const HorizontalTicker = () => {
  const messages = [
    "More ₹175 Discount on Prepaid Orders",
    "🔥This Diwali, Feel Irresistible",
    "The Official Kiara's Venom™",
  ];

  return (
    <div className="bg-[#121212] text-white py-3 overflow-hidden relative">
      <div className="flex gap-16 md:gap-24 animate-[scroll_50s_linear_infinite]">
        {messages.concat(messages).map((message, index) => (
          <p
            key={index}
            className="text-base md:text-lg whitespace-nowrap font-medium flex-shrink-0"
          >
            {message}
          </p>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalTicker;
