import React from 'react'
import './header.css';
// assets
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>My Great Application</h1>
    </div>
  );
}

export default Header;
