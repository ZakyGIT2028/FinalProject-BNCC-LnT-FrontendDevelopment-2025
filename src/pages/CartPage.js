import React, { useState, useEffect } from 'react';
import imageMap from '../utils/imageMap';
import '../styles/styles.css';

// Fungsi untuk mengonversi harga string ke angka
const parsePrice = (priceString) => {
  if (!priceString) return 0; // Handle undefined or null price
  return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
};

function CartPage() {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [isConfirming, setIsConfirming] = useState(false);
  const [shippingStatus, setShippingStatus] = useState(''); // 'pending', 'success', or 'failed'

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  const handleConfirmOrder = () => {
    setIsConfirming(true);
    setShippingStatus('pending');

    // Simulate shipping process (3 seconds)
    setTimeout(() => {
      // Simulate success/failure (80% chance of success)
      const isSuccess = Math.random() > 0.2; // Fixed syntax error
      if (isSuccess) {
        setShippingStatus('success');
        // Clear cart after success animation (2 seconds)
        setTimeout(() => {
          setIsConfirming(false);
          setShippingStatus('');
          setCartItems([]);
          localStorage.removeItem('cartItems');
        }, 2000);
      } else {
        setShippingStatus('failed');
        // Reset to cart view after failure animation (2 seconds)
        setTimeout(() => {
          setIsConfirming(false);
          setShippingStatus('');
        }, 2000);
      }
    }, 3000);
  };

  const subtotal = cartItems.reduce((total, item) => {
    const price = parsePrice(item.price);
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);

  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const formatRupiah = (number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {isConfirming ? (
        <div className="shipping-animation">
          {shippingStatus === 'pending' && (
            <>
              <div className="package"></div>
              <p className="shipping-text">Processing your order...</p>
            </>
          )}
          {shippingStatus === 'success' && (
            <>
              <div className="success-icon"></div>
              <p className="shipping-text">Order Confirmed!</p>
            </>
          )}
          {shippingStatus === 'failed' && (
            <>
              <div className="failure-icon"></div>
              <p className="shipping-text">Shipping Failed. Please try again.</p>
            </>
          )}
        </div>
      ) : cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.images && item.images.length > 0 ? imageMap[item.images[0]] : 'https://via.placeholder.com/100'}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-quantity">Quantity: {item.quantity || 1}</p>
                  <p className="item-price">{formatRupiah(parsePrice(item.price) * (item.quantity || 1))}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    className="remove-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <div className="quantity-adjust">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity || 1}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="total-line">
              <span>Subtotal</span>
              <span>{formatRupiah(subtotal)}</span>
            </div>
            <div className="total-line">
              <span>Tax (12%)</span>
              <span>{formatRupiah(tax)}</span>
            </div>
            <div className="total-line total-final">
              <span>Total</span>
              <span>{formatRupiah(total)}</span>
            </div>
          </div>
          <button
            className="confirm-order-btn"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;