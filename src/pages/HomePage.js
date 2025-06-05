import React from 'react';
import { Link } from 'react-router-dom';
import jam_1 from '../assets/jam_1.png';
import tas_1 from '../assets/tas_1.png';
import sepatu_1 from '../assets/sepatu_1.png';
import perhiasan_1 from '../assets/perhiasan_1.png';
import jam_banner from '../assets/jam_banner.mp4';
import tas_banner from '../assets/tas_banner.mp4';
import left_1 from '../assets/left_1.png';
import left_2 from '../assets/left_2.png';
import left_3 from '../assets/left_3.png';
import right_1 from '../assets/right_1.png';
import right_2 from '../assets/right_2.png';
import right_3 from '../assets/right_3.png';
import '../styles/styles.css';

const categories = [
  { name: 'Luxury Watches', slug: 'jam', image: jam_1 },
  { name: 'Designer Bags', slug: 'tas', image: tas_1 },
  { name: 'Leather Shoes', slug: 'sepatu', image: sepatu_1 },
  { name: 'Jewelry', slug: 'perhiasan', image: perhiasan_1 },
];

const leftImages = [
  { src: left_1, alt: 'Left Image 1' },
  { src: left_2, alt: 'Left Image 2' },
  { src: left_3, alt: 'Left Image 3' },
];

const rightImages = [
  { src: right_1, alt: 'Right Image 1' },
  { src: right_2, alt: 'Right Image 2' },
  { src: right_3, alt: 'Right Image 3' },
];

function HomePage() {
  return (
    <div className="homepage">
      {/* Banner Video */}
      <div className="banner">
        <video autoPlay loop muted playsInline className="banner-video">
          <source src={jam_banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="luxury-text">
          "Discovering Infinite Luxury, Created for Those Who Understand True Elegance."
        </p>
      </div>

      {/* Main Categories */}
      <div className="container">
        <h2 className="category-title">Main Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/products/category/${category.slug}`}
              key={category.slug}
              className="category-card"
            >
              <img src={category.image} alt={category.name} className="category-image" />
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>

        {/* Tas Banner Video with Left and Right Images */}
        <div className="banner-section">
          <div className="left-images">
            {leftImages.map((image, index) => (
              <img
                key={`left-${index}`}
                src={image.src}
                alt={image.alt}
                className="side-image"
              />
            ))}
          </div>
          <div className="tas-banner-video">
            <video autoPlay loop muted playsInline className="additional-video">
              <source src={tas_banner} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="right-images">
            {rightImages.map((image, index) => (
              <img
                key={`right-${index}`}
                src={image.src}
                alt={image.alt}
                className="side-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;