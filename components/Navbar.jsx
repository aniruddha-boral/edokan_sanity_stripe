import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineSmile } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
     
      <p className="navtitle">GULU
      </p>
       <p type="button" className="user-icon">
          <AiOutlineSmile />
       </p>
        <p type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart />
       <span className="cart-item-qty">{totalQuantities}</span>
      </p>
      {showCart && <Cart />}
    </div>
  )
}
export default Navbar