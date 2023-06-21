import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from '../components/Items';

export const Home = (props) => {
  return (
    <>
      <Header orders={props.orders} setOrders={props.setOrders} />
      <div className='presentation'></div>
      <Items items={props.items} onAdd={props.addToOrder} />
      <Footer />
    </>
  )
}