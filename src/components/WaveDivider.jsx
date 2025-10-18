import React from "react";

const WaveDivider = ({
  flip = false,
  topColor = "#f8f8f8",
  bottomColor = "#ffffff",
}) => {
  return (
    <div className="relative w-full">
      <div
        className="wave-divider"
        style={{
          transform: flip ? "scaleX(1) scaleY(-1)" : "scaleX(1) scaleY(1)",
          backgroundColor: topColor,
        }}
      >
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          style={{ color: bottomColor }}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax1">
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="currentColor" />
          </g>
          <g className="parallax2">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="currentColor" />
          </g>
          <g className="parallax3">
            <use xlinkHref="#gentle-wave" x="50" y="9" fill="currentColor" />
          </g>
          <g className="parallax4">
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="currentColor" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .wave-divider {
          position: relative;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .waves {
          position: relative;
          width: 100%;
          height: 5vh;
          min-height: 30px;
          max-height: 50px;
        }

        /* Animation */
        .parallax1 > use {
          animation: move-forever1 10s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
          opacity: 0.3;
        }
        .parallax2 > use {
          animation: move-forever2 8s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
          animation-delay: -2s;
          opacity: 0.4;
        }
        .parallax3 > use {
          animation: move-forever3 6s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
          animation-delay: -4s;
          opacity: 0.5;
        }
        .parallax4 > use {
          animation: move-forever4 4s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
          animation-delay: -3s;
          opacity: 0.6;
        }

        @keyframes move-forever1 {
          0% {
            transform: translate(85px, 0%);
          }
          100% {
            transform: translate(-90px, 0%);
          }
        }
        @keyframes move-forever2 {
          0% {
            transform: translate(85px, 0%);
          }
          100% {
            transform: translate(-90px, 0%);
          }
        }
        @keyframes move-forever3 {
          0% {
            transform: translate(85px, 0%);
          }
          100% {
            transform: translate(-90px, 0%);
          }
        }
        @keyframes move-forever4 {
          0% {
            transform: translate(85px, 0%);
          }
          100% {
            transform: translate(-90px, 0%);
          }
        }

        /* Shrinking for mobile */
        @media (max-width: 768px) {
          .waves {
            height: 4vh;
            min-height: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default WaveDivider;
