import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      console.log('Email subscribed:', email);
    }
  };


  return (
    <div className="bg-[rgb(18,18,18)] py-[100px] md:py-16 lg:py-20 px-4">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* Brand Logo */}
        <img className='w-[125px] h-[75px] md:w-[150px] md:h-[90px] lg:w-[175px] lg:h-[105px] mt[-20px] ml-[120px] md:ml-0 md:mx-auto lg:mx-auto mb-[60px] md:mb-[80px] lg:mb-[100px]' srcset="//fadebykiara.com/cdn/shop/files/KIARA-4_55d9ba95-6b8d-41ac-b58d-bf0f59bc5120.png?v=1732865587&amp;width=125, //fadebykiara.com/cdn/shop/files/KIARA-4_55d9ba95-6b8d-41ac-b58d-bf0f59bc5120.png?v=1732865587&amp;width=250 2x" src="//fadebykiara.com/cdn/shop/files/KIARA-4_55d9ba95-6b8d-41ac-b58d-bf0f59bc5120.png?v=1732865587&amp;width=760" alt="" loading="lazy" width="500" height="300"/>

        {/* Quick Links */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-[#ECCECEE6] font-bold text-[21px] md:text-[24px] lg:text-[28px] mb-4 md:mb-6 lg:mb-8">Quick links</h3>
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">Search</p>
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">About Us</p>
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">Contact</p>
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">Refund Policy</p>
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">Shipping Policy</p>
            <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg hover:text-white cursor-pointer transition-colors">Terms of Service</p>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-[#ECCECEE6] font-bold text-[21px] md:text-[24px] lg:text-[28px] mb-4 md:mb-6">
            Join the Girl's Locker Room
          </h3>
          <p className="text-[#ECCECEE6] text-sm md:text-base lg:text-lg mb-6 md:mb-8">
            Get an extra 15% off on your next order.
          </p>
          
          <form onSubmit={handleSignup} className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-[rgb(18,18,18)] border border-[#ECCECEE6] rounded-lg text-[#ECCECEE6] placeholder-[#ECCECEE6] focus:outline-none focus:border-pink-300 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ECCECEE6] text-[rgb(18,18,18)] font-bold py-3 px-6 rounded-lg hover:bg-pink-200 transition-colors"
            >
              {isSubscribed ? 'Thank you for subscribing!' : 'sign up'}
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center pt-6 md:pt-8 border-t border-gray-700">
          <div className="text-[#ECCECEE6] text-sm md:text-base">
            © 2025, Kiara
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
