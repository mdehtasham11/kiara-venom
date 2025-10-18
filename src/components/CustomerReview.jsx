import React from 'react';
import { useState } from 'react';
import WriteReview from './WriteReview';

const CustomerReview = () => {

    const [click, setClick] = useState(false);
  
  const reviews = [
    {
      name: "Pooja Agarwal",
      title: "Feels like it was made for me",
      review: "This perfume feels like it was custom-made for me. I get compliments daily and it lifts my mood instantly. Can't go a day without it now."
    },
    {
      name: "Madhuri Joshi",
      title: "My confidence has skyrocketed",
      review: "Since using Kiara's Venom, I feel more confident and attractive. The scent is amazing and lasts all day. Highly recommend!"
    },
    {
      name: "Sheetal Patil",
      title: "Soft scent, big impact",
      review: "The fragrance is subtle yet powerful. I get compliments everywhere I go. It's become my signature scent!"
    },
    {
      name: "Tanya Singh",
      title: "Everyone notices me now",
      review: "Since I started wearing Kiara's Venom™, people seem to notice me more in meetings and social gatherings. It's subtle but powerful. I feel amazing!"
    },
    {
      name: "Ritu Saxena",
      title: "Finally found my signature scent",
      review: "After years of searching, I finally found my signature scent. Kiara's Venom™ is classy, subtle, and makes me feel unique."
    }
  ];

  return (
    <div className="bg-white py-8 md:py-12 lg:py-16 px-8">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 px-[76px] md:px-0">Customer Reviews</h2>
        <div className="flex items-center mb-2 px-[76px] md:px-0">
          <div className="flex text-[#613233] mr-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
          <span className="text-black text-sm">4.76 out of 5</span>
        </div>
        <p className="text-black text-sm md:text-base lg:text-lg mb-6 px-[76px] md:px-0">Based on 62 reviews</p>

        {/* Rating Breakdown */}
        <div className="space-y-3 px-[76px] md:px-0 mb-6">
          {/* 5 stars */}
          <div className="flex items-center">
            <div className="flex text-[#613233] mr-2">
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
            <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2">
              <div className="bg-[#613233] h-2 rounded-full" style={{width: '76%'}}></div>
            </div>
            <span className="text-black text-sm">47</span>
          </div>

          {/* 4 stars */}
          <div className="flex items-center">
            <div className="flex text-[#613233] mr-2">
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
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2">
              <div className="bg-[#613233] h-2 rounded-full" style={{width: '24%'}}></div>
            </div>
            <span className="text-black text-sm">15</span>
          </div>

          {/* 3 stars */}
          <div className="flex items-center">
            <div className="flex text-[#613233] mr-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2"></div>
            <span className="text-black text-sm">0</span>
          </div>

          {/* 2 stars */}
          <div className="flex items-center">
            <div className="flex text-[#613233] mr-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2"></div>
            <span className="text-black text-sm">0</span>
          </div>

          {/* 1 star */}
          <div className="flex items-center">
            <div className="flex text-[#613233] mr-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2"></div>
            <span className="text-black text-sm">0</span>
          </div>
        </div>

        {/* Write a review button */}
        <button onClick={() => setClick(!click)} className="w-full md:w-auto md:px-8 lg:px-12 bg-[#613233] text-white font-bold py-3 px-4 md:py-4 lg:py-5 rounded-lg mb-6 text-sm md:text-base lg:text-lg">
          {!click ? "Write a review" : "Cancel Review"}
        </button>

        {click && (
          <WriteReview />
        )}

        {/* Sort dropdown */}
        <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
          <span className="text-[#613233] text-sm md:text-base lg:text-lg mr-2">Most Recent</span>
          <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {reviews.map((review, index) => (
            <div key={index} className="border-t border-gray-200 pt-4 md:pt-6 lg:pt-8">
              <div className="flex items-center mb-2">
                <div className="flex text-[#613233] mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="w-[36px] h-[36px] bg-[#E0E0E080] mr-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-black text-sm">{review.name}</span>
              </div>
              
              <h3 className="font-bold text-black text-base md:text-lg lg:text-xl mb-2">{review.title}</h3>
              <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
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

        {/* Get it Now Button
        <div className="mt-8 text-center">
          <button className="bg-red-800 text-white font-bold py-3 px-8 rounded-lg">
            Get it Now
          </button>
        </div> */}

        
      </div>
      
    </div>
  );
};

export default CustomerReview;
