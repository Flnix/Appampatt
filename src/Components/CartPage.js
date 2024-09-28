// src/components/CartPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
export default function CartPage({ cartItems, handleClearCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);

  return (
    <>
    <NavBar/>
    <Container className="py-3 mt-5 " style={{ maxWidth: '1000px' }}>
    
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
          <Button variant="primary" onClick={() => alert('Proceeding to payment!')}>
            Proceed to Payment
          </Button>
          <Button variant="danger" className="ms-3" onClick={handleClearCart}>
            Clear Cart
          </Button>
          <Link to="/">
            <Button variant="secondary" className="ms-3">
              Back to Products
            </Button>
          </Link>
        </>
      )}
    </Container>
    </>
  );
}
