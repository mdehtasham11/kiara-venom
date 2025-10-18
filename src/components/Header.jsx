import React, { useState } from "react";

const Header = ({ cartCount, toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-[#dbb5b5] sticky min-h-20 flex items-center top-0 z-50">
        <div className="flex items-center justify-between w-full px-4">
          {/* Hamburger Menu - Left */}
          <button
            className="p-2 hover:opacity-70 transition-opacity"
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
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="block text-center">
              <h1 className="text-[22px] md:text-[26px] font-bold tracking-[0.25em] m-0 leading-tight text-black">
                KIARA
              </h1>
              <p className="text-[8px] md:text-[9px] tracking-[0.35em] font-light uppercase text-black mt-0">
                COSMETICS
              </p>
            </a>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
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
                strokeLinecap="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <nav
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[1000]`}
      >
        <div className="p-6 pt-20">
          <button
            className="absolute top-5 right-5 p-2 hover:opacity-70"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="/"
                className="text-base font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-base font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-base font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-base font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
