// src/components/CartPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Stylings/CartPage.css'; 

export default function CartPage({ cartItems, handleClearCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);

  return (
    <>
      <NavBar />
      <Container className="py-3 pt-5 mt-5" style={{ maxWidth: '1000px' }}>
        <h1 className="text-center mb-4">Your Cart</h1>
        

        {cartItems.length === 0 ? (
          <p className="text-center">No items in the cart. Please add some products.</p>
        ) : (
          <Table bordered hover responsive className="text-center mb-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.product.price.toFixed(2)}</td>
                  <td>₹{(item.quantity * item.product.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {/* Total Summary and Buttons */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>Total Items: {totalItems}</h5>
          <h5>Total Price: ₹{totalPrice.toFixed(2)}</h5>
        </div>
        
        {/* Clear Cart Button */}
        <div className="d-flex justify-content-end mb-4">
          {cartItems.length > 0 && (
            <Button variant="danger" onClick={handleClearCart}>
              Clear Cart
            </Button>
          )}
        </div>

        {/* Bottom Fixed Overlay with Navigation Buttons */}
        <div className="bottom-overlay d-flex justify-content-between align-items-center p-3 mt-4">
          <Link to="/" className="flex-grow-1 me-2">
            <Button variant="secondary" className="w-100 back-button">
              Back to Products
            </Button>
          </Link>
          {cartItems.length > 0 && (
            <Link to="#" className="flex-grow-1 ms-2">
              <Button
                variant="primary"
                className="w-100 payment-button"
                onClick={() => alert('Proceeding to payment!')}
              >
                Proceed to Payment
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </>
  );
}
