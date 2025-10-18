import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show when scrolling down and past 300px
            if (currentScrollY > 300 && currentScrollY > lastScrollY) {
                setIsVisible(true);
            }
            // Hide when scrolling up
            else if (currentScrollY < lastScrollY) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`fixed bottom-0 right-0 z-50 transition-all w-full duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            <div className="flex flex-col items-center space-y-3">


                {/* Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="w-14 h-14 bg-[rgb(18,18,18)] mr-[-300px] rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
                    aria-label="Scroll to top"
                >
                    <svg className='text-[#ECCECEE6]' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                    </svg>
                </button>

                {/* Get it Now Button */}
                <button
                    className="w-full bg-[#ECCECEE6] px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
                    onClick={() => {
                        // Add your "Get it Now" functionality here
                        console.log('Get it Now clicked');
                    }}
                >
                   <div className='bg-[#121212] text-[#ECCECEE6] px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg'>Get it Now</div>
                </button>
            </div>
        </div>
    );
};

export default ScrollToTop;
