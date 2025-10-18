import React from "react";

const HorizontalTicker = () => {
  const messages = [
    "More ₹175 Discount on Prepaid Orders",
    "🔥This Diwali, Feel Irresistible",
    "The Official Kiara's Venom™",
    "✨Celebrate Diwali with us! Offer ends soon.",
  ];

  return (
    <div className="bg-[#121212] flex items-center justify-center text-white py-4 overflow-hidden relative will-change-transform">
      <div className="inline-flex gap-8 animate-scroll">
        {/* First set of messages */}
        {messages.map((message, index) => (
          <p
            key={`first-${index}`}
            className="text-base md:text-xl whitespace-nowrap font-medium flex-shrink-0 px-4"
          >
            {message}
          </p>
        ))}
        {/* Second set - duplicate for seamless loop */}
        {messages.map((message, index) => (
          <p
            key={`second-${index}`}
            className="text-base md:text-lg whitespace-nowrap font-medium flex-shrink-0 px-4"
          >
            {message}
          </p>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default HorizontalTicker;
