import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import './Stylings/Products.css'; // Custom CSS for your product page styling
import NavBar from './NavBar';
import CustomCarousel from './CustomCarousel'; // Renamed to CustomCarousel to avoid confusion

export default function Products({ products, quantities, handleAddToCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to handle changes in quantity and update the cart accordingly
  const handleQuantityChange = (productId, quantity) => {
    handleAddToCart(productId, quantity);
  };

  // Calculate total price based on quantities and product prices
  useEffect(() => {
    const total = products.reduce((sum, product) => {
      const quantity = quantities[product.id] || 0;
      return quantity > 0 ? sum + product.price * quantity : sum;
    }, 0);
    setTotalPrice(total);
  }, [products, quantities]);

  return (
    <div className='bg-dark mt-5 pt-5'>
    
        <CustomCarousel />
     
    <Container fluid className="d-flex flex-column justify-content-start align-items-center mt-5 " style={{ minHeight: '100vh' }}>
      {/* Navbar component */}
      <NavBar />

      {/* Carousel component positioned at the top */}
      

      {/* Product list below the carousel */}
      
      <Container className="py-3" style={{ maxWidth: '600px' }}>
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
  </div>);
}
