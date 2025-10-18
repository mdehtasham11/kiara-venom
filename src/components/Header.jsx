import React, { useState } from "react";

const Header = ({ cartCount, toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 py-5 sticky top-0 z-50">
      <div className="container flex items-center justify-between gap-5">
        <button
          className="hidden md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="flex-shrink-0">
          <a href="/">
            <h1 className="text-[28px] font-bold tracking-[2px] m-0">KIARA</h1>
          </a>
        </div>

        <nav
          className={`${
            isMobileMenuOpen ? "left-0" : "-left-[280px]"
          } md:relative md:left-0 fixed top-0 w-[280px] md:w-auto h-screen md:h-auto bg-white md:bg-transparent pt-20 md:pt-0 px-8 md:px-0 transition-all duration-300 z-[1000]`}
        >
          <ul className="flex flex-col md:flex-row list-none gap-5 md:gap-8 m-0 p-0">
            <li>
              <a
                href="/"
                className="text-[15px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-[15px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-[15px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-[15px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <button
            className="p-2 hover:opacity-70 transition-opacity hidden md:block"
            aria-label="Search"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>

          <button
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Account"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <button
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={toggleCart}
            aria-label="Cart"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[11px] font-semibold leading-none">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
