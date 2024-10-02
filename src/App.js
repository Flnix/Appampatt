// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import CartPage from './Components/CartPage';
import ProductImage from './Images/ProductImage.jpg'
import Shop from './Components/Shop'
import History from './Components/History';
import Media from './Components/Media';
import AboutUs from './Components/AboutUs'
import { Navigate } from 'react-router-dom';
import './App.css'


const productList = [
  { id: 1, name: 'Buy 1Kg Get 100g free', price: 649.0, img: `${ProductImage}`,weight: "1Kg" },
  { id: 2, name: 'Buy 2Kg Get 250g free', price: 1260.0, img: `${ProductImage}`,weight: "2Kg"  },
  { id: 3, name: 'Mutta Mittai', price: 169.0, img: `${ProductImage}`,weight: "250g"  },
  { id: 4, name: 'Mutta Mittai', price: 339.0, img: `${ProductImage}`,weight: "500g"  },
  { id: 5, name: 'Mutta Mittai', price: 649.0, img: `${ProductImage}`,weight: "1Kg" },
  { id: 6, name: 'Mutta Mittai', price: 1299.0, img: `${ProductImage}`,weight: "2Kg" },
];

const currentOffers = [
  { id: 1, name: 'Buy 1Kg Get 100g free', price: 649.0, img: `${ProductImage}`,weight: "" },
  { id: 2, name: 'Buy 2Kg Get 250g free', price: 1260.0, img: `${ProductImage}`,weight: ""  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({}); 


  const handleAddToCart = (productId, quantity) => {
   
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));


    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex((item) => item.product.id === productId);


      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
     
        if (quantity === 0) {
          updatedCartItems.splice(existingItemIndex, 1);
        } else {
          updatedCartItems[existingItemIndex] = { ...updatedCartItems[existingItemIndex], quantity };
        }
        return updatedCartItems;
      } else if (quantity > 0) {
     
        const product = productList.find((product) => product.id === productId);
        return [...prevCartItems, { product, quantity }];
      }
      return prevCartItems;
    });
  };

  const handleClearCart = () => {setCartItems([]);
    setQuantities({});};

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path={"/home"}
            element={
              <Products
                products={productList}
                quantities={quantities} 
                currentOffers={currentOffers}
                handleAddToCart={handleAddToCart} 
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                handleClearCart={handleClearCart}
              />
            }
          />
          <Route path='/shop' element={<Shop
          products={productList}
          quantities={quantities} 
          currentOffers={currentOffers}
          handleAddToCart={handleAddToCart}/>}/>
          <Route path='/media' element={<Media/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/aboutus' element={<AboutUs/>} />
 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
