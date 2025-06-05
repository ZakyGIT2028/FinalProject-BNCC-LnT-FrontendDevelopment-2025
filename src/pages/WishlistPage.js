import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

function WishlistPage() {
  const { wishlist = [], removeFromWishlist, clearWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!wishlist || wishlist.length === 0) return;

    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...existingCartItems];

    wishlist.forEach((newItem) => {
      const index = updatedCartItems.findIndex(item => item.id === newItem.id);
      if (index !== -1) {
        updatedCartItems[index].quantity = (updatedCartItems[index].quantity || 1) + 1;
      } else {
        updatedCartItems.push({ ...newItem, quantity: 1 });
      }
    });

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    clearWishlist();
    navigate('/cart');
  };

  const handleClearAllWishlist = () => {
    if (wishlist.length === 0) return;
    clearWishlist();
  };

  return (
    <div className="container">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Add a product to get started!</p>
      ) : (
        <>
          <div className="product-grid">
            {wishlist.map((product) => (
              <div key={product.id} className="wishlist-card">
                <img
                  src={
                    product.images && product.images.length > 0
                      ? `/assets/${product.images[0]}`
                      : 'https://via.placeholder.com/150'
                  }
                  alt={product.name || 'Product Image'}
                  className="wishlist-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
                <div className="wishlist-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className="wishlist-buttons">
                    <Link to={`/products/${product.id}`} className="view-details-btn">
                      Lihat Detail
                    </Link>
                    <button
                      className="remove-wishlist-btn"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-button-container">
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="clear-all-wishlist-btn" onClick={handleClearAllWishlist}>
              Hapus Semua
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default WishlistPage;
