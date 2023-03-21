import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineDatabase } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <a href="/">
        <img class="logo" src="/favicon.ico"/>
       </a>
      <h2 className="navtitle">ULU
      </h2>
      <Link href="https://aniruddhaboral2.sanity.studio/desk">
          <button type="button" className="sanity-icon">
          <AiOutlineDatabase />
          </button>
        </Link>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart />
       <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}
export default Navbar