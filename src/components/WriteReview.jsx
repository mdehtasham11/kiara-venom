import React, { useState } from 'react';

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Review submitted:', {
      rating,
      reviewTitle,
      reviewContent,
      displayName,
      email
    });
  };

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Page Title */}
          <h2 className="text-2xl font-bold text-black text-center mb-6">Write a review</h2>

          {/* Rating Section */}
          <div className="text-center">
            <label className="block text-black text-sm font-medium mb-3">Rating</label>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleStarClick(index)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-6 h-6 ${
                      index < rating ? 'text-[#613233]' : 'text-white'
                    }`}
                    fill={index < rating ? 'currentColor' : 'none'}
                    stroke="#613233"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Review Title Input */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">Review Title</label>
            <input
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              placeholder="Give your review a title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#613233] focus:border-transparent"
            />
          </div>

          {/* Review Content Textarea */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">Review content</label>
            <textarea
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              placeholder="Start writing here..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#613233] focus:border-transparent resize-none"
            />
          </div>

          {/* Picture/Video Upload */}
          <div className="text-center">
            <label className="block text-black text-sm font-medium mb-2">Picture/Video (optional)</label>
            <div className="w-24 h-24 mx-auto border-2 border-gray-300 rounded-md flex items-center justify-center bg-white">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
          </div>

          {/* Display Name Input */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Display name (displayed publicly like John Smith)
              <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#613233] focus:border-transparent"
            />
          </div>

          {/* Email Address Input */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#613233] focus:border-transparent"
            />
          </div>

          {/* Privacy Policy Text */}
          <div className="text-center">
            <p className="text-black text-xs leading-relaxed">
              How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me's terms, privacy and content policies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full py-2 px-4 border-2 border-[#613233] text-[#613233] rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#613233] focus:ring-offset-2 transition-colors"
            >
              Cancel review
            </button>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#613233] text-white rounded-md text-sm font-medium hover:bg-[#4a2526] focus:outline-none focus:ring-2 focus:ring-[#613233] focus:ring-offset-2 transition-colors"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
