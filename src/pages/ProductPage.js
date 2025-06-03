import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/styles.css";

// Pemetaan slug dari HomePage ke kategori di allProducts
const categoryMapping = {
  jam: "Watch",
  tas: "Bag",
  sepatu: "Shoes",
  perhiasan: "Jewelry",
};

const allProducts = [
  {
    id: 1,
    name: 'Rolex Submariner',
    price: 'Rp 320,000,000',
    category: 'Watch',
    images: ['jam_1_1.png'],
    description: 'This elegant watch is designed with high precision...',
    checkoutCount: 120
  },
  {
    id: 2,
    name: 'Richard Mille RM 11',
    price: 'Rp 2,300,000,000',
    category: 'Watch',
    images: ['jam_2.png'],
    description: 'A masterpiece of horology...',
    checkoutCount: 80
  },
  {
    id: 3,
    name: 'Hermès Birkin Bag',
    price: 'Rp 30,000,000',
    category: 'Bag',
    images: ['tas_1.png'],
    description: 'This designer bag is crafted from Italian calf leather...',
    checkoutCount: 200
  },
  {
    id: 4,
    name: 'Dior Saddle Bag',
    price: 'Rp 35,000,000',
    category: 'Bag',
    images: ['tas_2.png'],
    description: 'Exclusivity embodied in this bag...',
    checkoutCount: 150
  },
  {
    id: 5,
    name: 'Air Jordan 1 Golden',
    price: 'Rp 5,000,000',
    category: 'Shoes',
    images: ['sepatu_1.png'],
    description: 'These leather shoes are made from full-grain leather...',
    checkoutCount: 300
  },
  {
    id: 6,
    name: 'Hermès High Heels',
    price: 'Rp 7,000,000',
    category: 'Shoes',
    images: ['sepatu_2.png'],
    description: 'Combining classic elegance with modern innovation...',
    checkoutCount: 250
  },
  {
    id: 7,
    name: 'Jewelry with 18K Gold',
    price: 'Rp 20,000,000',
    category: 'Jewelry',
    images: ['perhiasan_1.png'],
    description: 'This 18K gold jewelry is designed with intricate details...',
    checkoutCount: 90
  },
  {
    id: 8,
    name: 'Gold Jewelry 2',
    price: 'Rp 25,000,000',
    category: 'Jewelry',
    images: ['perhiasan_2.png'],
    description: 'A masterpiece of 18K yellow gold...',
    checkoutCount: 70
  },
  {
    id: 9,
    name: 'AP Royal Oak Offshore',
    price: 'Rp 900,000,000',
    category: 'Watch',
    images: ['jam_d_1.png'],
    description: 'A luxury watch with a modern design...',
    checkoutCount: 100
  },
  {
    id: 10,
    name: 'Royal Oak Offshore 43',
    price: 'Rp 530,000,000,000',
    category: 'Watch',
    images: ['jam_4.png'],
    description: 'A combination of elegance and advanced technology...',
    checkoutCount: 90
  },
  {
    id: 11,
    name: 'Chanel Classic Flap ',
    price: 'Rp 40,000,000',
    category: 'Bag',
    images: ['tas_3.png'],
    description: 'A luxury bag with a unique and exclusive design...',
    checkoutCount: 180
  },
  {
    id: 12,
    name: 'Gucci Dionysus Bag',
    price: 'Rp 45,000,000',
    category: 'Bag',
    images: ['tas_4.png'],
    description: 'Top quality with a touch of art...',
    checkoutCount: 160
  },
  {
    id: 13,
    name: 'Vegas Ankle Boots',
    price: 'Rp 8,000,000',
    category: 'Shoes',
    images: ['sepatu_3.png'],
    description: 'Premium leather shoes with maximum comfort...',
    checkoutCount: 280
  },
  {
    id: 14,
    name: 'Hermès Flat Shoes',
    price: 'Rp 9,000,000',
    category: 'Shoes',
    images: ['sepatu_4.png'],
    description: 'Modern design with high-quality materials...',
    checkoutCount: 260
  },
  {
    id: 15,
    name: 'Gold Jewelry 3',
    price: 'Rp 30,000,000',
    category: 'Jewelry',
    images: ['perhiasan_3.png'],
    description: 'Stunning white gold jewelry with diamonds...',
    checkoutCount: 110
  },
  {
    id: 16,
    name: 'Gold Jewelry 4',
    price: 'Rp 35,000,000',
    category: 'Jewelry',
    images: ['perhiasan_4.png'],
    description: 'Timeless beauty in every detail...',
    checkoutCount: 95
  }
];


const categories = ["All", "Watch", "Bag", "Shoes", "Jewelry"];

function ProductPage() {
  const { category: urlCategory } = useParams(); // Ambil category dari URL (misalnya: jam, tas)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Set selectedCategory berdasarkan URL saat pertama kali dimuat
  useEffect(() => {
    if (urlCategory && categoryMapping[urlCategory]) {
      const mappedCategory = categoryMapping[urlCategory];
      setSelectedCategory(mappedCategory); // Set ke kategori yang sesuai (misalnya, "Watch" untuk "jam")
    } else {
      setSelectedCategory("All"); // Default ke "All" jika tidak ada atau tidak valid
    }
  }, [urlCategory]);

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  console.log("ProductPage - URL Category:", urlCategory);
  console.log("ProductPage - Selected Category:", selectedCategory);
  console.log("ProductPage - Filtered Products:", filteredProducts);

  return (
    <div className="container">
      <h1>{selectedCategory === "All" ? "All Products" : selectedCategory}</h1>
      <div className="filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductPage;