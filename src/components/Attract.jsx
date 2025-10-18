import React from 'react';

const Attract = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-16 text-center">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[26px] md:text-[32px] lg:text-[38px] h-[50px] md:h-[60px] lg:h-[70px] font-[Maven Pro] text-black mb-4 md:mb-6 lg:mb-8 text-left border-b border-gray-200">
          Attract like never before..
        </h2>
        
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {/* First statistic */}
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 border-b border-gray-200 pb-6 md:pb-8 lg:pb-10">
            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-black"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="96, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-sm md:text-base lg:text-lg">96%</span>
              </div>
            </div>
            <p className="text-black font-[Poppins] text-[16px] md:text-[17px] lg:text-[18px] text-left leading-relaxed">
              of our customers reported getting more aura around them and more compliments
            </p>
          </div>

          {/* Second statistic */}
          <div className="flex items-center space-x-4 border-b border-gray-200 pb-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-black"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="90, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-sm md:text-base lg:text-lg">90%</span>
              </div>
            </div>
            <p className="text-black font-[Poppins] text-[16px] md:text-[17px] lg:text-[18px] text-left leading-relaxed">
              of our women in a relationship said their partner's attention towards them was increased
            </p>
          </div>

          {/* Third statistic */}
          <div className="flex items-center space-x-4 border-b border-gray-200 pb-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-black"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="86, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-sm md:text-base lg:text-lg">86%</span>
              </div>
            </div>
            <p className="text-black font-[Poppins] text-[16px] md:text-[17px] lg:text-[18px] text-left leading-relaxed">
              of women noticed improved dating experience & in-bed experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attract;
