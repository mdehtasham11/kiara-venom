import React from "react";

const Cart = ({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  updateQuantity,
}) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold m-0">
            Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            )
          </h2>
          <button
            className="p-2 hover:opacity-70 transition-opacity"
            onClick={onClose}
            aria-label="Close cart"
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
              <div className="flex-1 p-6">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedVariant}-${index}`}
                    className="flex gap-4 pb-6 mb-6 border-b border-gray-200 last:border-0 relative"
                  >
                    <div className="w-[100px] h-[120px] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-semibold m-0 mb-1">
                        {item.name}
                      </h3>
                      {item.selectedVariant && (
                        <p className="text-sm text-gray-500 m-0 mb-2">
                          {item.selectedVariant}
                        </p>
                      )}
                      <p className="text-base font-semibold m-0 mb-3">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      <div className="flex items-center gap-2 border border-gray-300 w-fit rounded">
                        <button
                          className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedVariant,
                              item.quantity - 1
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.id,
                              item.selectedVariant,
                              parseInt(e.target.value) || 1
                            )
                          }
                          min="1"
                          className="w-10 h-8 text-center border-none text-sm font-semibold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                          className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedVariant,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="absolute top-0 right-0 p-1 hover:opacity-70 transition-opacity"
                      onClick={() =>
                        removeFromCart(item.id, item.selectedVariant)
                      }
                      aria-label="Remove item"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center mb-2 text-lg font-semibold">
                  <span>Subtotal:</span>
                  <span className="text-[22px]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="text-sm text-gray-600 m-0 mb-4 text-center">
                  Shipping & taxes calculated at checkout
                </p>

                <button className="w-full inline-block px-8 py-4 text-base font-semibold text-center transition-all bg-[#121212] text-white border-2 border-[#121212] hover:bg-transparent hover:text-[#121212] mb-3">
                  Proceed to Checkout
                </button>

                <button
                  className="w-full inline-block px-8 py-4 text-base font-semibold text-center transition-all bg-transparent text-[#121212] border-2 border-[#121212] hover:bg-[#121212] hover:text-white"
                  onClick={onClose}
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
