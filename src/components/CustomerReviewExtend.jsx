import React from 'react';

const CustomerReviewExtend = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-sm mx-auto">
        {/* Individual Reviews */}
        <div className="space-y-6">
          {/* Tanya Singh Review */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-600 mr-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-black text-sm">Tanya Singh</span>
            </div>
            
            <h3 className="font-bold text-black text-base mb-2">Everyone notices me now</h3>
            <p className="text-black text-sm leading-relaxed">
              Since I started wearing Kiara's Venom™, people seem to notice me more in meetings and social gatherings. It's subtle but powerful. I feel amazing!
            </p>
          </div>

          {/* Ritu Saxena Review */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-600 mr-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-black text-sm">Ritu Saxena</span>
            </div>
            
            <h3 className="font-bold text-black text-base mb-2">Finally found my signature scent</h3>
            <p className="text-black text-sm leading-relaxed">
              After years of searching, I finally found my signature scent. Kiara's Venom™ is classy, subtle, and makes me feel unique.
            </p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          <button className="text-gray-600 text-sm">K</button>
          <button className="text-gray-600 text-sm">&lt;</button>
          <button className="text-gray-600 text-sm">1</button>
          <button className="text-gray-600 text-sm">2</button>
          <button className="bg-gray-200 text-black font-bold text-sm w-8 h-8 rounded-full">3</button>
          <button className="text-gray-600 text-sm">4</button>
          <button className="text-gray-600 text-sm">5</button>
          <button className="text-gray-600 text-sm">&gt;</button>
          <button className="text-gray-600 text-sm">&gt;I</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewExtend;
