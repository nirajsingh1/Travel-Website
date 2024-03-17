import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '20px 0', borderBottom: '1px solid #ccc' }}>
      <div className="container">
        <h1 style={{ color: '#333', textDecoration: 'underline' }}>Travelista</h1>
        <nav>
          <ul>
            <li><a href="#destinations" style={{ color: '#333' }}>Destinations</a></li>
            <li><a href="#contact" style={{ color: '#333' }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
