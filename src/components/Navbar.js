  import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import logo from '../assets/logo.png';
    import '../styles/styles.css';

    function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
        <nav className="navbar">
          <img src={logo} alt="Logo" style={{ height: '32px' }} />
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Product</Link></li>
            <li><Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</Link></li>
            <li><Link to="/cart" onClick={() => setIsMenuOpen(false)}>Carts</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      );
    }

    export default Navbar;