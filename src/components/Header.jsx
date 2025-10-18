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
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[1000]`}
      >
        <div className="p-6 pt-20">
          <button
            className="absolute top-5 right-5 p-2 hover:opacity-70"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
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
