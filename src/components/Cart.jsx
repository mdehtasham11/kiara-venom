import React,{useState} from "react";
import { X, Trash2 } from "lucide-react";

const Cart = ({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  updateQuantity,
}) => {
  const [isProtectionEnabled, setIsProtectionEnabled] = useState(false);
  
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const originalPrice = 11192.00;
  const currentPrice = 3597.00;
  const savings = originalPrice - currentPrice;
  const discount = 4395.00;
  const protectionPrice = 45.00;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] animate-[fadeIn_0.3s_ease]"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 h-screen bg-white z-[999] flex flex-col transition-[right] duration-300 shadow-[-2px_0_10px_rgba(0,0,0,0.1)] w-full max-w-[450px] ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-black m-0">
            Cart • {totalQuantity}
          </h2>
          <button
            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:opacity-70 transition-opacity"
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg
              width="16"
              height="16"
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

        <div className="flex-1 overflow-y-auto flex flex-col">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center gap-5">
              <p className="text-lg text-gray-500">Your cart is empty</p>
              <button
                className="inline-block px-8 py-4 text-base font-semibold text-center transition-all bg-[#121212] text-white border-2 border-[#121212] hover:bg-transparent hover:text-[#121212]"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Section */}
              <div className="p-6 border-b border-gray-200">
                <p className="text-black font-medium mb-2">Free shipping unlocked!</p>
                <div className="w-full bg-blue-200 h-2 rounded-full">
                  <div className="w-[95%] bg-blue-500 h-2 rounded-full"></div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 border-b border-gray-200">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.selectedVariant}-${index}`} className="flex gap-4 relative mb-4 last:mb-0">
                    {/* Product Image */}
                    <div className="w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-bold text-black leading-tight">
                          {item.name}
                        </h3>
                        <button
                          className="p-1 hover:opacity-70 transition-opacity"
                          onClick={() => removeFromCart(item.id, item.selectedVariant)}
                          aria-label="Remove item"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-gray-500"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>

                      {/* Variant Info */}
                      {item.selectedVariant && (
                        <p className="text-xs text-gray-600 mb-2">{item.selectedVariant}</p>
                      )}

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 border border-gray-300 w-fit rounded mb-3">
                        <button
                          className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
                          onClick={() => updateQuantity(item.id, item.selectedVariant, Math.max(1, item.quantity - 1))}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
                          onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">Rs. {originalPrice.toLocaleString()}</span>
                          <span className="text-sm font-bold text-black">Rs. {item.price.toLocaleString()}</span>
                        </div>
                        <p className="text-sm font-bold text-green-600">(Save Rs. {(originalPrice - item.price).toLocaleString()})</p>
                      </div>

                      {/* Coupon Tag */}
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs text-black">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3s1.34-3 3-3h12c1.66 0 3 1.34 3 3z"></path>
                            <path d="M9 12h6"></path>
                          </svg>
                          VENOM6
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Glass Break Free Protection */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="M9 12l2 2 4-4"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-black mb-1">Glass Break Free Protection</h4>
                      <p className="text-xs text-gray-500">Protect your Bottle from breakage, damage, loss, or theft during shipping.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-black">Rs. {protectionPrice}</span>
                    <button
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        isProtectionEnabled ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      onClick={() => setIsProtectionEnabled(!isProtectionEnabled)}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          isProtectionEnabled ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Discounts Section */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black">Discounts</span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs text-black">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3s1.34-3 3-3h12c1.66 0 3 1.34 3 3z"></path>
                        <path d="M9 12h6"></path>
                      </svg>
                      VENOM6
                    </span>
                    <span className="text-sm text-black">- Rs. {discount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-gray-50">
                {/* Prepaid Discount Banner */}
                <div className="bg-green-500 text-white p-3 rounded-lg mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium">Extra Discount on Prepaid orders</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </div>

                {/* BUY NOW Button */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-black text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
                    BUY NOW
                  </button>
                  
                  {/* Payment Icons */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">G</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">P</span>
                    </div>
                  </div>
                </div>

                {/* Powered By */}
                <div className="text-right mt-2">
                  <span className="text-xs text-gray-400">Powered By Shiprocket</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
