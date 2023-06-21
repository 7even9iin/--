import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/products')
    .then(items => setItems(items.data))
  }, [])

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  return (
    <div className="wrapper">
      <Header orders={orders} />
      <Items items={items} onAdd={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;