import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillDatabase, AiFillBank, AiOutlineUser } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
     
      <p className="navtitle">GULU
      </p>
      <button className="user-icon" href="https://aniruddha-boral.netlify.app/">
          <AiOutlineUser />
       </button>
       <button className="order-icon" href="https://dashboard.stripe.com/test/payments">
          <AiFillBank />
       </button>
       <button className="stock-icon" href="https://aniruddhaboral2.sanity.studio/">
          <AiFillDatabase />
       </button>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart />
       <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}
export default Navbar