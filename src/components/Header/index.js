import React from 'react'
import './header.css';
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>Hello World!</p>
    </header>
  );
}

export default Header;
