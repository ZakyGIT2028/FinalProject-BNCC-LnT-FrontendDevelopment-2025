import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import WishlistPage from "./pages/WishlistPage";

import "./styles/styles.css";

function App() {
  return (
    <WishlistProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/category/:category" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;