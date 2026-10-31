# Paradise Nursery Shopping Application

An elegant, interactive e-commerce shopping cart web application designed for Paradise Nursery, an online botanical plant store. Built with React and Redux Toolkit, this application provides plant lovers with a seamless shopping experience—from exploring curated indoor plants across multiple categories to managing a dynamic shopping cart.

## Table of Contents

- Project Overview
- Key Features
- Technologies Used
- Project Structure
- Installation and Setup
- Application Workflow & Tasks
- Author & License

## Project Overview

Paradise Nursery specializes in healthy, sustainable, and air-purifying houseplants. The goal of this application is to deliver a responsive, performant, and user-friendly interface that allows customers to:

- Learn about Paradise Nursery's history, mission, and dedication to indoor greenery.
- Browse a rich catalog of 18 unique houseplants categorized into Air Purifying Plants, Aromatic Fragrant Plants, and Low Maintenance Plants.
- Add plants to their shopping cart with instant UI updates and disabled button feedback.
- Manage their cart in real-time with quantity increment/decrement, item deletion, subtotal calculations, and total order cost updates.
- Receive friendly checkout prompts and easily navigate back to browse more plants.

## Key Features

### 1. Landing Page with Background Image

- Atmospheric full-screen botanical greenhouse background image.
- Company branding, mission statement, and key value propositions (AboutUs.jsx).
- Engaging Get Started button transitioning smoothly into the plant catalog.

### 2. Multi-Category Houseplant Catalog

- Air Purifying Plants: Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera.
- Aromatic Fragrant Plants: Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Gardenia.
- Low Maintenance Plants: ZZ Plant, Pothos, Cast Iron Plant, Jade Plant, Snake Plant Moonshine, Chinese Evergreen.
- Each plant displays high-resolution photography, botanical name, description, and unit price.

### 3. Redux-Powered Shopping Cart (CartSlice.jsx)

- Centralized state management using Redux Toolkit.
- Actions:
  - addItem: Adds new plants or increments existing items.
  - removeItem: Removes specific items by name.
  - updateQuantity: Adjusts item quantity dynamically.

### 4. Interactive Navigation & Cart Icon

- Fixed navigation bar persisting across both Product Listing and Cart pages.
- Dynamic cart badge displaying total item count in real time.
- One-click toggling between catalog and shopping cart views.

### 5. Detailed Cart Management

- Individual product cards displaying thumbnail, plant name, unit cost, quantity controls (+ and -), and calculated item subtotal.
- Automatic removal when quantity decrements to zero.
- Dedicated item deletion button.
- Grand total order calculation.
- Continue Shopping and Checkout buttons (notifying "Coming Soon").

## Technologies Used

- React 18: Component-based user interface architecture and hooks (useState, useSelector, useDispatch).
- Redux Toolkit: Predictable state container for managing shopping cart state and actions.
- React-Redux: Official React bindings for Redux.
- Vite: Ultra-fast next-generation frontend build tooling.
- CSS3 / Flexbox & Grid: Modern, responsive, and mobile-friendly styling.

## Project Structure

```text
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── store.js
    ├── App.jsx
    ├── App.css
    ├── AboutUs.jsx
    ├── AboutUs.css
    ├── CartSlice.jsx
    ├── ProductList.jsx
    ├── ProductList.css
    ├── CartItem.jsx
    └── CartItem.css
```

## Installation and Setup

### Prerequisites

- Node.js (version 16 or newer)
- npm or yarn

### Steps to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/paradise-nursery.git
cd paradise-nursery
```

2. Install project dependencies:

```bash
npm install
```

3. Start the local development server:

```bash
npm run dev
```

4. Open in browser:

Navigate to http://localhost:5173 to test the application.

5. Build for production:

```bash
npm run build
```

## Author & License

Developed as part of the Final Project: Paradise Nursery Shopping Application.

Licensed under the MIT License.
