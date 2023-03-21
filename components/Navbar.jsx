import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineDatabase } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <a href="/">
        <img class="img-responsive" src="/favicon.ico"/>
       </a>
      <p className="logo">ULU
      </p>
      <Link href="https://aniruddhaboral2.sanity.studio/desk">
          <button type="button" className="sanity-icon">
          <AiOutlineDatabase />
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