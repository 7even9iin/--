import React from 'react';

const Item = (props) => {
  const href = `/detalii/${props.item.title}/${props.item.desc}/${props.item.img}/${props.item.price}`;
  return (
    <div className='item'>
      <img src={"./img/" + props.item.img} />
      <h2 onClick={() => window.location.href = href} style={{ cursor: 'pointer' }}>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
    </div>
  );
};

export default Item;