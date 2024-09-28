// src/components/Products.js
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import './Stylings/Products.css';
import NavBar from './NavBar';

export default function Products({ products, quantities, handleAddToCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (productId, quantity) => {
    // Call handleAddToCart with the new quantity
    handleAddToCart(productId, quantity);
  };

  useEffect(() => {
    // Calculate the total only for products with quantity greater than zero
    const total = products.reduce((sum, product) => {
      const quantity = quantities[product.id] || 0; // Default to 0 if undefined
      return quantity > 0 ? sum + product.price * quantity : sum;
    }, 0);
    setTotalPrice(total);
  }, [products, quantities]);

  return (
    <Container fluid className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
      <NavBar />
      <Container className="py-3" style={{ maxWidth: '500px' }}>
        <Row className="g-2 justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={6} md={4} className="d-flex justify-content-center">
              <ProductsCard
                product={product}
                handleQuantityChange={handleQuantityChange}
                quantity={quantities[product.id] || 0} // Pass the current quantity from props
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="bottom-overlay">
        <span className="total-price">Total: ₹{totalPrice.toFixed(2)}</span>
        <Link to="/cart">
          <Button variant="success" className="show-cart-button">
            Show Cart
          </Button>
        </Link>
      </div>
    </Container>
  );
}
