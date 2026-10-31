import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">Welcome to Paradise Nursery</h2>
      <p className="about-us-description">
        At Paradise Nursery, we are dedicated to bringing the serenity and vitality of nature
        directly into your everyday spaces. Founded with a deep passion for horticulture and
        sustainable living, our mission is to offer premium quality houseplants that elevate your
        home aesthetics, improve your indoor air quality, and nurture your well-being.
      </p>

      <div className="about-us-highlights">
        <div className="highlight-card">
          <div className="highlight-icon">🌿</div>
          <h3>Curated Plant Selection</h3>
          <p>
            From low-maintenance succulents to lush air-purifying tropicals and fragrant aromatics,
            each specimen is sustainably grown and hand-selected by our master horticulturists.
          </p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">💨</div>
          <h3>Clean Air &amp; Wellness</h3>
          <p>
            Indoor plants are nature’s air purifiers. Our collection helps filter common indoor toxins,
            boost humidity, reduce stress, and cultivate a rejuvenating sanctuary.
          </p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">💚</div>
          <h3>Expert Plant Care</h3>
          <p>
            Whether you are a beginner or a seasoned plant parent, we provide complete care guides,
            nursery tips, and personalized support to ensure your green companions thrive.
          </p>
        </div>
      </div>

      <p className="about-us-footer">
        Join our thriving green community today and transform your living environment into a
        breathtaking natural paradise.
      </p>
    </div>
  );
}

export default AboutUs;
