import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            Instagram
        </div>

        <div className="searchbar">
            <input type="text" placeholder="&#128269; Search" />
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
