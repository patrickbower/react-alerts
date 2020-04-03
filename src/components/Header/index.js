import React from 'react'
import './header.css';
// assets
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <div className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>My Great App</p>
    </div>
  );
}

export default Header;
