import React, { useState } from 'react'
import './Navbar.css'
import { Assets } from '../../Assets/Assets'

const Navbar = ({ setShowLogin, setShowSignUp }) => {

  const [menu, setMenu] = useState("Home");


  return (
    <div className='navbar'>
      <img src={Assets.logo} alt=' ' className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</li>
        <li onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>About Us</li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>

        <img src={Assets.basket_icon} alt='' />
        <div className='dot'></div>

      </div>


      <button onClick={() => setShowSignUp(true)}>Sign Up</button>
      <button onClick={() => setShowLogin(true)}>Login</button>



    </div>
  )
}

export default Navbar
