import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HorizontalTicker from "./components/HorizontalTicker";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedVariant === product.selectedVariant
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id &&
          item.selectedVariant === product.selectedVariant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === productId && item.selectedVariant === variant)
      )
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.selectedVariant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <a
          className="absolute -top-24 left-5 z-[9999] bg-accent text-white px-5 py-2.5 focus:top-5"
          href="#MainContent"
        >
          Skip to content
        </a>

        <HorizontalTicker />
        <Header cartCount={cartCount} toggleCart={toggleCart} />

        <main id="MainContent" className="flex-1">
          <Routes>
            <Route path="/" element={<ProductPage addToCart={addToCart} />} />
            <Route
              path="/products/:productId"
              element={<ProductPage addToCart={addToCart} />}
            />
          </Routes>
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={toggleCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
}

export default App;
