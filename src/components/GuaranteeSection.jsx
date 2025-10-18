import React, { useState } from "react";
import WaveDivider from "./WaveDivider";
import LogoTicker from "./LogoTicker";

const GuaranteeSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col gap-3 mb-10">
        {/* Guarantee Accordion */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            className={`w-full flex justify-between items-center p-4 bg-gray-50 border-none cursor-pointer text-left transition-colors hover:bg-gray-100 ${
              openAccordion === 0 ? "bg-white" : ""
            }`}
            onClick={() => toggleAccordion(0)}
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-xl flex-shrink-0">🛡️</span>
              <span className="text-[15px] font-semibold text-gray-900">
                Our Guarantee to you
              </span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                openAccordion === 0 ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {openAccordion === 0 && (
            <div className="p-4 border-t border-gray-200 animate-[slideDown_0.3s_ease]">
              <p className="m-0 text-sm leading-relaxed text-gray-700">
                We want you to be completely satisfied with us, that's why we
                offer a 30 day Money-Back Guarantee.
              </p>
            </div>
          )}
        </div>

        {/* Authenticity Accordion */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            className={`w-full flex justify-between items-center p-4 bg-gray-50 border-none cursor-pointer text-left transition-colors hover:bg-gray-100 ${
              openAccordion === 1 ? "bg-white" : ""
            }`}
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-xl flex-shrink-0">✓</span>
              <span className="text-[15px] font-semibold text-gray-900">
                How do I know it's authentic?
              </span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                openAccordion === 1 ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {openAccordion === 1 && (
            <div className="p-4 border-t border-gray-200 animate-[slideDown_0.3s_ease]">
              <p className="m-0 text-sm leading-relaxed text-gray-700">
                Kiara's Venom™ is sold exclusively on FadeByKiara.com and is
                developed in partnership with Aura Labs, the creators of our
                proprietary pheromone fusion. We do not sell on any third-party
                sites. If it's not purchased directly from us, it isn't the
                original Kiara's Venom.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* As Seen On Section */}
      <div className="text-center py-12">
        <h3 className="text-xl font-bold tracking-[3px] mb-8 text-gray-900 text-center">
          AS SEEN ON
        </h3>
      </div>

      <div className="bg-[#ffd4d4] text-center">
        <LogoTicker />
      </div>

      {/* Wave Divider Bottom */}
      <div className="-mt-1">
        <WaveDivider flip={false} topColor="#ffd4d4" bottomColor="#ffffff" />
      </div>
    </div>
  );
};

export default GuaranteeSection;
