import React from 'react';
import { useState, useEffect, useRef } from 'react';
import WriteReview from './WriteReview';

const CustomerReview = () => {

    const [click, setClick] = useState(false);
    const [sortBy, setSortBy] = useState('most_recent');
    const [currentPage, setCurrentPage] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const reviewsPerPage = 5;
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  
  const most_recent = [
    {
      name: "Pooja Agarwal",
      title: "Feels like it was made for me",
      review: "This perfume feels like it was custom-made for me. I get compliments daily and it lifts my mood instantly. Can't go a day without it now.",
      rating: 5
    },
    {
      name: "Madhuri Joshi",
      title: "My confidence has skyrocketed",
      review: "Since using Kiara's Venom, I feel more confident and attractive. The scent is amazing and lasts all day. Highly recommend!",
      rating: 5
    },
    {
      name: "Sheetal Patil",
      title: "Soft scent, big impact",
      review: "The fragrance is subtle yet powerful. I get compliments everywhere I go. It's become my signature scent!",
      rating: 5
    },
    {
      name: "Tanya Singh",
      title: "Everyone notices me now",
      review: "Since I started wearing Kiara's Venom™, people seem to notice me more in meetings and social gatherings. It's subtle but powerful. I feel amazing!",
      rating: 5
    },
    {
      name: "Ritu Saxena",
      title: "Finally found my signature scent",
      review: "After years of searching, I finally found my signature scent. Kiara's Venom™ is classy, subtle, and makes me feel unique.",
      rating: 5
    }
  ];

  const Highest_Rating = [
    {
      name: "Sanya Kapoor",
      title: "Soft, elegant, and noticed",
      review: "This perfume doesn't scream for attention, but somehow it makes me more memorable. I've had friends comment on how good I smell and even strangers compliment me. I love it!",
      rating: 5
    },
    {
      name: "Anjali Mehta",
      title: "Feels so natural and confident",
      review: "The scent is soft, not overpowering, but somehow people just notice me more. I feel more confident and noticed without trying too hard. Definitely my new go-to perfume.",
      rating: 5
    },
    {
      name: "Meera Reddy",
      title: "A little magic in a bottle",
      review: "Kiara's Venom™ feels like it adds a little magic to my presence. I feel confident, people respond differently around me, and it smells amazing. Can't recommend it enough.",
      rating: 5
    },
    {
      name: "Shruti Deshmukh",
      title: "Feels exclusive and premium",
      review: "The moment I opened the bottle, it felt premium. But it's not just the packaging — the scent and aura effect are amazing. People notice me without me doing anything special. Love this perfume!",
      rating: 5
    },
    {
      name: "Divya Kulkarni",
      title: "My new favorite perfume",
      review: "I've never felt a perfume work like this. Kiara's Venom™ makes me feel elegant, confident, and noticed in a very subtle way. I've already bought a second bottle!",
      rating: 5
    },
    {
      name: "Ishita Rao",
      title: "Subtle but effective",
      review: "Kiara's Venom™ doesn't overpower you, which I love. But somehow, it makes people take notice. Compliments have increased and I feel more confident. Totally recommend trying it.",
      rating: 5
    },
    {
      name: "Rekha Choudhary",
      title: "Love the way it makes me feel",
      review: "Wearing Kiara's Venom™ makes me feel elegant and self-assured. It's amazing how a small bottle can make such a big difference.",
      rating: 5
    },
    {
      name: "Pooja Agarwal",
      title: "Feels like it was made for me",
      review: "This perfume feels like it was custom-made for me. I get compliments daily and it lifts my mood instantly. Can't go a day without it now.",
      rating: 5
    },
    {
      name: "Madhuri Joshi",
      title: "My confidence has skyrocketed",
      review: "I never thought a perfume could actually change how I feel. Kiara's Venom™ has boosted my confidence and I feel more attractive and noticed than ever.",
      rating: 5
    },
    {
      name: "Sheetal Patil",
      title: "Soft scent, big impact",
      review: "The scent is soft and not overpowering, but it leaves a strong impression. I love how people respond around me now.",
      rating: 5
    }
  ];

  const Lowest_Rating = [
    {
      name: "Radhika Iyer",
      title: "Worth every rupee",
      review: "I was skeptical at first, but after a week of wearing Kiara's Venom™, I noticed a difference in how people reacted. It's subtle, classy, and makes me feel attractive in a really natural way. Totally worth buying.",
      rating: 4
    },
    {
      name: "Nisha Verma",
      title: "I feel confident wearing this",
      review: "This perfume makes me feel like a new version of myself — more confident, more presentable, and noticed in a natural way. Friends have asked me what I'm wearing. Really happy with it.",
      rating: 4
    },
    {
      name: "Kavya Nair",
      title: "Not like any perfume I've tried",
      review: "I've worn perfumes for years, but none gave me the kind of attention I get with Kiara's Venom™. It's subtle but effective — like it works on an invisible level. Very impressed.",
      rating: 4
    },
    {
      name: "Geeta Rao",
      title: "Impressed beyond words",
      review: "I wasn't sure at first, but now I'm completely impressed. The perfume smells amazing and I feel noticed without even trying.",
      rating: 4
    },
    {
      name: "Rashmi Agarwal",
      title: "Friends keep asking me my secret",
      review: "Friends keep asking me what I'm using because they notice the difference immediately. Love it!",
      rating: 4
    }
  ];

  // Get current reviews based on sort selection
  const getCurrentReviews = () => {
    switch(sortBy) {
      case 'most_recent':
        return most_recent;
      case 'highest_rating':
        return Highest_Rating;
      case 'lowest_rating':
        return Lowest_Rating;
      default:
        return most_recent;
    }
  };

  const currentReviews = getCurrentReviews();
  const totalPages = Math.ceil(currentReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const paginatedReviews = currentReviews.slice(startIndex, endIndex);

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1); // Reset to first page when changing sort
    setIsDropdownOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getSortLabel = () => {
    switch(sortBy) {
      case 'most_recent':
        return 'Most Recent';
      case 'highest_rating':
        return 'Highest Rating';
      case 'lowest_rating':
        return 'Lowest Rating';
      default:
        return 'Most Recent';
    }
  };

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
        <div className="relative mb-4 md:mb-6 lg:mb-8" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-[#613233] text-sm md:text-base lg:text-lg mr-2 hover:text-black transition-colors"
          >
            <span>{getSortLabel()}</span>
            <svg 
              className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px]">
              <button
                onClick={() => handleSortChange('most_recent')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortBy === 'most_recent' ? 'bg-gray-100 font-semibold' : ''}`}
              >
                Most Recent
              </button>
              <button
                onClick={() => handleSortChange('highest_rating')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortBy === 'highest_rating' ? 'bg-gray-100 font-semibold' : ''}`}
              >
                Highest Rating
              </button>
              <button
                onClick={() => handleSortChange('lowest_rating')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortBy === 'lowest_rating' ? 'bg-gray-100 font-semibold' : ''}`}
              >
                Lowest Rating
              </button>
            </div>
          )}
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {paginatedReviews.map((review, index) => (
            <div key={index} className="border-t border-gray-200 pt-4 md:pt-6 lg:pt-8">
              <div className="flex items-center mb-2">
                <div className="flex text-[#613233] mr-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <svg key={i + review.rating} className="w-4 h-4 stroke-current stroke-2" fill="none" viewBox="0 0 20 20">
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
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button 
              onClick={() => handlePageChange(1)}
              className="text-gray-600 text-sm hover:text-black"
              disabled={currentPage === 1}
            >
              K
            </button>
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              className="text-gray-600 text-sm hover:text-black"
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`text-sm w-8 h-8 rounded-full ${
                  currentPage === page
                    ? 'bg-gray-200 text-black font-bold'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              className="text-gray-600 text-sm hover:text-black"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
            <button 
              onClick={() => handlePageChange(totalPages)}
              className="text-gray-600 text-sm hover:text-black"
              disabled={currentPage === totalPages}
            >
              &gt;I
            </button>
          </div>
        )}

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
