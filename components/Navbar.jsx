import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, FcAddDatabase } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Online Shopping Platform</Link>
      </p>

      <Link href="https://aniruddhaboral2.sanity.studio/desk">
          <button type="button" className="sanity-icon">
          <FcAddDatabase />
          </button>
        </Link>

     
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
       <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar