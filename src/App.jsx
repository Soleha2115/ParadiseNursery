import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <header className="landing-header">
              <h1 className="brand-title">Welcome to Paradise Nursery</h1>
              <p className="brand-tagline">Where Greenery Meets Serenity</p>
              <div className="divider"></div>
            </header>

            <AboutUs />

            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className="product-list-page">
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      )}
    </div>
  );
}

export default App;
