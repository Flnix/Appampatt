// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import CartPage from './Components/CartPage';
import ProductImage from './Images/ProductImage.jpg'


// Dummy product data for demonstration purposes
const productList = [
  { id: 1, name: 'Product 1', price: 10.0, img: `${ProductImage}` },
  { id: 2, name: 'Product 2', price: 15.0, img: `${ProductImage}` },
  { id: 3, name: 'Product 3', price: 15.0, img: `${ProductImage}` },
  { id: 4, name: 'Product 4', price: 15.0, img: `${ProductImage}` },
  { id: 5, name: 'Product 5', price: 15.0, img: `${ProductImage}`},
  { id: 6, name: 'Product 6', price: 15.0, img: `${ProductImage}`},
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({}); // Shared state for product quantities

  // Handle quantity change for products and update the cart
  const handleAddToCart = (productId, quantity) => {
    // Update the quantities state
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));

    // Update the cart items state
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex((item) => item.product.id === productId);

      // If product is already in cart, update its quantity
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        // If quantity is zero, remove the product from the cart
        if (quantity === 0) {
          updatedCartItems.splice(existingItemIndex, 1);
        } else {
          updatedCartItems[existingItemIndex] = { ...updatedCartItems[existingItemIndex], quantity };
        }
        return updatedCartItems;
      } else if (quantity > 0) {
        // Add the product to cart if quantity is greater than 0
        const product = productList.find((product) => product.id === productId);
        return [...prevCartItems, { product, quantity }];
      }
      return prevCartItems; // Return the cart items as is if conditions don't match
    });
  };

  const handleClearCart = () => {setCartItems([]);
    setQuantities({});};

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={productList}
                quantities={quantities} // Pass down the shared quantities state
                handleAddToCart={handleAddToCart} // Pass down the handler
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                handleClearCart={handleClearCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
