import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Shoppingcart from './components/Shoppingcart';
import uniqid from 'uniqid';

//let data = ;

function App() {
  const [shopProducts, setShopProducts] = useState([
    {
      name: 'Champion Yellow Hoodie',
      image: 'CHAMPIONYELLOW_720x720.jpeg',
      price: '17.99',
      size: 'XL',
      id: uniqid(),
      amount: 0,
    },
    {
      name: 'Silk Varsity Jacket',
      image: 'DIGGSESSION-079_720x720.jpeg',
      price: '2.0',
      size: 'M',
      id: uniqid(),
      amount: 0,
    },
    {
      name: 'Champion Dr. Seuss jacket',
      image: 'DRSUUS_720x720.jpeg',
      price: '800.00',
      size: 'XXXXl',
      id: uniqid(),
      amount: 0,
    },
    {
      name: 'Polo Ralph Lauren Minion Shirt',
      image: 'Daminionshirt.jpeg',
      price: '100000.00',
      size: 'S',
      id: uniqid(),
      amount: 0,
    },
    {
      name: 'Vintage Polo Jacket',
      image: 'VNTGPOLOJACKET_720x720.jpeg',
      price: '40.0',
      size: 'L',
      id: uniqid(),
      amount: 0,
    },
    {
      name: 'Champion Blue Sweatshirt',
      image: 'bluechqaakpsjnc_720x720.jpeg',
      price: '60.0',
      size: 'XS',
      id: uniqid(),
      amount: 0,
    },
  ]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      price = price + parseFloat(shoppingCart[i].price);
    }
    setTotalPrice(price);
  },[shoppingCart]);

  // gets id of button pressed and compares it to a product in the shop.
  // if it matches it gets pushed to the cart
  const handleAddToCart = e => {
    for (let i = 0; i < shopProducts.length; i++) {
      if (e.target.id === shopProducts[i].id) {
        setShoppingCart([...shoppingCart, shopProducts[i]]);
      }
    }
  };

  const handleFunctionsOnClick = e => {
    handleAddToCart(e);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={shopProducts}
              handleFunctionsOnClick={handleFunctionsOnClick}
            />
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <Shoppingcart shoppingCart={shoppingCart} totalPrice={totalPrice} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
