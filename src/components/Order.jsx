import React from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";

const Order = ({ item, onRemove }) => {
  return (
    <div className='d-flex'>
      <div className='item'>
        <img src={"./img/" + item.img} />
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
      </div>
      <BsFillTrash3Fill onClick={onRemove} className='mt-3' size={20} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Order;