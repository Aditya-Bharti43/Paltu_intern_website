import React from 'react'
import { useState } from 'react';
import logo_img from '../../assets/header_1_logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="logo">
        <img className='logo_img' src={logo_img} alt="" onClick={toggleMenu} />
      </div>


      {/* Side Menu */}
      {isMenuOpen && (
        <div className="side-menu">
          <button className="close-btn" onClick={toggleMenu}>
            &times;
          </button>
          <h2 className="menu-title">Menu</h2>
          <ul className="menu-items">
            <img className='side-menu-img' src="https://www.mypaaltu.com/wp-content/uploads/2023/01/menu-img.png" alt="" />
            <div className="side-menu-routes">
            <Link to={`/`} > <li>Home</li></Link>
            <Link to={`/blogs`}><li>Blogs</li></Link>
            <Link to={`/aboutus`}><li>About Us</li></Link>
            <Link to={`/contactus`}><li>Contact Us</li></Link>
            </div>
            <li>Let's connect or make our pets connect?</li>
          </ul>
        </div>
      )}

    </>
  )
}

export default Header
