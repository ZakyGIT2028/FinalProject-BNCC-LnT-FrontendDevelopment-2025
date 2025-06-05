import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const parsePrice = (priceString) => {
  return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
};

function CheckoutPage() {
  const [orderSummary, setOrderSummary] = useState(() => {
    const savedItems = localStorage.getItem('checkoutItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('checkoutItems', JSON.stringify(orderSummary));
  }, [orderSummary]);

  const removeFromCheckout = (productId) => {
    setOrderSummary((prevSummary) =>
      prevSummary.filter((item) => item.id !== productId)
    );
  };

  const subtotal = orderSummary.reduce((total, item) => {
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
    <div className="container checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {orderSummary.length === 0 ? (
        <p className="checkout-empty">No items to checkout.</p>
      ) : (
        <div className="checkout-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-items">
            {orderSummary.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="item-details">
                  <img
                    src={item.images && item.images.length > 0 ? item.images[0] : '/placeholder-image.jpg'}
                    alt={item.name}
                    className="checkout-item-image"
                  />
                  <span className="item-name">{item.name}</span>
                </div>
                <div className="item-actions">
                  <span className="item-price">
                    {item.price} x {item.quantity || 1}
                  </span>
                  <button
                    className="remove-checkout-btn"
                    onClick={() => removeFromCheckout(item.id)}
                  >
                    Remove
                  </button>
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
            onClick={() => {
          
              alert('Order confirmed!'); 
              setOrderSummary([]);
              localStorage.removeItem('checkoutItems');
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
