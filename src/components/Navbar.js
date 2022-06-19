import React from 'react'
import '../styles/Navbar.css';
import logo from '../images/instagram.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} className="brand-logo" alt="Instagram" />
        </div>

        <div className="searchbar">
            <input type="text"  className="mysearch" placeholder='&#xf002; Search' />
        </div>

        <div className="nav-links">
            <i class="nav-icon fa-solid fa-house"></i>
            <i class="nav-icon fa-brands fa-facebook-messenger"></i>
            <i class="nav-icon fa-regular fa-square-plus"></i>
            <i class="nav-icon fa-solid fa-compass"></i>
            <i class="nav-icon fa-solid fa-heart"></i>
            <i class="nav-icon fa-solid fa-user"></i>
        </div>
    </nav>
  )
}

export default Navbar
