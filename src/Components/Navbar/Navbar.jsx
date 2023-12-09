import React, { useContext } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const {getTotalCartItem} =useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li className='hr'><Link to='/' style={{textDecoration:'none'}}>Shop</Link></li>
        <li className='hr'><Link to='/mens' style={{textDecoration:'none'}}>Men</Link></li>
        <li className='hr'><Link to='/womens' style={{textDecoration:'none'}}>Women</Link></li>
        <li className='hr'><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link></li>
      </ul>
      <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt=""/></Link>
          <div className='nav-cart-count'>{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar

