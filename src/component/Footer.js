import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Travelista. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
