import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    console.log("Adding to wishlist from ProductCard:", product);
    addToWishlist(product);
    alert(`${product.name} telah ditambahkan ke wishlist!`);
  };

  return (
    <div className="product-card">
      <img
        src={
          product.images && product.images.length > 0
            ? `/assets/${product.images[0]}`
            : "https://via.placeholder.com/150"
        }
        alt={product.name || "Product Image"}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div className="product-buttons">
          <Link to={`/products/${product.id}`} className="view-details-btn">
            Detail
          </Link>
          <button className="wishlist-btn" onClick={handleAddToWishlist}>
            Add Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;