import React from 'react';
import '../styles/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 LuxuryStore. All rights reserved.</p>
      <div>
        <a href="/about">Tentang</a>
        <a href="/terms">Syarat</a>
        <a href="/privacy">Privasi</a>
      </div>
    </footer>
  );
}

export default Footer;