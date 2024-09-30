// src/components/ProductsCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Stylings/ProductCard.css';

// Function to format price to Indian number system
function formatPriceToINR(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export default function ProductsCard({ product, handleQuantityChange, quantity }) {
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    handleQuantityChange(product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      handleQuantityChange(product.id, newQuantity);
    }
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" className="square-img" src={product.img} />
      <Card.Body>
        <Card.Title className="card-title-small">{product.name}</Card.Title>
        <Card.Text className="product-weight">{product.weight}</Card.Text>
        
        {/* Display formatted price */}
        <Card.Text className="product-price">{formatPriceToINR(product.price)}</Card.Text>
        
        <div className="quantity-selector">
          <Button variant="secondary" onClick={handleDecrement}>-</Button>
          <Form.Control
            type="number"
            value={quantity}
            readOnly
            style={{ width: '50px', textAlign: 'center' }}
          />
          <Button variant="secondary" onClick={handleIncrement}>+</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
