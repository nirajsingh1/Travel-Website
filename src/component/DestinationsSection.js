import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination">
            <h3>Mumbai</h3>
            <p>Mumbai, formerly known as Bombay, is India's largest city and a financial hub. It is famous for its bustling streets, vibrant culture, and iconic landmarks such as the Gateway of India and Marine Drive.</p>
          </div>
          <div className="destination">
            <h3>Delhi</h3>
            <p>Delhi, the capital city of India, is a melting pot of diverse cultures and rich history. It is home to historic monuments like the Red Fort, Qutub Minar, and Jama Masjid, as well as bustling markets and modern infrastructure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationsSection;
