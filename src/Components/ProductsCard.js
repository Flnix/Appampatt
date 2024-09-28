// src/components/ProductsCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Stylings/ProductCard.css'

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
    <Card>
      <Card.Img variant="top" className='square-img' src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>₹{product.price.toFixed(2)}</Card.Text>
        <div className="quantity-selector">
          <Button variant="secondary" onClick={handleDecrement}>-</Button>
          <Form.Control type="number" value={quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
          <Button variant="secondary" onClick={handleIncrement}>+</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
