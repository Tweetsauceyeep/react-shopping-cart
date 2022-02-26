import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Shoppingcart from './components/Shoppingcart'
import uniqid from 'uniqid';


let data = [
  {
    name: 'Champion Yellow Hoodie',
    image: 'CHAMPIONYELLOW_720x720.jpeg',
    price: 17.99,
    size: 'XL',
    id: uniqid(),
  },
  {
    name: 'Silk Varsity Jacket',
    image: 'DIGGSESSION-079_720x720.jpeg',
    price: 2.00,
    size: 'M',
    id: uniqid(),
  },
  {
    name: 'Champion Dr. Seuss jacket',
    image: 'DRSUUS_720x720.jpeg',
    price: 800,
    size: 'XXXXl',
    id: uniqid(),
  },
  {
    name: 'Polo Ralph Lauren Minion Shirt',
    image: 'Daminionshirt.jpeg',
    price: 100000,
    size: 'S',
    id: uniqid(),
  },
  {
    name: 'Vintage Polo Jacket',
    image: 'VNTGPOLOJACKET_720x720.jpeg',
    price: 40.00,
    size: 'L',
    id: uniqid(),
  },
  {
    name: 'Champion Blue Sweatshirt',
    image: 'bluechqaakpsjnc_720x720.jpeg',
    price: 60.00,
    size: 'XS',
    id: uniqid(),
  },
];

function App() {
  const [shopProducts, setShopProducts] = useState(data);
  const [shoppingCart, setShoppingCart] = useState([]);

  // gets id of button pressed and compares it to a product in the shop.
  // if it matches it gets pushed to the cart
  const handleAddToCart = e => {
    for (let i = 0; i < shopProducts.length; i++) {
      if (e.target.id === shopProducts[i].id) {
        setShoppingCart([...shoppingCart, shopProducts[i]]);
        console.log(shoppingCart);
      }
    }
  };

  const handleTotalPrice = (shopArray)=>{
    for ( let i = 0 ; i < shopArray.length;i++ ){
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop products={shopProducts} handleAddToCart={handleAddToCart} />
          }
        />
        <Route path="/shoppingcart" element={<Shoppingcart shoppingCart={shoppingCart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
