import React from 'react';

const Order = ({ item }) => {
  return (
    <div className='item'>
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
    </div>
  );
};

export default Order;
