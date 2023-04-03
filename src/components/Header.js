import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const ShowOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  )
} 

const ShowNothing = () => {
  return (
    <div className='empty'>
      <h2>Cosul este gol</h2>
    </div>
  )
}

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>House staff</span>
        <ul className='nav'>
          <li>Despre noi</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-buttno ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              <ShowOrders orders={props.orders} /> : <ShowNothing />}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header;

