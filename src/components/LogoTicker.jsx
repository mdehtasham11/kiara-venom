import React from "react";

const LogoTicker = () => {
  const logos = [
    { src: "/images/Cosmopolitan-Emblem.png", alt: "Cosmopolitan" },
    { src: "/images/Instagram-Logo-2010-2013.png", alt: "Instagram" },
    { src: "/images/Vogue-Logo.png", alt: "Vogue" },
    { src: "/images/Cosmopolitan-Emblem.png", alt: "Cosmopolitan" },
  ];

  // Duplicate logos multiple times for seamless scroll
  const duplicatedLogos = Array(10).fill(logos).flat();

  return (
    <div className="logo-ticker-wrapper overflow-hidden py-8 bg-transparent">
      <div className="logo-ticker-container">
        <div className="logo-ticker flex items-center gap-12">
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="logo-ticker-image h-12 w-auto object-contain flex-shrink-0 opacity-80"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-ticker-wrapper {
          width: 100%;
          position: relative;
        }

        .logo-ticker-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .logo-ticker {
          display: inline-flex;
          animation: scroll-logos 40s linear infinite;
          will-change: transform;
        }

        .logo-ticker-image {
          min-width: 100px;
          max-width: 120px;
        }

        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @media (max-width: 768px) {
          .logo-ticker {
            gap: 2rem;
          }

          .logo-ticker-image {
            height: 2rem;
            min-width: 80px;
            max-width: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
