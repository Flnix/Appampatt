// src/components/CartPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Stylings/CartPage.css'; // Import custom CSS for styling

export default function CartPage({ cartItems, handleClearCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);

  return (
    <>
      <NavBar />
      <Container className="py-3 mt-5" style={{ maxWidth: '1000px' }}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart. Please add some products.</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    {item.product.name} - Quantity: {item.quantity}
                  </span>
                  <span>₹{(item.quantity * item.product.price).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <h5>Total Items: {totalItems}</h5>
            <h5>Total Price: ₹{totalPrice.toFixed(2)}</h5>

            <Button variant="danger" className="d-flex justify-content-right " onClick={handleClearCart}>
              Clear Cart
            </Button>

            {/* Bottom fixed overlay with flexbox styling */}
            <div className="bottom-overlay d-flex justify-content-between align-items-center p-3 mt-4">
              <Link to="/" className="flex-grow-1">
                <Button variant="secondary" className="w-100 back-button">
                  Back to Products
                </Button>
              </Link>
              <Link to="#" className="flex-grow-1 ms-2">
                <Button
                  variant="primary"
                  className="w-100 payment-button"
                  onClick={() => alert('Proceeding to payment!')}
                >
                  Proceed to Payment
                </Button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </>
  );
}
