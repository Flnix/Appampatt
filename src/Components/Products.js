import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import './Stylings/Products.css'; 
import NavBar from './NavBar';
import CustomCarousel from './CustomCarousel'; 
import ContactCard from './ContactCard';

export default function Products({ products, quantities, handleAddToCart }) {
  const [totalPrice, setTotalPrice] = useState(0);


  const handleQuantityChange = (productId, quantity) => {
    handleAddToCart(productId, quantity);
  };

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
      <Container fluid className="d-flex flex-column justify-content-start align-items-center mt-5" style={{ minHeight: '100vh' }}>
  
        <NavBar />

  
        <Container className="py-3" style={{ maxWidth: '600px' }}>
          <Row className="g-2 justify-content-center">
            {products.map((product) => (
              <Col key={product.id} xs={6} md={4} className="d-flex justify-content-center">
                <ProductsCard
                  product={product}
                  handleQuantityChange={handleQuantityChange}
                  quantity={quantities[product.id] || 0} 
                />
              </Col>
            ))}
          </Row>
        </Container>

        
        {totalPrice > 0 && (
          <div className="bottom-overlay">
            <span className="total-price">Total: ₹{totalPrice.toFixed(2)}</span>
            <Link to="/cart">
              <Button variant="success" className="show-cart-button">
                Show Cart
              </Button>
            </Link>
          </div>
        )}
      </Container>

      {/* below yello cardd */}
      <div className='my-5'>
        <ContactCard />
        <p className='text-white d-flex justify-content-center my-3'>@Copyright Appampatt Egg Sweet 2024</p>
      </div>
    </div>
  );
}
