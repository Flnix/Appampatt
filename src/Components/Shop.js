import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import "./Stylings/Products.css";
import NavBar from "./NavBar";
import ContactCard from "./ContactCard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CurrentOffers from "./CurrentOffers";

export default function Shop({ products, quantities, handleAddToCart, currentOffers }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeTab, setActiveTab] = useState("All Products"); // Use state for active tab

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
    <div className="bg-dark mt-5 pt-5">
      <NavBar />

      {/* Use `activeKey` and `onSelect` to control the tabs */}
      <Tabs
        activeKey={activeTab} // Set the active tab
        onSelect={(k) => setActiveTab(k)} // Update state on tab change
        id="controlled-tab-example"
        className="justify-content-center custom-tabs"
      >
        <Tab eventKey="All Products" title="All Products">
          <Container fluid className="d-flex flex-column justify-content-start align-items-center mt-4">
            {/* Remove unnecessary minHeight from the CurrentOffers */}
            <CurrentOffers
              quantities={quantities}
              currentOffers={currentOffers}
              handleQuantityChange={handleQuantityChange}
            />

            <Container fluid className="d-flex flex-column justify-content-start align-items-center mt-4">
              <Container className="py-3" style={{ maxWidth: "600px", paddingBottom: "0" }}> {/* Remove extra padding */}
                <Row className="g-2 justify-content-center">
                  {/* Skip the first two items in the products array */}
                  {products.slice(2).map((product) => (
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
            </Container>
          </Container>
        </Tab>
        <Tab eventKey="Current Offers" title="Current Offers">
          <CurrentOffers
            quantities={quantities}
            currentOffers={currentOffers}
            handleQuantityChange={handleQuantityChange}
          />
        </Tab>
      </Tabs>

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

      <ContactCard />

      <div className="my-5">
        <p className="text-white d-flex justify-content-center my-3">
          @Copyright Appampatt Egg Sweet 2024
        </p>
      </div>
    </div>
  )
}
