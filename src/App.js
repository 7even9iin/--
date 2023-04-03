import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import axios from 'axios';


function App() {
  const [orders, setOrders] = useState([]);
  const [items] = useState([
    {
      id: 1,
      title: 'Scaun Gri',
      img: 'chair-grey.webp',
      desc: 'Scaunul Brook are un design smart si minimalist, se integreaza perfect in livingul dumneavoastra oferindu-i o nota de eleganta.',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 2,
      title: 'Scaun Alb',
      img: 'chair-white.jpg',
      desc: 'Elegant si atragator, acest scaun este potrivit in sufrageriile clasice. Spatarul inalt tapitat cu stofa aduce un plus de stil.',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 3,
      title: 'Sofa',
      img: 'sofa.jpg',
      desc: 'LM-58 Color este o canapea extensibila cu cadru din placaj si lemn, transformandu-se cu usurinta in pat. tapitata cu stofa rezistenta si usor de intretinut.',
      category: 'chairs',
      price: '499.99'
    },
    {
      id: 4,
      title: 'Masa',
      img: 'table.jpg',
      desc: 'dxfchgvbj,n jgvhbhkgvhk vhkbj gmjvhbj',
      category: 'chairs',
      price: '149.99'
    },
    {
      id: 5,
      title: 'Lumina de perete',
      img: 'wall-light.webp',
      desc: 'dxfchgvbj,n jgvhbhkgvhk vhkbj gmjvhbj sdsadas das ad asd ada dasdad asd a',
      category: 'chairs',
      price: '99.99'
    },
  ]);

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





/*
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/items').then(response => {
      setItems(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

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
*/