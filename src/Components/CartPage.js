import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Stylings/CartPage.css';
import ContactCard from './ContactCard';
import CartIcon from '../Images/cart1.svg';
import { Form, Row, Col } from 'react-bootstrap';

export default function CartPage({ cartItems, handleClearCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />

      <div className="cart-page-container">
        <Container className="cart-content py-3 pt-5 mt-5" style={{ maxWidth: '1000px' }}>
          <h1 className="text-center mb-4 bg-warning p-3">
            <img className="cartIcon" src={CartIcon} alt="icon" /> Your Cart
          </h1>

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

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>Total Items: {totalItems}</h5>
            <h5>Total Price: ₹{totalPrice.toFixed(2)}</h5>
          </div>

          {cartItems.length > 0 && (
            <div className="d-flex justify-content-end mb-4">
              <Button variant="danger" className="clearcartbtn" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          )}
        </Container>

       
        <Container className="form-container my-4" style={{ maxWidth: '800px' }}>
          <h3 className="mb-3">Contact Information</h3>
          <Form>
            <Row className='mb-3'>
              <Col>
                <Form.Group>
                  <Form.Control placeholder="First name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control placeholder="Last name" />
                </Form.Group>
                
              </Col>

            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Enter Address" />
      </Form.Group>
          </Form>
        </Container>

        <ContactCard className="contact-card" />

        {cartItems.length > 0 && (
          <div className="bottom-overlay d-flex justify-content-between align-items-center p-3">
            <Link to="/" className="flex-grow-1 me-2">
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
        )}
      </div>
    </>
  );
}
