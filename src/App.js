import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import { Contacte } from "./pages/Contacte";
import { DespreNoi } from "./pages/DespreNoi";
import { Home } from "./pages/Home";
import { PaginaCuDetalii } from "./pages/PaginaCuDetalii";

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
      <Routes>
        <Route path="/" element={<Home orders={orders} setOrders={setOrders} items={items} addToOrder={addToOrder} />} />
        <Route path="DespreNoi" element={<DespreNoi orders={orders} />} />
        <Route path="Contacte" element={<Contacte orders={orders} />} />
        <Route path="detalii/:title/:desc/:img/:price" element={<PaginaCuDetalii orders={orders} />} />
      </Routes>
    </div >
  );
}

export default App;