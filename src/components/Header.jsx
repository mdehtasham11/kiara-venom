import React, { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

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
            <Menu size={24} />
          </button>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="block text-center">
              <h1 className="text-4xl md:text-[2px] font-bold tracking-[0] m-0 leading-tight text-black">
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
              <Search size={22} />
            </button>

            <button
              className="p-2 hover:opacity-70 transition-opacity relative"
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={22} />
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
          isMobileMenuOpen ? "-translate-x-10" : "-translate-x-[100%]"
        } fixed top-0 left-0 w-full h-full bg-[#f8d7da] shadow-2xl pl-[30px] pt-0 transition-transform duration-300 ease-in-out z-[1000]`}
      >
        <div className="p-6 pt-2">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">Menu</h2>
            <button
              className="p-2 hover:opacity-70"
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
                className="text-black"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-300 mb-6"></div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 mb-6">
            <li>
              <a
                href="/"
                className="text-lg font-medium text-black hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/face-masks"
                className="text-lg font-medium text-black hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Face Masks
              </a>
            </li>
            <li>
              <a
                href="/hair-care"
                className="text-lg font-medium text-black hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Hair Care
              </a>
            </li>
            <li>
              <a
                href="/makeup-tools"
                className="text-lg font-medium text-black hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Makeup Tools
              </a>
            </li>
            <li>
              <a
                href="/shop-all"
                className="text-lg font-medium text-black hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Shop All
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-lg font-medium text-black hover:opacity-70 transition-opacity"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Separator */}
          <div className="border-t border-gray-300 mb-6"></div>

          {/* Login Section */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-black"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <a
              href="/login"
              className="text-lg font-bold text-black hover:opacity-70 transition-opacity"
              onClick={toggleMobileMenu}
            >
              Log in
            </a>
          </div>
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
