import React, { useState } from 'react';
import { FiCode, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false)

  return (
    <div className='header'>
      <div className='container'>
        <div className='header-con'>
          <div className='logo-container'>
            <a href='#home'>Logo <FiCode /></a>
          </div>
          <ul className={click ? 'menu active' : 'menu'}>
            <li className='menu-link' onClick={closeMobileMenu}>
              <a href="#home">Home</a>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
              <a href="#project">Project</a>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
              <a href="#stack">Stack</a>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;