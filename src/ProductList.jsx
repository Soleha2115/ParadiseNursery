import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482874117-89e9f1557717?auto=format&fit=crop&w=500&q=80',
          description: 'Produces oxygen at night and removes toxins like formaldehyde.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484437-a4b7454852b7?auto=format&fit=crop&w=500&q=80',
          description: 'Filters pollutants such as carbon monoxide, benzene, and xylene.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=500&q=80',
          description: 'Removes mold spores and purifies indoor ambient humidity.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1628172945207-68b65e971488?auto=format&fit=crop&w=500&q=80',
          description: 'A natural air humidifier that thrives in moderate indirect light.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1596724817757-074494109405?auto=format&fit=crop&w=500&q=80',
          description: 'Large, glossy leaves designed by nature to absorb airborne toxins.',
          cost: '$20',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=500&q=80',
          description: 'Purifies indoor air and features soothing medicinal gel.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=500&q=80',
          description: 'Renowned for its calming floral aroma that reduces stress.',
          cost: '$16',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729961255-cc3a4469978b?auto=format&fit=crop&w=500&q=80',
          description: 'Exudes an intoxicating sweet scent that promotes peaceful sleep.',
          cost: '$22',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586000433-a5bc1d3b3f15?auto=format&fit=crop&w=500&q=80',
          description: 'Invigorating pine-like herbal aroma that sharpens focus.',
          cost: '$14',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=500&q=80',
          description: 'Crisp, refreshing herbal scent perfect for refreshing any room.',
          cost: '$10',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80',
          description: 'Pleasant citrus aroma that naturally repels common insects.',
          cost: '$12',
        },
        {
          name: 'Gardenia',
          image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
          description: 'Velvety white blooms with a deeply luxurious fragrance.',
          cost: '$24',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=500&q=80',
          description: 'Indestructible houseplant that thrives in low light with little water.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=500&q=80',
          description: 'Fast-growing, trailing vine that tolerates neglect easily.',
          cost: '$14',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80',
          description: 'Earned its name by surviving nearly any indoor conditions.',
          cost: '$22',
        },
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
          description: 'Drought-tolerant succulent believed to attract good fortune.',
          cost: '$15',
        },
        {
          name: 'Snake Plant Moonshine',
          image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80',
          description: 'Pale silvery foliage requiring minimal attention and water.',
          cost: '$18',
        },
        {
          name: 'Chinese Evergreen',
          image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=500&q=80',
          description: 'Variegated foliage that handles low lighting and dry indoor air.',
          cost: '$19',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick} title="Return to Home">
          <span className="navbar-logo">🌿</span>
          <div className="brand-text">
            <span className="brand-main">Paradise Nursery</span>
            <span className="brand-sub">Where Greenery Meets Serenity</span>
          </div>
        </div>

        <div className="navbar-links">
          <button
            className={`nav-link-btn ${!showCart ? 'active' : ''}`}
            onClick={() => setShowCart(false)}
          >
            Plants
          </button>
          <button className="nav-link-btn home-nav-btn" onClick={onHomeClick}>
            Home
          </button>
          <button
            className={`nav-link-btn ${showCart ? 'active' : ''}`}
            onClick={() => setShowCart(true)}
          >
            Cart
          </button>

          <div
            className="cart-icon-wrapper"
            onClick={() => setShowCart(true)}
            title="View Shopping Cart"
          >
            <svg
              className="cart-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">{totalCartCount}</span>
          </div>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="catalog-wrapper">
          <header className="catalog-header">
            <h1 className="catalog-title">Our Handpicked Plant Collection</h1>
            <p className="catalog-subtitle">
              Transform your living sanctuary with our sustainably cultivated houseplants.
            </p>
          </header>

          {plantsArray.map((categoryObj) => (
            <section className="category-section" key={categoryObj.category}>
              <div className="category-header-wrap">
                <h2 className="category-title">{categoryObj.category}</h2>
                <div className="category-line"></div>
              </div>

              <div className="plants-grid">
                {categoryObj.plants.map((plant) => {
                  const added = isPlantInCart(plant.name);

                  return (
                    <div className="plant-card" key={plant.name}>
                      <div className="plant-image-container">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-image"
                          loading="lazy"
                        />
                        <span className="plant-price-badge">{plant.cost}</span>
                      </div>

                      <div className="plant-info">
                        <h3 className="plant-name">{plant.name}</h3>
                        <p className="plant-description">{plant.description}</p>
                        <button
                          className={`add-to-cart-btn ${added ? 'disabled' : ''}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
