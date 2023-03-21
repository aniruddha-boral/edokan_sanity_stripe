import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineSmile } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <a href="/">
        <img class="logo" src="/favicon.ico"/>
       </a>
      <p className="navtitle">ULU
      </p>
       <a type="button" className="user-icon">
          <AiOutlineSmile />
       </a>
        <a type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart />
       <span className="cart-item-qty">{totalQuantities}</span>
      </a>
      {showCart && <Cart />}
    </div>
  )
}
export default Navbar